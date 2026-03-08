const challenges: string[] = [
  "What part of this answer is still edited? You wrote the version that makes you look thoughtful. What's the version that makes you uncomfortable?",
  "You're describing what 'people' do. But you're not 'people.' Where does this show up in your life — specifically, recently, in a way you can feel?",
  "This reads like an insight you'd be comfortable posting publicly. That usually means it's not the honest version yet. What did you avoid naming directly?",
  "You might be right. But notice how quickly you arrived at this answer. Speed in self-reflection is usually a sign you reached for a familiar story instead of looking at what's actually there.",
  "What would a harsher but truer version of this sound like? Not cruel — just the version without the padding.",
  "Good. Now try the opposite. Argue against your own point as hard as you can. What's the strongest case that you're wrong?",
  "This is thoughtful, but it's also safe. Where's the part that costs you something to admit? That's where the real insight usually lives.",
  "You're being kind to yourself here. That's fine — but kindness and honesty aren't always the same thing. Which one are you choosing right now?",
];

const refinements: string[] = [
  "Your core insight seems to be: {CORE}. The strongest version is probably just one clear sentence. Strip everything else.",
  "There's a strong idea buried in here. Right now it's wrapped in qualifiers. Try stating it as a direct claim — no 'maybe,' no 'I think,' no 'it seems like.'",
  "You're circling something important but haven't landed on it yet. The word you need isn't in your reflection — it's the name for the gap between what you do and what you pretend to do. Try naming that gap.",
  "This reads like thinking-out-loud. Take just the last sentence and rewrite it as if it were the first sentence of an essay someone would actually want to read.",
  "Strong direction. Now strip away every word that doesn't earn its place. Great insight gets more powerful as it gets shorter, not longer.",
  "You have two ideas here competing for space. Pick the one that's more true, and let the other one go. Depth over breadth.",
];

const conversationVersions: string[] = [
  "Here's how this might land in conversation:\n\n**Casual:** \"I've been thinking about this thing where {CASUAL}. It's kind of everywhere once you see it.\"\n\n**Thoughtful:** \"There's this pattern I keep noticing — {THOUGHTFUL}. And I think it explains more than we realize.\"\n\n**Sharp:** \"{SHARP}\"",
  "To make this conversational:\n\n**Opening line:** \"You know what I realized recently? {OPENING}\"\n\n**If someone asks you to elaborate:** \"{ELABORATE}\"\n\n**The one-liner version:** \"{ONELINER}\"",
  "Three ways to bring this into a real conversation:\n\n**As an observation:** \"Have you ever noticed that {OBSERVATION}?\"\n\n**As a question:** \"What do you think — is it true that {QUESTION}?\"\n\n**As a provocation:** \"{PROVOCATION}\"",
];

// After-response deepening challenges (for Day 5 / Tier 3 prompts)
export const deepeningChallenges: string[] = [
  "What part of this answer is still edited for comfort?",
  "What did you avoid naming directly?",
  "What would the version without self-protection sound like?",
  "If you're being truly honest — is this the real answer, or the answer you can live with?",
  "You do not need to be noble here. Just accurate.",
];

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getMockChallenge(_arcTitle: string, _userText: string): string {
  return randomFrom(challenges);
}

export function getMockRefinement(userText: string): string {
  const template = randomFrom(refinements);
  const core = userText.length > 80 ? userText.slice(0, 80) + "..." : userText;
  return template.replace("{CORE}", `"${core}"`);
}

export function getMockConversationVersion(userText: string): string {
  const template = randomFrom(conversationVersions);
  const short = userText.length > 60 ? userText.slice(0, 60) + "..." : userText;
  return template
    .replace(/{CASUAL}/g, short.toLowerCase())
    .replace(/{THOUGHTFUL}/g, short)
    .replace(/{SHARP}/g, short)
    .replace(/{OPENING}/g, short)
    .replace(/{ELABORATE}/g, userText.slice(0, 120))
    .replace(/{ONELINER}/g, short)
    .replace(/{OBSERVATION}/g, short.toLowerCase())
    .replace(/{QUESTION}/g, short.toLowerCase())
    .replace(/{PROVOCATION}/g, short);
}
