import { createClient } from "@/lib/supabase/server";

// Conservative estimated costs per endpoint (USD)
const ENDPOINT_COSTS: Record<string, number> = {
  speak: 0.03, // tts-1 ~2000 chars
  rehearse: 0.0005, // gpt-4o-mini ~200 tokens
  challenge: 0.0005, // gpt-4o-mini ~250 tokens
  refine: 0.0005, // gpt-4o-mini ~300 tokens
  transcribe: 0.015, // whisper-1 ~1 min audio
  "weekly-letter": 0.02, // gpt-4o-mini + tts-1
  patterns: 0.001, // gpt-4o-mini ~600 tokens
};

const MONTHLY_LIMIT_USD = 30;

interface UsageCheckResult {
  allowed: boolean;
  userId: string | null;
  totalSpent: number;
  error?: string;
}

/**
 * Check if user is under the $30/month spending limit.
 * Returns userId for logging after the API call succeeds.
 */
export async function checkUsageLimit(
  endpoint: string
): Promise<UsageCheckResult> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { allowed: false, userId: null, totalSpent: 0, error: "Authentication required" };
  }

  // Get the first day of the current month
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  const { data, error } = await supabase
    .from("ai_usage")
    .select("estimated_cost")
    .eq("user_id", user.id)
    .gte("created_at", monthStart);

  if (error) {
    console.error("Usage tracking query failed:", error);
    // Fail open — don't block users if the table doesn't exist yet
    return { allowed: true, userId: user.id, totalSpent: 0 };
  }

  const totalSpent = (data || []).reduce(
    (sum, row) => sum + (row.estimated_cost || 0),
    0
  );

  const estimatedCost = ENDPOINT_COSTS[endpoint] || 0.01;

  if (totalSpent + estimatedCost > MONTHLY_LIMIT_USD) {
    return {
      allowed: false,
      userId: user.id,
      totalSpent,
      error: `Monthly AI usage limit reached ($${totalSpent.toFixed(2)}/$${MONTHLY_LIMIT_USD})`,
    };
  }

  return { allowed: true, userId: user.id, totalSpent };
}

/**
 * Log usage after a successful API call.
 */
export async function logUsage(
  userId: string,
  endpoint: string
): Promise<void> {
  const supabase = await createClient();
  const estimatedCost = ENDPOINT_COSTS[endpoint] || 0.01;

  const { error } = await supabase.from("ai_usage").insert({
    user_id: userId,
    endpoint,
    estimated_cost: estimatedCost,
  });

  if (error) {
    console.error("Failed to log AI usage:", error);
  }
}
