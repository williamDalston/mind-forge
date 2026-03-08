import { WeeklyArc } from "@/types";

export const weeklyArcs: WeeklyArc[] = [
  // ─────────────────────────────────────────────
  // ARC 1: HUMAN NATURE
  // ─────────────────────────────────────────────
  {
    id: "arc-1",
    title: "Human Nature",
    slug: "human-nature",
    description:
      "What actually drives people beneath the surface — desire, status, belonging, shame, admiration, ego, and self-deception.",
    themeCategory: "psychology",
    dailyPrompts: [
      {
        id: "arc-1-day-1",
        weeklyArcId: "arc-1",
        dayIndex: 0,
        dayLabel: "Observe",
        title: "The Real Signal",
        sparkForm: "observation_seed",
        depthTier: 1,
        sparkText:
          "People rarely reveal themselves in what they praise. They reveal themselves in what they envy, resent, and keep returning to.\n\nAdmiration is easy to perform. Envy is almost impossible to fake. Resentment slips out sideways — in the joke that cuts a little too deep, the compliment that curdles at its edges, the subject someone circles back to without knowing why.\n\nForget what people say they value. Watch what makes their jaw tighten. Watch what they can't stop mentioning. Watch the reaction that arrives before they've had time to choose it.\n\nThat involuntary flinch is worth more than a hundred mission statements.",
        reflectionPrompt:
          "What do envy and resentment reveal about a person that admiration often hides?",
        extensionPrompt:
          "Think of someone whose reactions tell you more than their stated values do. What do you see when you read the involuntary signal instead of the curated one?",
        distillationPrompt:
          "\"The real signal in a person is often...\"",
        applicationPrompt:
          "Today, watch for the involuntary signal — in others, and in yourself. What shows up in what you resent or can't stop noticing?",
        tensionNote: "The gap between what people display and what they reveal involuntarily",
        emotionalGoal: "Safe observation. Looking outward with sharper eyes.",
        tags: ["psychology", "self-knowledge"],
      },
      {
        id: "arc-1-day-2",
        weeklyArcId: "arc-1",
        dayIndex: 1,
        dayLabel: "Name",
        title: "The Unspoken Want",
        sparkForm: "uncomfortable_question",
        depthTier: 2,
        sparkText:
          "What do you pretend not to want?\n\nAdmiration. Control. Safety. Validation. Desirability. Importance. Revenge. Peace. To be chosen. To be right.\n\nSay it without softening it. Don't dress it in the language of virtue — 'I just want to help,' 'I don't care what people think,' 'It's not about the money.' Those are the press releases. Underneath them is a want so specific it has teeth.\n\nThe person who insists she doesn't need recognition is often keeping a meticulous ledger of who noticed and who didn't. The man who says he's 'not competitive' can tell you exactly where he ranks.\n\nHonesty starts where the costume comes off.",
        reflectionPrompt:
          "Name it directly: what do you want that you've dressed up in more acceptable language?",
        extensionPrompt:
          "Why is it easier to call this 'human nature' than to call it yours? What makes this specific want hard to own?",
        distillationPrompt:
          "\"What I don't like admitting I want is...\"",
        applicationPrompt:
          "Today, try noticing when you use indirect language to mask a direct want. What shifts when you see it plainly?",
        tensionNote: "The cost of honesty about desire vs. the cost of disguising it",
        emotionalGoal: "Getting specific. Starting to name things that are usually left unnamed.",
        tags: ["psychology", "self-knowledge", "relationships"],
      },
      {
        id: "arc-1-day-3",
        weeklyArcId: "arc-1",
        dayIndex: 2,
        dayLabel: "Complicate",
        title: "Expression and Performance",
        sparkForm: "paradox",
        depthTier: 2,
        sparkText:
          "The moment you notice you're being authentic, you've introduced a witness. And a witness changes the act.\n\nThis is the paradox at the center of every honest person's life. Being seen can deepen you — the right listener draws out truths you didn't know you carried. But being seen can also flatten you into a character, someone performing depth rather than possessing it.\n\nWhen did your vulnerability last serve the relationship, and when did it serve your image? When did sharing become curating? You felt the difference at the time, even if you pretended not to.\n\nThe most honest version of you might be the one that exists when the audience disappears entirely.",
        reflectionPrompt:
          "Where is the line between expression and performance? Have you ever crossed it without realizing?",
        extensionPrompt:
          "Think of a time you were being real and curating it at the same time. What were you optimizing for?",
        distillationPrompt:
          "\"Authenticity starts to distort when...\"",
        tensionNote: "Authenticity vs. the inevitable curation that comes with self-awareness",
        emotionalGoal: "Introducing tension. It's not as simple as 'be yourself.'",
        tags: ["psychology", "philosophy", "self-knowledge"],
      },
      {
        id: "arc-1-day-4",
        weeklyArcId: "arc-1",
        dayIndex: 3,
        dayLabel: "Compare",
        title: "Ambition as Disguised Longing",
        sparkForm: "inversion",
        depthTier: 2,
        sparkText:
          "Status is not the opposite of love. It might be one of the ways people try to secure it.\n\nThe person climbing the ladder tells herself it's about mastery. More often, it's about mattering — being someone who cannot be overlooked. The person who gives endlessly frames it as generosity. Sometimes it's about being needed, which is a quieter form of control. The one who never disagrees calls it kindness. Usually it's about belonging at whatever cost.\n\nEach need is real. But people confuse them constantly — pursuing status when they're lonely, pursuing love when they want power, pursuing approval when they ache for something they can't name.\n\nLives built on the wrong foundation still stand. They just never feel like home.",
        reflectionPrompt:
          "How do status, admiration, belonging, and love overlap in your life? Which one are you actually pursuing most?",
        extensionPrompt:
          "Which matters more to you: being valued, being desired, being respected, or being irreplaceable? Be precise about the difference.",
        distillationPrompt:
          "\"Under many forms of ambition sits...\"",
        tensionNote: "The uncomfortable overlap between achievement and emotional hunger",
        emotionalGoal: "Seeing connections. Pattern recognition across different drives.",
        tags: ["psychology", "relationships", "self-knowledge"],
      },
      {
        id: "arc-1-day-5",
        weeklyArcId: "arc-1",
        dayIndex: 4,
        dayLabel: "Apply",
        title: "The Mixed Motive",
        sparkForm: "uncomfortable_question",
        depthTier: 3,
        sparkText:
          "Think of the last time you did something generous, thoughtful, or impressive. Hold it in your mind.\n\nNow be precise: how much of it was for them — and how much was for the version of yourself you wanted to feel you were?\n\nDon't rush past this. Sit with the ratio. Most people never examine it, because the moment you look at it directly, the story starts to crack. The selfless act had a selfish lining. The kindness was also a performance. The sacrifice tasted, faintly, like self-congratulation.\n\nThis is not about guilt. Mixed motives are the human condition. But refusing to look at them doesn't make you good. It makes you comfortable.",
        reflectionPrompt:
          "Do not defend yourself. Just estimate honestly: in that generous or impressive act, what was the real ratio between other-directed and self-directed motivation?",
        extensionPrompt:
          "What does your answer reveal about the kind of witness you need from other people? What would remain if nobody could see you do it?",
        distillationPrompt:
          "\"My goodness becomes mixed with performance when...\"",
        applicationPrompt:
          "Where in your life right now are you doing the right thing for a partially false reason? Name it specifically.",
        tensionNote: "The gap between selfless narrative and mixed reality",
        emotionalGoal: "The turn inward. This should sting slightly. Honesty over comfort.",
        tags: ["self-knowledge", "psychology", "philosophy"],
      },
      {
        id: "arc-1-day-6",
        weeklyArcId: "arc-1",
        dayIndex: 5,
        dayLabel: "Articulate",
        title: "Hypocrisy and Wisdom",
        sparkForm: "historical_mirror",
        depthTier: 2,
        sparkText:
          "Seneca preached virtue from a palace. He wrote about simplicity while advising an emperor, about detachment while accumulating enormous wealth. His critics called him a fraud. His defenders said wisdom doesn't require perfection.\n\nTwenty centuries later, the question still has teeth: how much inconsistency can a person carry before their insight becomes counterfeit? At what point does the gap between belief and behavior swallow the belief?\n\nYou apply a standard to this question. But here's what's worth noticing: the standard you use for others and the standard you use for yourself are almost certainly different. You see Seneca's hypocrisy clearly. Your own gets a gentler name — complexity, nuance, 'I'm working on it.'",
        reflectionPrompt:
          "How much inconsistency can a person have before their wisdom becomes counterfeit? Where do you draw that line?",
        extensionPrompt:
          "What standard do you secretly fear being judged by? Turn your deepest insight from this week into a line you could say naturally to someone over dinner.",
        distillationPrompt:
          "\"Wisdom without perfect consistency is still possible, but...\"",
        applicationPrompt:
          "Craft your sharpest insight from this week in three forms: casual, thoughtful, and one memorable line.",
        tensionNote: "The gap between knowing and living — and whether that gap invalidates the knowing",
        emotionalGoal: "Discipline after vulnerability. Articulate what you've seen.",
        tags: ["communication", "philosophy", "self-knowledge"],
      },
      {
        id: "arc-1-day-7",
        weeklyArcId: "arc-1",
        dayIndex: 6,
        dayLabel: "Synthesize",
        title: "Seeing Clearly Without Cynicism",
        sparkForm: "observation_seed",
        depthTier: 2,
        sparkText:
          "Cynicism is the easy door. You see that motives are mixed, that generosity has a shadow, that people perform their virtues — and you decide the whole thing is rotten. 'People are terrible. Nothing is real.' It feels like wisdom. It's actually a refusal to hold complexity.\n\nThe harder position — the one that takes more nerve — is this: people are mixed, motives are layered, and clear sight makes compassion possible, not impossible. Seeing someone's selfishness doesn't cancel their kindness. It makes the kindness more interesting.\n\nThis week wasn't about whether human motives are pure. They never are. It was about whether you can bear to see them clearly — including your own — and still choose to engage rather than withdraw.",
        reflectionPrompt:
          "What did you learn about human nature this week that includes you? What became harder to deny?",
        extensionPrompt:
          "Has seeing human motives more clearly made you more cynical or more compassionate? Why?",
        distillationPrompt:
          "\"One truth about people I want to keep is...\"\n\"One truth about myself I do not want to forget is...\"",
        applicationPrompt:
          "What single insight from this week will you carry forward? How will it change the way you see people or make decisions?",
        tensionNote: "Clear sight vs. cynicism — whether honesty about motives leads to wisdom or despair",
        emotionalGoal: "Integration. Gathering what stays with you.",
        tags: ["psychology", "self-knowledge", "philosophy"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // ARC 2: JUDGMENT
  // ─────────────────────────────────────────────
  {
    id: "arc-2",
    title: "Judgment",
    slug: "judgment",
    description:
      "Sharpen your ability to decide well — by seeing tradeoffs, incentives, second-order effects, and the patterns in your own decision-making.",
    themeCategory: "strategy",
    dailyPrompts: [
      {
        id: "arc-2-day-1",
        weeklyArcId: "arc-2",
        dayIndex: 0,
        dayLabel: "Observe",
        title: "Outcomes vs. Process",
        sparkForm: "inversion",
        depthTier: 1,
        sparkText:
          "A surgeon makes the right call and the patient dies. A gambler makes a reckless bet and walks away rich. Which one made the better decision?\n\nIf you said the gambler, you've just made the most common error in judgment: confusing the outcome with the thinking that preceded it.\n\nGood decisions can produce terrible results — the world has variables no one controls. Bad decisions can produce windfalls — recklessness sometimes gets lucky. Results include timing, chance, and a thousand invisible factors. The decision includes only what you could know, weigh, and choose at the time.\n\nMost people evaluate backwards. They see the outcome and reverse-engineer whether the decision was sound. This means they learn the wrong lessons from both success and failure — punishing good thinking that got unlucky and rewarding bad thinking that didn't.",
        reflectionPrompt:
          "Think of a decision you made that worked out well. Was it genuinely good thinking, or was luck involved? Now think of a 'bad' outcome — was the decision itself actually sound?",
        extensionPrompt:
          "How does this distinction between process and outcome apply to something you're deciding right now?",
        distillationPrompt:
          "\"Good judgment is not about... it's about...\"",
        applicationPrompt:
          "Today, catch yourself evaluating a decision by its result. Try evaluating the thinking instead.",
        tensionNote: "We want decisions to guarantee outcomes, but they can't",
        emotionalGoal: "Safe intellectual reframe. Challenge a deeply held assumption.",
        tags: ["strategy", "decision-making"],
      },
      {
        id: "arc-2-day-2",
        weeklyArcId: "arc-2",
        dayIndex: 1,
        dayLabel: "Name",
        title: "The Hidden Incentive",
        sparkForm: "observation_seed",
        depthTier: 2,
        sparkText:
          "'Show me the incentive and I will show you the outcome.' — Charlie Munger\n\nDoctors who own their own imaging equipment order more scans. Financial advisors on commission recommend more products. The friend who needs your approval agrees with everything you say. None of these people think they're being dishonest. The incentive is doing the thinking for them.\n\nThis lens dissolves almost every puzzling human behavior. Stop asking 'Why would they do that?' and start asking 'What are they being rewarded for?' The confusion evaporates.\n\nNow turn the lens around: what incentives are shaping your behavior right now — ones you never consciously chose? Your salary structure, your social circle's approval mechanisms, the metrics your company tracks — these are sculpting your decisions while you imagine you're thinking freely.",
        reflectionPrompt:
          "What incentives are shaping your life right now — at work, in relationships, in how you spend your time — that you didn't deliberately set up?",
        extensionPrompt:
          "Name a specific incentive that's pulling you away from what you actually value. What would it take to restructure it?",
        distillationPrompt:
          "\"Before judging someone's behavior, first look at...\"",
        applicationPrompt:
          "Today, when someone's behavior puzzles or frustrates you, ask: 'What are they being rewarded for?' Watch how the confusion dissolves.",
        tensionNote: "We judge people's character when we should examine their incentives — including our own",
        emotionalGoal: "Getting specific about invisible structures that shape behavior.",
        tags: ["strategy", "decision-making", "psychology"],
      },
      {
        id: "arc-2-day-3",
        weeklyArcId: "arc-2",
        dayIndex: 2,
        dayLabel: "Complicate",
        title: "And Then What?",
        sparkForm: "scenario",
        depthTier: 2,
        sparkText:
          "A company fires its most experienced employees to cut costs. The spreadsheet looks brilliant — immediate savings, leaner headcount, margins up.\n\nSix months later: institutional knowledge has evaporated. New hires make mistakes the veterans would have caught in their sleep. The best remaining people, watching management gut the senior ranks, start interviewing elsewhere. Recruiting costs surge. Training costs surge. The 'savings' now cost three times what they saved.\n\nFirst-order thinking asks: 'What happens if I do this?' Second-order thinking asks: 'And then what?' Third-order asks: 'And then what after that?'\n\nAlmost every disastrous decision looked smart at first order. The discipline is refusing to stop at the first answer — following the chain until the real consequences come into view. Most bad judgment isn't wrong. It's just premature.",
        reflectionPrompt:
          "Think of a time when a 'smart' short-term decision created unexpected long-term damage. What was the second-order effect nobody anticipated?",
        extensionPrompt:
          "Take a current decision in your life and ask 'and then what?' three times. Where does it lead?",
        distillationPrompt:
          "\"First-order thinkers optimize for... while second-order thinkers optimize for...\"",
        tensionNote: "The seduction of obvious, immediate benefits vs. the discipline of thinking forward",
        emotionalGoal: "Adding complexity. The obvious answer is rarely the full answer.",
        tags: ["strategy", "decision-making"],
      },
      {
        id: "arc-2-day-4",
        weeklyArcId: "arc-2",
        dayIndex: 3,
        dayLabel: "Compare",
        title: "One-Way and Two-Way Doors",
        sparkForm: "paradox",
        depthTier: 2,
        sparkText:
          "You're agonizing over a decision that you could reverse in a week. Meanwhile, you made a permanent decision last month without thinking twice. This asymmetry is everywhere.\n\nJeff Bezos calls them 'one-way doors' and 'two-way doors.' One-way doors are irreversible — marry, quit, publish, say the thing that can't be unsaid. Two-way doors are reversible — try the new approach, test the idea, take the trip.\n\nMost people treat two-way doors like one-way doors: deliberating endlessly over choices they could undo tomorrow. And then they treat one-way doors like two-way doors: being casual with the decisions that will actually define their lives.\n\nThe first pattern breeds paralysis. The second breeds wreckage. Great judgment begins with a simple question most people never ask: which kind of door am I standing in front of?",
        reflectionPrompt:
          "Where in your life are you overthinking something that's actually reversible? Where might you be too casual about something that isn't?",
        extensionPrompt:
          "Think of the biggest decision you're currently facing. Is it a one-way or two-way door? How should that classification change your speed and approach?",
        distillationPrompt:
          "\"Most decision paralysis comes from treating... as if it were...\"",
        applicationPrompt:
          "Today, make one small decision faster by recognizing it's a two-way door. Notice what it feels like to stop deliberating.",
        tensionNote: "Speed vs. caution — neither is always right, and most people default to the wrong one",
        emotionalGoal: "Pattern recognition. Seeing your own default mode.",
        tags: ["strategy", "decision-making"],
      },
      {
        id: "arc-2-day-5",
        weeklyArcId: "arc-2",
        dayIndex: 4,
        dayLabel: "Apply",
        title: "Your Judgment Autopilot",
        sparkForm: "uncomfortable_question",
        depthTier: 3,
        sparkText:
          "You have a default. It runs beneath every decision like an operating system you never installed.\n\nSome people rush. They mistake speed for decisiveness and call their impulsiveness 'bias toward action.' Some people delay. They mistake deliberation for thoroughness and call their paralysis 'being careful.' Some seek consensus — not to get input, but to distribute responsibility so no one can blame them alone. Some go contrarian, because disagreeing feels like thinking.\n\nNone of these defaults is always wrong. Each one occasionally saves you. But none is always right either — and the problem is that your default doesn't announce itself. It just feels like 'how you think.' It feels like you.\n\nSo: what is yours? Not the flattering name you give it. The pattern someone who watches you closely would describe.",
        reflectionPrompt:
          "Be specific: do you tend to rush, delay, seek approval, go contrarian, avoid conflict, overthink, or something else? Don't pick the flattering version.",
        extensionPrompt:
          "Think of a recent decision where your default pattern hurt the outcome. What would the opposite approach have looked like? Why didn't you take it?",
        distillationPrompt:
          "\"I make my worst decisions when I...\"",
        applicationPrompt:
          "Today, when you face a decision, consciously try the opposite of your default. If you usually rush, pause. If you usually deliberate, act. What do you notice?",
        tensionNote: "The comfort of your default mode vs. the cost of never questioning it",
        emotionalGoal: "The turn. Confrontation with your own patterns. This should be specific and uncomfortable.",
        tags: ["decision-making", "self-knowledge"],
      },
      {
        id: "arc-2-day-6",
        weeklyArcId: "arc-2",
        dayIndex: 5,
        dayLabel: "Articulate",
        title: "Saying What You Weighed",
        sparkForm: "scenario",
        depthTier: 2,
        sparkText:
          "Two people make the same difficult call. One says: 'I just went with my gut. It felt right.' The other says: 'Here's what I weighed. Here's what I didn't know. Here's the risk I accepted. Here's why I chose this anyway.'\n\nThe second person isn't more certain. They're more clear. And clarity is more trustworthy than confidence — because clarity lets you see whether the reasoning is sound, while confidence only lets you see that someone believes it is.\n\nThe ability to articulate tradeoffs without hiding behind false certainty or vague intuition — that is a form of intelligence in itself. It's not just a communication skill. It's a thinking skill. You cannot clearly explain reasoning you haven't clearly done.\n\nPoor thinkers hide behind jargon and gut feelings. The sharpest minds show their work — including the parts where the answer isn't clean.",
        reflectionPrompt:
          "Think of the best decision-maker you know. How do they communicate their reasoning? What makes it compelling?",
        extensionPrompt:
          "Take your deepest insight from this week about judgment and make it something you could say to a friend. Not a lecture — a real thought, shared naturally.",
        distillationPrompt:
          "Write the single most useful line about judgment you can craft from this week's thinking.",
        applicationPrompt:
          "Next time someone asks why you made a choice, try articulating the tradeoff instead of just defending the outcome. Notice the difference.",
        tensionNote: "The temptation to sound certain vs. the power of showing honest reasoning",
        emotionalGoal: "Discipline of expression. Make the insight portable.",
        tags: ["communication", "decision-making", "strategy"],
      },
      {
        id: "arc-2-day-7",
        weeklyArcId: "arc-2",
        dayIndex: 6,
        dayLabel: "Synthesize",
        title: "The Judgment You're Building",
        sparkForm: "observation_seed",
        depthTier: 2,
        sparkText:
          "Understanding decision-making and making better decisions are not the same thing. One is reading about swimming. The other is getting in the water.\n\nThis week you examined outcome bias, incentive blindness, second-order effects, reversibility, your autopilot, and the discipline of articulating tradeoffs. You now have a vocabulary for the errors you make. Vocabulary is not the same as change.\n\nThe question that matters now is narrower than 'Did I learn something?' It's: which one of these habits will you actually install? Not all of them — that's a fantasy. One. The one that would have prevented your last bad decision, or improved the one you're about to make.\n\nA single habit, genuinely adopted, is worth more than a library of insights admired from a distance.",
        reflectionPrompt:
          "What did you learn this week about how you make decisions? What surprised you most about your own judgment patterns?",
        extensionPrompt:
          "If you could install one new judgment habit permanently — one that would run automatically — what would it be? Why that one?",
        distillationPrompt:
          "\"After a week of examining judgment, the thing I most want to carry forward is...\"",
        applicationPrompt:
          "Name the single most important decision you're facing right now. Apply everything from this week to think about it with clearer eyes.",
        tensionNote: "Knowing vs. doing — the gap between intellectual understanding and behavioral change",
        emotionalGoal: "Integration. What sticks? What changes?",
        tags: ["strategy", "decision-making", "self-knowledge"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // ARC 3: SELF-KNOWLEDGE
  // ─────────────────────────────────────────────
  {
    id: "arc-3",
    title: "Self-Knowledge",
    slug: "self-knowledge",
    description:
      "Turn the lens inward with honest curiosity — examine the stories you carry, what you avoid, your contradictions, and the patterns you keep repeating.",
    themeCategory: "self-knowledge",
    dailyPrompts: [
      {
        id: "arc-3-day-1",
        weeklyArcId: "arc-3",
        dayIndex: 0,
        dayLabel: "Observe",
        title: "The Outdated Map",
        sparkForm: "inversion",
        depthTier: 1,
        sparkText:
          "You know yourself. You're sure of it. But the version you know was assembled years ago — maybe decades — from family narratives, adolescent experiences, and feedback you never thought to question.\n\n'I'm the smart one.' 'I'm the reliable one.' 'I'm bad at relationships.' 'I'm not creative.' These labels feel like facts. They're closer to fossils. Impressions frozen in amber from a version of you that may no longer exist.\n\nSome of these old maps are still accurate. But others have become cages disguised as identity — you keep navigating by landmarks that moved years ago. The territory changed. The map didn't.\n\nThe biggest obstacle to self-knowledge isn't ignorance. It's the confidence that you already know.",
        reflectionPrompt:
          "What story about yourself have you been carrying the longest? When did you last check whether it's still accurate?",
        extensionPrompt:
          "If your closest friend described you honestly — including your blind spots — what might they say that would surprise or unsettle you?",
        distillationPrompt:
          "\"We stay strangers to ourselves because...\"",
        applicationPrompt:
          "Today, notice a moment where you act from an old story about yourself rather than from present evidence. Don't judge it — just notice.",
        tensionNote: "The safety of a fixed identity vs. the discomfort of seeing yourself as you actually are now",
        emotionalGoal: "Safe entry. Looking at self-knowledge as a concept before turning it personal.",
        tags: ["self-knowledge", "psychology"],
      },
      {
        id: "arc-3-day-2",
        weeklyArcId: "arc-3",
        dayIndex: 1,
        dayLabel: "Name",
        title: "The Avoidance Map",
        sparkForm: "observation_seed",
        depthTier: 2,
        sparkText:
          "Your avoidance patterns are a more honest autobiography than your resume.\n\nThe email sitting unsent for two weeks. The conversation you keep 'finding the right time' for. The decision you've researched thoroughly but won't pull the trigger on. The thought you start having and steer away from before it lands.\n\nThese aren't random. They're a map — of your fears, your edges, the places where growth is possible and discomfort is guaranteed. Every persistent avoidance is protecting something: a self-image, a relationship's fragile equilibrium, a truth you're not ready to metabolize.\n\nForget the dramatic fears. The ones that shape your life are subtle, daily, and so habitual they've become invisible. You step around them like furniture.",
        reflectionPrompt:
          "Name three things you're currently avoiding. Not someday fears — things you could do this week but won't. Why each one?",
        extensionPrompt:
          "Pick the strongest avoidance. What exactly are you afraid will happen if you face it? Write the fear in its most specific, literal form. How realistic is it?",
        distillationPrompt:
          "\"What I avoid most reveals...\"",
        applicationPrompt:
          "Today, do one small thing you've been avoiding. Even a tiny step toward it. Notice what happens — not just externally, but inside you.",
        tensionNote: "Comfort vs. growth — avoidance protects and imprisons simultaneously",
        emotionalGoal: "Getting specific. Naming the avoided things by name.",
        tags: ["self-knowledge", "psychology"],
      },
      {
        id: "arc-3-day-3",
        weeklyArcId: "arc-3",
        dayIndex: 2,
        dayLabel: "Complicate",
        title: "The Committee Inside",
        sparkForm: "paradox",
        depthTier: 2,
        sparkText:
          "You want freedom and safety. You want to be seen and to hide. You crave discipline and indulgence in the same afternoon. You want to be extraordinary and to be left completely alone.\n\nYou are not one person. You are a committee — impulses, values, fears, and desires voting against each other in real time. And the committee almost never reaches consensus.\n\nMost people handle this by pretending one side doesn't exist. They pick a self — the disciplined one, the adventurous one, the caretaker — and suppress the rest. But denial doesn't dissolve contradictions. It buries them. They resurface as anxiety, self-sabotage, or that persistent hum that something is off about your life even when everything looks right on paper.\n\nMaturity is not resolving contradictions. It's holding the tension without collapsing into one side: 'I want both of these things, and neither one cancels the other.'",
        reflectionPrompt:
          "What contradictions live in you right now? Where do you want two things that genuinely pull in opposite directions?",
        extensionPrompt:
          "Which side of a contradiction in yourself do you usually suppress? What would it look like to hold both sides honestly instead of choosing one?",
        distillationPrompt:
          "\"The most honest thing about me is that I simultaneously...\"",
        tensionNote: "The desire for internal consistency vs. the reality of being multiple selves",
        emotionalGoal: "Complication. The simple self-story starts to crack.",
        tags: ["self-knowledge", "philosophy", "psychology"],
      },
      {
        id: "arc-3-day-4",
        weeklyArcId: "arc-3",
        dayIndex: 3,
        dayLabel: "Compare",
        title: "The Performed Self",
        sparkForm: "scenario",
        depthTier: 2,
        sparkText:
          "There is the you that shows up at dinner parties — articulate, composed, someone with a story that makes sense. And there is the you at 3 AM — uncertain, messy, searching, sometimes afraid of things you'd never say out loud.\n\nThe first version knows what to say. The second version doesn't even know what to feel. The first curates. The second just exists.\n\nThe gap between these two is not hypocrisy. Everyone has it. But the width of the gap matters. When it's narrow, you feel free — what people see is close to what's real. When it's wide, you start feeling like a character in someone else's story. The applause lands wrong. The compliments slide off. You're performing so well that the performance has replaced the person.\n\nIn which direction is yours moving — closing or widening? And when did the drift start?",
        reflectionPrompt:
          "Where is the biggest gap between your public self and your private self right now? What would feel risky about closing it?",
        extensionPrompt:
          "Think of someone who seems genuinely authentic. What do they do differently? Is it courage, indifference, or something else?",
        distillationPrompt:
          "\"The performed self becomes dangerous when...\"",
        applicationPrompt:
          "Today, try being slightly more honest in one interaction — not dramatically vulnerable, just a little more real. Notice what happens.",
        tensionNote: "Safety of performance vs. freedom of honesty",
        emotionalGoal: "Comparison between inner and outer. Measuring the gap without judgment.",
        tags: ["self-knowledge", "relationships", "communication"],
      },
      {
        id: "arc-3-day-5",
        weeklyArcId: "arc-3",
        dayIndex: 4,
        dayLabel: "Apply",
        title: "The Pattern You Keep Running",
        sparkForm: "uncomfortable_question",
        depthTier: 3,
        sparkText:
          "In relationships, you do the same thing. In stress, you reach for the same mechanism. In conflict, you default to the same move. In success, you sabotage yourself in the same predictable way.\n\nYou know the pattern. You might even have a name for it — something from therapy, or a book, or a 2 AM conversation with a friend. You can describe it with impressive precision.\n\nBut knowing about a pattern and changing it are completely different acts. The gap between them is where most of your frustration with yourself lives. You understand the mechanism. You watch yourself enact it anyway. You narrate your own repetition in real time and still can't stop the loop.\n\nSo name it — not the abstract version, not the clinical label. The specific, lived pattern. The one you can feel pulling at you right now, the one that started before you could name it and has outlasted every attempt to outgrow it.",
        reflectionPrompt:
          "Name your most persistent pattern — in relationships, work, stress, or self-sabotage. Be ruthlessly specific about how it plays out.",
        extensionPrompt:
          "When did this pattern start? What was it originally protecting you from? Does it still serve you, or has the protection become a prison?",
        distillationPrompt:
          "\"I'll keep repeating this pattern until I...\"",
        applicationPrompt:
          "Today, try catching the pattern in real-time. Not to change it yet — just to see it clearly while it's happening. Awareness before intervention.",
        tensionNote: "The comfort of familiar patterns vs. the life they prevent",
        emotionalGoal: "The turn. Direct confrontation with a personal pattern. This should feel specific and uncomfortable.",
        tags: ["self-knowledge", "psychology"],
      },
      {
        id: "arc-3-day-6",
        weeklyArcId: "arc-3",
        dayIndex: 5,
        dayLabel: "Articulate",
        title: "Saying It Out Loud",
        sparkForm: "observation_seed",
        depthTier: 2,
        sparkText:
          "You 'know' things about yourself that you have never once said aloud. They exist as fog — present but formless, felt but never held.\n\nThis is the difference between self-awareness and self-knowledge. Awareness is the vague sense that something is true about you. Knowledge is the moment you find words precise enough to pin it down — words clear enough that someone else could understand exactly what you mean.\n\nThe act of articulation is not just communication. It's crystallization. An insight you can't say is an insight you can't examine, test, or build on. It stays atmospheric. Saying it makes it structural.\n\nTake the most honest thing you've thought about yourself this week — the one that made you flinch slightly — and make it speakable. Not hedged. Not wrapped in qualifiers. A clean, direct sentence that could stand on its own.",
        reflectionPrompt:
          "What truth about yourself have you never clearly articulated — to yourself or anyone else? Write it now, as directly as you can.",
        extensionPrompt:
          "Take your deepest insight from this week and say it as simply as possible. No qualifiers, no throat-clearing. One sentence.",
        distillationPrompt:
          "Write one sentence about yourself that is more honest than anything you'd normally say.",
        applicationPrompt:
          "Consider sharing one honest self-observation with someone you trust today. Not a confession — just an honest statement about who you are.",
        tensionNote: "The safety of vague self-awareness vs. the power and exposure of precise articulation",
        emotionalGoal: "Discipline of saying it clearly. Articulation as commitment.",
        tags: ["self-knowledge", "communication"],
      },
      {
        id: "arc-3-day-7",
        weeklyArcId: "arc-3",
        dayIndex: 6,
        dayLabel: "Synthesize",
        title: "Choosing Who You Become",
        sparkForm: "observation_seed",
        depthTier: 2,
        sparkText:
          "You haven't solved anything this week. You haven't fixed the outdated self-story, or dissolved the avoidance patterns, or resolved the contradictions, or closed the gap between performance and reality, or broken the loop you keep running.\n\nBut you've seen them. And seeing is not nothing — it's the prerequisite to everything that follows. You cannot steer what you cannot see. You cannot choose who to become if you don't know who you are right now.\n\nSelf-knowledge isn't a destination. It's not 'I finally know who I am.' It's the ongoing willingness to look — especially when looking reveals something you'd rather not find. The person who keeps looking, keeps updating, keeps refusing the easy story — that person isn't confused. They're honest.\n\nWhat did the looking reveal this week that you won't be able to un-see?",
        reflectionPrompt:
          "After a week of honest self-examination, what do you now understand about yourself that you didn't before — or didn't want to?",
        extensionPrompt:
          "If you could change one thing about how you move through the world — not what you achieve, but how you are — what would it be?",
        distillationPrompt:
          "\"After looking honestly at myself this week, the thing I most want to remember is...\"",
        applicationPrompt:
          "Name one concrete way you'll act differently based on what you've seen about yourself this week. Not a grand resolution — a specific, testable shift.",
        tensionNote: "Insight vs. change — knowing is necessary but not sufficient",
        emotionalGoal: "Integration. What do you carry forward? What changes?",
        tags: ["self-knowledge", "meaning", "philosophy"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // ARC 4: ATTENTION
  // ─────────────────────────────────────────────
  {
    id: "arc-4",
    title: "Attention",
    slug: "attention",
    description:
      "Examine the quality of your attention — what captures it, what fragments it, and how it shapes the texture of your entire life.",
    themeCategory: "philosophy",
    dailyPrompts: [
      {
        id: "arc-4-day-1",
        weeklyArcId: "arc-4",
        dayIndex: 0,
        dayLabel: "Observe",
        title: "The Sculptor",
        sparkForm: "observation_seed",
        depthTier: 1,
        sparkText:
          "Your attention is not a spotlight. It's a sculptor. What you attend to becomes your thoughts, your emotions, your memories, your identity — not metaphorically, but literally, hour by hour, day by day.\n\nThe meeting you dread shapes your morning before it even starts. The argument you replay shapes your evening long after it ended. The feed you scroll reshapes the texture of your mind in ways you'll never consciously notice.\n\nWilliam James: 'My experience is what I agree to attend to.' Simone Weil: 'Attention is the rarest and purest form of generosity.'\n\nNow try an uncomfortable experiment. If someone tracked how you spent your attention — not your time, not your calendar, your actual attention — for the past seven days, what would they conclude your life is really about? Not what you'd want them to conclude. What the data would actually show.",
        reflectionPrompt:
          "If an observer tracked your attention (not your calendar) for the past week, what would they say your life is really about? Be honest about the gap between intention and reality.",
        extensionPrompt:
          "Think about yesterday specifically. Where did your attention actually go — not where you planned it to go? What's the gap?",
        distillationPrompt:
          "\"The quality of your attention determines...\"",
        applicationPrompt:
          "Today, spend ten minutes giving your full, undivided attention to something you usually do on autopilot. Notice what changes.",
        tensionNote: "The life you intend to live vs. the life your attention actually builds",
        emotionalGoal: "Safe observation. A new way of looking at a familiar concept.",
        tags: ["philosophy", "self-knowledge", "meaning"],
      },
      {
        id: "arc-4-day-2",
        weeklyArcId: "arc-4",
        dayIndex: 1,
        dayLabel: "Name",
        title: "The Siege",
        sparkForm: "uncomfortable_question",
        depthTier: 2,
        sparkText:
          "Billions of dollars and thousands of PhDs have been deployed for one purpose: to capture your attention. You know this. Everyone knows this. It's not even controversial.\n\nAnd yet you hand it over anyway. Every day. Voluntarily.\n\nBlaming the systems is the easy move. The harder question is about your complicity. What are you getting from the surrender? Relief from your own thoughts? The low-grade anesthesia of novelty? The feeling of connection without the vulnerability of actual connection?\n\nBut here's what the systems are really taking — not your time, though they take that too. They're taking your interiority. Your ability to sit with a single thought long enough for it to deepen into something real. When was the last time you held one idea for thirty uninterrupted minutes? Not consumed thirty minutes of content. Held one thought. Can you even remember?",
        reflectionPrompt:
          "What are the biggest thieves of your attention — not just time-wasters, but things that fragment your ability to think deeply? Be specific: apps, habits, people, anxieties.",
        extensionPrompt:
          "You already know what fragments your attention. So why haven't you changed it? What's the honest reason — not the excuse?",
        distillationPrompt:
          "\"The real cost of distraction isn't lost time — it's...\"",
        applicationPrompt:
          "Today, create one hour of protected attention. No phone, no tabs, no interruptions. Use it for something that matters. Notice the resistance.",
        tensionNote: "Knowing what steals your attention vs. actually protecting it",
        emotionalGoal: "Naming the thieves — and naming your own complicity.",
        tags: ["philosophy", "self-knowledge"],
      },
      {
        id: "arc-4-day-3",
        weeklyArcId: "arc-4",
        dayIndex: 2,
        dayLabel: "Complicate",
        title: "The Stimulation Trap",
        sparkForm: "paradox",
        depthTier: 2,
        sparkText:
          "The most overstimulated generation in history is also the most bored. This is not a coincidence. It's a causal relationship.\n\nConstant stimulation raises the threshold for engagement the way a drug raises tolerance. The brain, flooded with engineered novelty, loses its sensitivity to subtlety. The person who scrolls for hours finds a book intolerably slow. The person who watches short-form video finds a real conversation tedious. The person who can access any fact instantly has lost the ability to wonder.\n\nBoredom is not an empty room. It's a broken receptor. The room is full — of books, people, ideas, sensory richness — but the receptor can't register any of it anymore. It needs a stronger hit.\n\nThe snake eats its tail: more stimulation creates more numbness creates more craving for stimulation. The exit is the last thing your nervous system wants — less.",
        reflectionPrompt:
          "Has your ability to enjoy slower, quieter experiences changed over time? Can you still find a long conversation, a walk, or a book genuinely absorbing? Be honest.",
        extensionPrompt:
          "How does the stimulation trap show up in your relationships? In your ability to be present? In what you reach for in moments of stillness?",
        distillationPrompt:
          "\"The more stimulated we are, the less...\"",
        applicationPrompt:
          "Today, deliberately engage with something slower than your usual pace. A long article, a real conversation, a walk without headphones. Notice your resistance — that resistance is the data.",
        tensionNote: "The promise of stimulation (engagement) vs. what it actually produces (numbness)",
        emotionalGoal: "Complication. The solution to boredom isn't more stimulation — it might be less.",
        tags: ["philosophy", "psychology", "self-knowledge"],
      },
      {
        id: "arc-4-day-4",
        weeklyArcId: "arc-4",
        dayIndex: 3,
        dayLabel: "Compare",
        title: "Laser and Lantern",
        sparkForm: "inversion",
        depthTier: 2,
        sparkText:
          "Two modes of attention. Most people are starving in one while overfeeding the other.\n\nFocused attention is a laser — concentrated, directed, penetrating. It analyzes, solves, builds. It's what productivity culture worships.\n\nOpen attention is a lantern — wide, receptive, peripheral. It notices patterns, receives creative insight, registers the thing happening at the edge of your vision that turns out to be the most important thing in the room. It's what your best ideas actually come from.\n\nModern life demands the laser while systematically destroying the conditions for it. And it doesn't cultivate the lantern at all — because open attention looks, from the outside, like staring into space. Like wasting time. Like doing nothing.\n\nExcept that Newton under the apple tree was doing nothing. Darwin on his daily walk was doing nothing. Your best idea last year probably arrived when you were in the shower, or driving, or half-asleep. Not focused. Open.",
        reflectionPrompt:
          "Which mode of attention dominates your life? Which one do you need more of? When has each been most valuable?",
        extensionPrompt:
          "Think of your best creative insights or your most important realizations. Were they products of focused concentration or of open, wandering attention? What conditions made them possible?",
        distillationPrompt:
          "\"The modern world has made us good at... but terrible at...\"",
        applicationPrompt:
          "Today, deliberately practice the mode you use less. If you're always focused, try open awareness for twenty minutes. If you're always scattered, try deep focus. Notice the discomfort.",
        tensionNote: "Productivity rewards focused attention; wisdom often requires open attention",
        emotionalGoal: "Pattern recognition. Seeing your attention habits as a choice, not a given.",
        tags: ["philosophy", "strategy", "self-knowledge"],
      },
      {
        id: "arc-4-day-5",
        weeklyArcId: "arc-4",
        dayIndex: 4,
        dayLabel: "Apply",
        title: "What Your Attention Says About You",
        sparkForm: "uncomfortable_question",
        depthTier: 3,
        sparkText:
          "Think of someone who gives you their full attention when you speak. Not performing listening — actually attending. You can feel the difference in your body. Something in you relaxes. Something opens.\n\nNow think of someone who half-listens — composing their response while you're still talking, glancing at their phone, present in body and absent in everything else. You can feel that too. It doesn't communicate 'I'm busy.' It communicates 'You are not important enough for my full presence.'\n\nThe quality of your attention is the quality of your relationships. This is not a metaphor. It is the mechanism by which people feel loved or dismissed, seen or invisible, important or tolerated.\n\nNow the uncomfortable turn: who in your life consistently gets your fragmented attention? The person you love most — are they getting the scraps that remain after your phone, your work, and your inner monologue have taken their share?",
        reflectionPrompt:
          "Be specific: who in your life consistently gets your fragmented attention? What does that pattern reveal about what you actually prioritize — not what you say you prioritize?",
        extensionPrompt:
          "Think of someone who gives you their full attention. How does it feel? Now think of someone who doesn't. What's the difference in how you feel around each? Now: which one are you more often?",
        distillationPrompt:
          "\"The greatest gift you can give another person is... and the most common way you withhold it is...\"",
        applicationPrompt:
          "Today, give one person your complete, undivided attention for a full conversation. No phone, no mental multitasking, no planning your response. Notice the effect — on them and on you.",
        tensionNote: "The person you want to be in relationships vs. the attention you actually give",
        emotionalGoal: "The turn. This isn't about attention as productivity. It's about attention as love. And you're probably failing at it.",
        tags: ["relationships", "communication", "self-knowledge"],
      },
      {
        id: "arc-4-day-6",
        weeklyArcId: "arc-4",
        dayIndex: 5,
        dayLabel: "Articulate",
        title: "What Attention Really Is",
        sparkForm: "historical_mirror",
        depthTier: 2,
        sparkText:
          "Simone Weil, writing during the darkest years of the Second World War, described attention as something almost no one in the modern world would recognize: 'Attention consists of suspending our thought, leaving it detached, empty, and ready to be penetrated by the object.'\n\nNot grasping. Not concentrating. Receiving.\n\nWe say 'pay attention' as though it costs effort — a transaction, an expenditure. But Weil is describing something closer to surrender. You stop trying to extract meaning and let the thing you're attending to speak on its own terms. You stop imposing and start listening — not just with your ears, but with your whole being.\n\nProductivity culture turned attention into a resource to be optimized. The contemplatives knew it was something closer to a form of love. The difference between these two framings is the difference between using the world and being present to it.\n\nWhich version of attention dominates your life? Which one do you wish did?",
        reflectionPrompt:
          "What is the most important thing you've realized about attention this week? How would you explain it simply — without productivity jargon?",
        extensionPrompt:
          "Express your biggest insight about attention in three forms: as advice to a friend, as a personal principle, and as a single memorable line.",
        distillationPrompt:
          "Write one sentence about attention that you'd want to remember for the rest of your life.",
        applicationPrompt:
          "If someone asked you 'How do I pay better attention?' — what would you say, based on your own experience this week?",
        tensionNote: "Attention as effort vs. attention as receptivity",
        emotionalGoal: "Articulation. Make the insight portable and speakable.",
        tags: ["communication", "philosophy"],
      },
      {
        id: "arc-4-day-7",
        weeklyArcId: "arc-4",
        dayIndex: 6,
        dayLabel: "Synthesize",
        title: "Attention as Ethics",
        sparkForm: "observation_seed",
        depthTier: 2,
        sparkText:
          "Here's what was underneath this entire week, hiding in plain sight: attention is not a cognitive function. It's an ethical act.\n\nWhat you attend to is what you value. Not in theory — in practice, in the irreducible currency of your finite life. You spent this week examining where your attention goes, what fragments it, how stimulation numbs it, the two modes it operates in, what it does to the people you love, and what the contemplatives understood that productivity culture forgot.\n\nBut the real subject was never attention. It was values. Not the values you'd list on a questionnaire — the ones you live by, minute to minute, in the thousand tiny choices about where to aim your awareness.\n\nThe audit is complete. The data is in. Does your attention reflect the life you actually want to be living?",
        reflectionPrompt:
          "What has this week revealed about what you truly value — as shown by where your attention actually goes, not where you wish it went?",
        extensionPrompt:
          "If you redesigned your life to protect and direct your attention toward what matters most, what would concretely change? Name specific things, not abstractions.",
        distillationPrompt:
          "\"After a week of examining attention, the thing I most want to remember is...\"",
        applicationPrompt:
          "Name one concrete change you'll make to protect or redirect your attention, starting today. Make it specific enough that you could tell someone about it and they could check whether you did it.",
        tensionNote: "Values as stated vs. values as lived — attention reveals the truth",
        emotionalGoal: "Integration. The week was about values all along.",
        tags: ["philosophy", "self-knowledge", "meaning"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // ARC 5: COMMUNICATION
  // ─────────────────────────────────────────────
  {
    id: "arc-5",
    title: "Communication",
    slug: "communication",
    description:
      "Examine how you use language — what you say, what you withhold, and the gap between what you mean and what lands.",
    themeCategory: "communication",
    dailyPrompts: [
      {
        id: "arc-5-day-1",
        weeklyArcId: "arc-5",
        dayIndex: 0,
        dayLabel: "Observe",
        title: "The Edit in Real Time",
        sparkForm: "observation_seed",
        depthTier: 1,
        sparkText:
          "Between thinking something and saying it, there is a gap. Sometimes a fraction of a second. Sometimes long enough to feel the revision happening.\n\nYou soften a criticism. Add a qualifier. Swap the honest word for the diplomatic one. Decide not to say it at all. This editing happens hundreds of times a day, so fast it's invisible — but it's not nothing. It's a choice. A running, real-time negotiation between what you actually think and what you're willing to let the world hear.\n\nEveryone edits. The interesting question is what you're optimizing for. Safety? Likability? Control? Truth? Kindness? Each person's editing pattern is a fingerprint — unique, consistent, and almost entirely unconscious.\n\nToday, try to catch the edit in the act. Not to stop it. Just to see it. What gets cut most often, and what does the cutting protect?",
        reflectionPrompt:
          "What pattern do you notice in how you revise your thoughts before speaking? What gets cut most often — and why?",
        extensionPrompt:
          "Think of a recent conversation where you edited something significant before saying it. What was the original thought, and what did the edited version protect?",
        distillationPrompt:
          "\"The thing I most consistently edit out of my speech is...\"",
        applicationPrompt:
          "Today, catch yourself in the edit. Three times, notice what you almost said. You don't have to say it — just notice the gap.",
        tensionNote: "The gap between thought and speech as a window into what you're protecting",
        emotionalGoal: "Safe observation. Watching your own process without judgment yet.",
        tags: ["communication", "self-knowledge"],
      },
      {
        id: "arc-5-day-2",
        weeklyArcId: "arc-5",
        dayIndex: 1,
        dayLabel: "Name",
        title: "What Silence Carries",
        sparkForm: "inversion",
        depthTier: 2,
        sparkText:
          "Silence is never empty. Every time you choose not to speak, you're still communicating — consent, resentment, superiority, fear, strategy, or love. The other person is receiving a message. You just didn't write it consciously.\n\nThe person who doesn't push back is training the other person to keep pushing. The one who withholds praise is quietly reshaping someone's confidence. The one who never raises the difficult subject is building an entire relationship on the foundation of mutual avoidance — and both people can feel the floor getting softer.\n\nMost people think of silence as the absence of communication. It's the opposite. Silence is communication with the safety on. You get to send the message without taking responsibility for sending it.\n\nYour silences are full — packed with everything you decided not to say. And the people around you are reading them, whether you intended the message or not.",
        reflectionPrompt:
          "Name a specific silence you maintain regularly. What is it actually communicating to the other person, whether you intend it or not?",
        extensionPrompt:
          "What would the person on the receiving end of your silence say it means? Would they be right?",
        distillationPrompt:
          "\"My most loaded silence is about...\"",
        tensionNote: "Silence as active communication, not absence",
        emotionalGoal: "Getting specific about a pattern that usually stays invisible.",
        tags: ["communication", "relationships", "self-knowledge"],
      },
      {
        id: "arc-5-day-3",
        weeklyArcId: "arc-5",
        dayIndex: 2,
        dayLabel: "Complicate",
        title: "Precision vs. Protection",
        sparkForm: "paradox",
        depthTier: 2,
        sparkText:
          "'I was a little annoyed' is safe. 'I felt dismissed and it made me furious' is not.\n\n'We should probably talk about this sometime' is safe. 'I need to tell you something that might change how you see me' is not.\n\nVague language is armor. The less precisely you name what you feel, the less exposed you are. Every qualifier, every hedge, every softening phrase is a tiny retreat from vulnerability. And it works — in the short term, imprecision protects you.\n\nBut here's the paradox: the vagueness that protects the relationship in the moment slowly degrades it over years. The things you won't say precisely become the things that can never be resolved. They calcify into permanent avoidance. Meanwhile, the sharp truth — the one that risks everything — is often the only thing that can actually bring people closer.\n\nClarity is a form of courage. Vagueness is a form of control disguised as kindness.",
        reflectionPrompt:
          "Where in your life are you using imprecise language to manage a situation that actually needs directness? What would the precise version sound like?",
        extensionPrompt:
          "Think of a relationship where vagueness has calcified into a permanent avoidance. What would it cost to be precise now?",
        distillationPrompt:
          "\"I use vague language most when...\"",
        tensionNote: "Precision as vulnerability — clarity risks everything but vagueness costs more",
        emotionalGoal: "Introducing real tension. The comfort of hedging has consequences.",
        tags: ["communication", "relationships", "philosophy"],
      },
      {
        id: "arc-5-day-4",
        weeklyArcId: "arc-5",
        dayIndex: 3,
        dayLabel: "Compare",
        title: "Understood vs. Impressive",
        sparkForm: "historical_mirror",
        depthTier: 2,
        sparkText:
          "George Orwell watched intellectuals bury simple ideas in complex language — not to illuminate, but to signal intelligence. The fog was the point. The reader wasn't supposed to understand. The reader was supposed to be impressed.\n\nThe same dynamic plays out in every conversation you have. There is a difference between speaking to be understood and speaking to be admired. One centers the listener. The other centers you. One simplifies until the idea lands. The other complicates until the speaker feels adequate.\n\nThe shift between these two modes is almost invisible. A slightly elevated vocabulary. A reference dropped for effect. An explanation that serves your ego more than their comprehension. You can feel it happening — the moment the goal switches from 'Did they understand?' to 'Did they think I was smart?'\n\nMost people toggle between these modes dozens of times a day without noticing. But the people listening can tell. They always can.",
        reflectionPrompt:
          "In what contexts do you shift from communicating to performing? What triggers the switch?",
        extensionPrompt:
          "Think of someone who makes you feel the need to sound impressive. What does that tell you about what you're seeking from them — and what you fear they see?",
        distillationPrompt:
          "\"I shift from clarity to performance when...\"",
        applicationPrompt:
          "In your next important conversation, notice the moment you start speaking for effect rather than for understanding. What were you protecting?",
        tensionNote: "The difference between communicating and performing — and the ego that drives the switch",
        emotionalGoal: "Seeing the pattern in yourself, not just in others.",
        tags: ["communication", "self-knowledge", "strategy"],
      },
      {
        id: "arc-5-day-5",
        weeklyArcId: "arc-5",
        dayIndex: 4,
        dayLabel: "Apply",
        title: "The Thing You Won't Say",
        sparkForm: "uncomfortable_question",
        depthTier: 3,
        sparkText:
          "There is something you need to say to someone and you have not said it. You know exactly what it is. You may have rehearsed it. You may have talked around it a hundred times. You may have told other people about it. But you have not said it to the person who needs to hear it.\n\nWhy not?\n\nDon't say 'it's complicated.' Be specific. Is it because you're afraid they'll leave? Because you'd have to give up something you currently enjoy — their approval, the peace, the dynamic that serves you? Because saying it would make the problem real in a way that demands action, and you're not sure you want to act?\n\nThe thing you won't say is not being held back by kindness. It's being held back by something you're getting from not saying it.",
        reflectionPrompt:
          "Name it. What is the thing you are not saying, to whom, and what are you getting from the silence that you don't want to give up?",
        extensionPrompt:
          "If you imagine actually saying it — the exact words, their face, what happens next — where does the fear land in your body? What is the worst outcome you're protecting against, and is it worse than what the silence is already costing?",
        distillationPrompt:
          "\"The real reason I haven't said it is...\"",
        applicationPrompt:
          "You don't have to say the thing today. But write it down — the exact words, unedited, as if the person were sitting across from you. Then sit with it.",
        tensionNote: "The unsaid as self-serving — silence as something you benefit from, not just endure",
        emotionalGoal: "The turn. This should feel like being caught. Name the avoidance directly.",
        tags: ["communication", "relationships", "self-knowledge"],
      },
      {
        id: "arc-5-day-6",
        weeklyArcId: "arc-5",
        dayIndex: 5,
        dayLabel: "Articulate",
        title: "The Cost of Translation",
        sparkForm: "scenario",
        depthTier: 2,
        sparkText:
          "There are two of you in every conversation. One knows exactly what you feel and mean. The other is the translator — converting raw experience into words that other people can receive.\n\nThe translator is necessary. Without it, you'd be incomprehensible. But the translator loses things. It rounds off edges. Flattens intensity. Substitutes acceptable emotions for the ones you're actually having. 'I'm fine' is a translation of something more jagged. 'I don't mind' is a translation of something with teeth.\n\nThis gap is not a failure of vocabulary. It's a negotiation between truth and receivability — and it's happening in real time, every time you open your mouth.\n\nThe cost is cumulative. Each small translation is harmless. A thousand of them, compounded over years, means the people closest to you may be responding to a version of you that barely exists. They love the translation. They've never met the original.",
        reflectionPrompt:
          "Where is the gap between your inner experience and your communicated version widest? What gets lost most in translation?",
        extensionPrompt:
          "Take something you felt strongly this week and try to articulate it with zero translation — raw, unpolished, exactly as it was. Then translate it into what you'd actually say. What changed?",
        distillationPrompt:
          "\"The thing I lose most in translating myself for others is...\"",
        tensionNote: "The necessary cost of making yourself understood vs. the risk of making yourself invisible",
        emotionalGoal: "Discipline after vulnerability. Put language on what you've seen this week.",
        tags: ["communication", "self-knowledge", "relationships"],
      },
      {
        id: "arc-5-day-7",
        weeklyArcId: "arc-5",
        dayIndex: 6,
        dayLabel: "Synthesize",
        title: "Language as Architecture",
        sparkForm: "observation_seed",
        depthTier: 2,
        sparkText:
          "Underneath every topic this week — the edits, the silences, the precision you avoid, the performance you default to, the unsaid thing, the translation that never stops — sits one question: are you using language to connect, or to manage?\n\nTo reveal yourself, or to control how you're perceived?\n\nThe honest answer is: both. Constantly. Without always knowing which mode you're in. Sometimes in the same sentence.\n\nThis week wasn't about becoming radically transparent — that's its own kind of performance, its own bid for admiration. It was about seeing the machinery. Not so you can dismantle it, but so you can finally choose: when is the editing necessary, and when is it just habit? When does the translation serve the relationship, and when does it serve your comfort?\n\nThe machinery is always running. Seeing it is the only leverage you have.",
        reflectionPrompt:
          "After a week of examining your communication, what pattern became impossible to ignore? What did you learn about what your language is actually doing?",
        extensionPrompt:
          "If you made one change to how you communicate — not a resolution, but a real structural shift — what would it be? What would it cost you?",
        distillationPrompt:
          "\"The real thing here is that my communication has been serving...\"",
        applicationPrompt:
          "Name one conversation you're going to have differently because of what you saw this week. Be specific about what you'll change and why.",
        tensionNote: "Communication as connection vs. communication as management — and the cost of each",
        emotionalGoal: "Integration. Gathering the week's sharpest truths into something usable.",
        tags: ["communication", "self-knowledge", "meaning"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // ARC 6: RELATIONSHIPS
  // ─────────────────────────────────────────────
  {
    id: "arc-6",
    title: "Relationships",
    slug: "relationships",
    description:
      "Look honestly at how you connect — what you project, what you withhold, and the patterns you keep running in the people closest to you.",
    themeCategory: "relationships",
    dailyPrompts: [
      {
        id: "arc-6-day-1",
        weeklyArcId: "arc-6",
        dayIndex: 0,
        dayLabel: "Observe",
        title: "The Casting Director",
        sparkForm: "observation_seed",
        depthTier: 1,
        sparkText:
          "Within minutes of knowing someone, you've cast them. The reliable one. The difficult one. The one who gets you. The one you have to manage.\n\nThese assignments feel like observation. They're closer to auditions. You're casting people in a story you've already written — and then you interact with the character instead of the person. When they deviate from the role, it feels like betrayal. When they try to show you a different side of themselves, it feels like inconsistency. But they never agreed to the part. They don't even know the script exists.\n\nThe most dangerous casting is the one you did earliest — parents, siblings, first loves. Those roles were assigned before you had language for what you were doing. And every person who enters your life since then gets measured against a template they know nothing about.",
        reflectionPrompt:
          "Think of three people close to you. What role have you assigned each of them? When did the casting happen, and has it updated since?",
        extensionPrompt:
          "Pick one person whose role in your life feels fixed. What would it mean to let them be someone other than who you've decided they are?",
        distillationPrompt:
          "\"I cast the people around me as...\"",
        applicationPrompt:
          "Today, in one interaction, try to see the person instead of the character you've written for them. What do you notice that the role usually hides?",
        tensionNote: "The difference between knowing someone and having decided who they are",
        emotionalGoal: "Safe entry. Looking at a universal pattern before it gets personal.",
        tags: ["relationships", "psychology", "self-knowledge"],
      },
      {
        id: "arc-6-day-2",
        weeklyArcId: "arc-6",
        dayIndex: 1,
        dayLabel: "Name",
        title: "The Unwritten Contract",
        sparkForm: "inversion",
        depthTier: 2,
        sparkText:
          "Every relationship you're in has a contract you never discussed.\n\nNot the spoken agreements — those are easy. The unspoken ones: I'll admire you if you never challenge me. I'll be loyal as long as you make me feel needed. I'll stay if you don't make me feel ordinary. I'll tolerate this if you never make me address that.\n\nThese contracts are invisible and they govern everything. When someone 'suddenly' becomes angry or distant, it's almost never sudden. One party violated a clause the other never articulated. The breach feels enormous. The contract was never on the table.\n\nThe hardest part is not discovering these contracts. It's admitting the terms you demanded — what you silently required in exchange for what you gave. Because your terms reveal what you're actually in the relationship for. And that's rarely as generous as the story you tell yourself.",
        reflectionPrompt:
          "Name one unspoken contract in a close relationship. What are you providing, and what are you silently demanding in return?",
        extensionPrompt:
          "If the other person could read the contract you've been enforcing, would they recognize it? Would they agree to the terms?",
        distillationPrompt:
          "\"The deal I've been silently enforcing is...\"",
        tensionNote: "Relationships as unspoken exchanges — and the resentment that builds when terms are violated",
        emotionalGoal: "Getting specific. Naming the mechanics beneath the surface.",
        tags: ["relationships", "self-knowledge", "psychology"],
      },
      {
        id: "arc-6-day-3",
        weeklyArcId: "arc-6",
        dayIndex: 2,
        dayLabel: "Complicate",
        title: "Closeness and Enmeshment",
        sparkForm: "paradox",
        depthTier: 2,
        sparkText:
          "There is a kind of closeness that looks like love and functions like surveillance.\n\nTwo people so attuned to each other's moods that neither can feel anything independently. Every emotion becomes shared property. Every silence becomes a signal that must be decoded. Every decision passes through the filter: 'How will they react?'\n\nThis gets called intimacy. It is not. Intimacy requires two separate people choosing to reveal themselves to each other. Enmeshment is two people who have dissolved the boundary between self and other — and mistake the dissolution for depth.\n\nThe paradox is cruel: the closer you get without maintaining your separateness, the less there is of you to actually offer. You merge — and in the merging, the thing that made the connection valuable disappears. Two people become one half-person, twice as anxious, calling their mutual surveillance 'being really in tune with each other.'",
        reflectionPrompt:
          "Where in your relationships has closeness tipped into something that reduces rather than enriches you? What's the difference between intimacy and enmeshment in your own experience?",
        extensionPrompt:
          "Think of a relationship where you monitor the other person's emotional state as if it's your responsibility. What are you afraid would happen if you stopped?",
        distillationPrompt:
          "\"The line between closeness and losing myself is...\"",
        tensionNote: "Intimacy vs. enmeshment — the terrifying possibility that your deepest connection is actually a loss of self",
        emotionalGoal: "Introducing real tension. This pattern is widespread and rarely examined.",
        tags: ["relationships", "psychology", "self-knowledge"],
      },
      {
        id: "arc-6-day-4",
        weeklyArcId: "arc-6",
        dayIndex: 3,
        dayLabel: "Compare",
        title: "Generosity as Control",
        sparkForm: "historical_mirror",
        depthTier: 2,
        sparkText:
          "'After everything I've done for you.' That sentence — delivered in anger, in guilt, in the quiet devastation of feeling unappreciated — is the collection notice. It reveals what the giving was actually about.\n\nAndrew Carnegie gave away fortunes while union workers died in his steel mills. Philanthropists name buildings after themselves. Parents who sacrifice everything for their children hold the receipt for decades, redeemable in guilt and obligation.\n\nGenerosity creates indebtedness. The person who gives the most often controls the most. This isn't always conscious. The generous person rarely sees their own ledger. They experience their giving as pure. But the question that cuts through the self-image is simple: does your generosity create freedom for the other person, or obligation?\n\nWhen you give, does the other person feel lighter — or more indebted? The answer tells you more about your generosity than your intentions ever could.",
        reflectionPrompt:
          "Think of your most generous relationship. Is the other person free to receive without owing, or does your giving come with an invisible invoice?",
        extensionPrompt:
          "When has someone's generosity toward you felt more like a cage than a gift? What was the unspoken cost? Now reverse it: when has your generosity functioned the same way?",
        distillationPrompt:
          "\"My generosity becomes control when...\"",
        applicationPrompt:
          "Notice today when you do something 'generous' and check: would you still do it if the person never knew? If the answer is no, what does that tell you?",
        tensionNote: "The shadow side of giving — when generosity serves the giver more than the receiver",
        emotionalGoal: "Pattern recognition. Seeing a familiar virtue from an unfamiliar angle.",
        tags: ["relationships", "psychology", "self-knowledge", "philosophy"],
      },
      {
        id: "arc-6-day-5",
        weeklyArcId: "arc-6",
        dayIndex: 4,
        dayLabel: "Apply",
        title: "The Pattern You Keep Choosing",
        sparkForm: "uncomfortable_question",
        depthTier: 3,
        sparkText:
          "You have a pattern. You know you have it. You may have named it in therapy, or to a friend after a drink, or silently to yourself at 2 a.m. The pattern is not something that happens to you. It is something you build, dismantle, and rebuild — in different people, different contexts, with different faces.\n\nMaybe you choose people who need saving, because being needed is the only form of closeness that feels safe. Maybe you choose people who withhold, because longing is more familiar to you than having. Maybe you choose people who dominate, because surrendering the decisions means never being responsible for the outcome. Maybe you choose people who adore you, because you cannot tolerate being seen at full resolution.\n\nThe pattern is not bad luck. It is not coincidence. It is a solution to a problem you haven't named — a way of getting something you can't ask for directly.\n\nWhat is the pattern? What problem does it solve? And what is it costing you to keep solving it this way?",
        reflectionPrompt:
          "Name your pattern — not the sanitized version, but the real one. What kind of person do you keep choosing, and what do you get from the dynamic that you're afraid to get any other way?",
        extensionPrompt:
          "If you traced this pattern back to its origin — the first relationship where it made sense — what were you adapting to? What was the original problem this pattern solved, and is that problem still real?",
        distillationPrompt:
          "\"I keep choosing this because...\"",
        applicationPrompt:
          "Look at your current closest relationship through the lens of the pattern. What are you getting from it that you could name honestly? What are you avoiding by staying in the familiar shape?",
        tensionNote: "Relational patterns as chosen solutions, not accidents — and the cost of the solution",
        emotionalGoal: "This is the hardest turn in the app. This should feel like the floor dropping out. No escape into abstraction.",
        tags: ["relationships", "self-knowledge", "psychology"],
      },
      {
        id: "arc-6-day-6",
        weeklyArcId: "arc-6",
        dayIndex: 5,
        dayLabel: "Articulate",
        title: "What You Train People to Expect",
        sparkForm: "scenario",
        depthTier: 2,
        sparkText:
          "Imagine a stranger watches a month of footage of you with the person closest to you. No context. No backstory. No access to your inner life. Just the raw behavioral data.\n\nWhat would they conclude you want from the relationship? What role would they see you playing? What would they say you're training the other person to expect?\n\nPeople don't respond to your intentions. They can't — your intentions are invisible. They respond to your patterns: the tone you default to, the things you consistently avoid, the way you show up or don't. Through repetition, not declaration, you've trained the people in your life to expect a specific version of you.\n\nThat trained version may have nothing to do with who you think you are. You believe you're supportive. They experience you as distracted. You believe you're easygoing. They experience you as checked out. You believe you're loving. They experience you as someone who shows love by solving problems but never asks how they feel.\n\nThe gap between who you believe you are and who your behavior has trained people to experience — that gap is where most relational pain lives.",
        reflectionPrompt:
          "What have you trained your closest person to expect from you? Is it what you actually want to offer, or a pattern that took over?",
        extensionPrompt:
          "Take one insight from this week — about contracts, patterns, generosity, or enmeshment — and put it in words precise enough that you could explain it to the person it's about. Not to accuse. To be understood.",
        distillationPrompt:
          "\"What I've been training people to expect from me is...\"",
        tensionNote: "The trained version of you vs. the intended version — and which one is more real",
        emotionalGoal: "Articulation after the hardest day. Make it speakable. Bring it into language.",
        tags: ["relationships", "communication", "self-knowledge"],
      },
      {
        id: "arc-6-day-7",
        weeklyArcId: "arc-6",
        dayIndex: 6,
        dayLabel: "Synthesize",
        title: "Love Without Illusion",
        sparkForm: "observation_seed",
        depthTier: 2,
        sparkText:
          "This week stripped the machinery bare: the casting you do before you've said hello, the contracts you enforce without ever stating the terms, the enmeshment you call intimacy, the generosity that doubles as control, the pattern you keep rebuilding in new faces, the trained version of you that's replaced the real one.\n\nNone of this means your relationships are false. It means they're human. Every connection contains these mechanics. The question was never whether they're running in yours — they are — but whether you can love someone while seeing clearly what you're doing and why.\n\nLove without illusion is harder than love with it. It requires holding two things simultaneously: genuine care for another person, and honest awareness of what you're getting from the arrangement. Most people choose one — the romance or the cynicism. The work is holding both at once, letting neither cancel the other.\n\nThat's not less love. It's the only kind that doesn't require someone to stay asleep.",
        reflectionPrompt:
          "After this week, what has become clearer about how you do relationships — not how you wish you did them, but how you actually do?",
        extensionPrompt:
          "Is there a relationship in your life that could survive full honesty — yours and theirs? What would it require of you?",
        distillationPrompt:
          "\"I want to love people with my eyes open, which means accepting that...\"",
        applicationPrompt:
          "Name one thing you will do differently in your closest relationship because of what you saw this week. Not a vague intention — a specific change in behavior.",
        tensionNote: "Love with illusion vs. love with sight — and whether honesty deepens or endangers connection",
        emotionalGoal: "Integration. Gathering a difficult week into something that can be carried forward with grace.",
        tags: ["relationships", "self-knowledge", "meaning"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // ARC 7: AMBITION
  // ─────────────────────────────────────────────
  {
    id: "arc-7",
    title: "Ambition",
    slug: "ambition",
    description:
      "Examine what drives your striving — where ambition serves you, where it distorts you, and what you're really chasing.",
    themeCategory: "strategy",
    dailyPrompts: [
      {
        id: "arc-7-day-1",
        weeklyArcId: "arc-7",
        dayIndex: 0,
        dayLabel: "Observe",
        title: "The Invisible Scoreboard",
        sparkForm: "observation_seed",
        depthTier: 1,
        sparkText:
          "You are keeping score. You may not admit it — may not even realize it — but there is a leaderboard in your head, running constantly, updating in real time.\n\nSomeone gets a promotion and something shifts in your chest. Someone posts something that lands and you feel a flicker of — what, exactly? Someone seems effortlessly good at something you work hard at, and there it is: the scoreboard updating.\n\nThe metrics aren't always obvious. Sometimes it's money or career. But sometimes the scoreboard tracks depth of relationships, or creative output, or moral seriousness, or who seems happiest. The specific metric you track reveals what you're actually competing for — which is often different from what you'd claim to value.\n\nThe person who says 'I'm not competitive' usually just competes on metrics that don't look like competition: authenticity, wisdom, being above it all. That's still a scoreboard. It's just a more sophisticated one.",
        reflectionPrompt:
          "What metrics are on your invisible scoreboard? What are you tracking, and against whom?",
        extensionPrompt:
          "When was the last time someone else's success made you feel something you didn't want to feel? What specific metric were you comparing on?",
        distillationPrompt:
          "\"The scoreboard I keep but don't admit to tracks...\"",
        applicationPrompt:
          "Today, catch the scoreboard updating in real time. Three moments. Note what triggered each comparison and what metric was in play.",
        tensionNote: "The gap between 'I'm not competitive' and the scoreboard running constantly in the background",
        emotionalGoal: "Safe intellectual entry. Observing a universal pattern without having to confess yet.",
        tags: ["strategy", "self-knowledge", "psychology"],
      },
      {
        id: "arc-7-day-2",
        weeklyArcId: "arc-7",
        dayIndex: 1,
        dayLabel: "Name",
        title: "Ambition vs. Hunger",
        sparkForm: "uncomfortable_question",
        depthTier: 2,
        sparkText:
          "Ambition has a shape — a goal, a direction, a reason. Hunger is formless. It's the gnawing sense that you should be doing more, being more, achieving more — without a clear picture of what 'more' even means. Just: more.\n\nHunger disguises itself as ambition so well that most people never notice the difference. But there's a simple test. Ambition can be satisfied — you reach the goal, and something in you rests. Hunger cannot. You reach the goal and immediately scan for the next one. The moment of arrival is not relief. It's exposure. Without the next pursuit, you're just a person standing still, and standing still is intolerable.\n\nThe question isn't whether you're driven. It's what happens in the quiet moment after you get the thing you worked for. Relief and presence? Or restlessness and 'what's next'?\n\nOne is a compass. The other is a treadmill. And they feel almost identical from the inside.",
        reflectionPrompt:
          "When you last achieved something significant, what happened in the hours after? Relief and presence, or restlessness and 'what's next'? What does your answer tell you?",
        extensionPrompt:
          "If hunger is driving you rather than ambition, what is the hunger actually for? It's not the achievement itself — what's underneath?",
        distillationPrompt:
          "\"What actually drives me is not ambition but...\"",
        tensionNote: "The difference between having direction and being driven by emptiness",
        emotionalGoal: "Getting specific. Naming the quality of the drive, not just the drive itself.",
        tags: ["strategy", "self-knowledge", "meaning"],
      },
      {
        id: "arc-7-day-3",
        weeklyArcId: "arc-7",
        dayIndex: 2,
        dayLabel: "Complicate",
        title: "Discipline as Hiding",
        sparkForm: "paradox",
        depthTier: 2,
        sparkText:
          "The person who wakes at 5 AM, works with ferocious focus, optimizes every hour, and never wastes a day — this person is universally admired. And often deservedly. Discipline creates things. It separates dreamers from builders.\n\nBut discipline can also be the most socially acceptable hiding place in existence. The person who is always working never has to sit with themselves. The one who optimizes every hour never has to ask whether the project is worth doing. The one who never stops striving never has to confront what stillness would reveal.\n\nA perfectly optimized life can be a perfectly defended one. The same discipline that makes you productive can make you unreachable — to other people, and to your own inner life. You're too busy building to notice what you're building over.\n\nThe question isn't whether your discipline serves you. It does. The question is whether it also protects you from something that needs your attention more than your calendar does.",
        reflectionPrompt:
          "Where does your discipline cross from productive to protective? What does staying busy allow you to avoid?",
        extensionPrompt:
          "Imagine a week with no work, no productivity, no self-improvement — just you, unoccupied. What rises to the surface? What does your resistance to that scenario tell you?",
        distillationPrompt:
          "\"My discipline protects me from...\"",
        tensionNote: "Discipline as virtue vs. discipline as avoidance — and the difficulty of telling them apart",
        emotionalGoal: "Complicating a cherished virtue. This should feel destabilizing if discipline is part of your identity.",
        tags: ["strategy", "self-knowledge", "psychology"],
      },
      {
        id: "arc-7-day-4",
        weeklyArcId: "arc-7",
        dayIndex: 3,
        dayLabel: "Compare",
        title: "The Audience That Isn't There",
        sparkForm: "scenario",
        depthTier: 2,
        sparkText:
          "The project succeeds. The career advances. The number goes up. The recognition arrives. Everything you're working toward — achieved.\n\nBut there's a condition: nobody knows. No one sees. No one is impressed. The accomplishment is completely real and completely invisible. Your bank account knows. Your skills know. But no human being's opinion of you changes by a single degree.\n\nHow much of it would you still want?\n\nThis is not a trick question. External validation is human — legitimate and real. But the gap between what you'd pursue invisibly and what you actually pursue reveals something precise: the proportion of your ambition that's about the work versus the proportion that's about the witness.\n\nSome people run this test and discover the gap is small. That's liberating. Some discover it's enormous — that most of what they chase would feel hollow without an audience. That's liberating too. Just harder to sit with.",
        reflectionPrompt:
          "Run your current ambitions through the invisibility test. Which ones survive? Which ones depend on being seen?",
        extensionPrompt:
          "For the ambitions that depend on a witness, who is the audience? Whose approval or envy would make it feel real? Be specific about the face.",
        distillationPrompt:
          "\"If nobody could see, I would still...\"",
        applicationPrompt:
          "Today, notice when you imagine someone else's reaction to your work — a boss, a peer, an ex, a parent. Who appears most often? What are you showing them?",
        tensionNote: "The witness dependency — how much of striving is for the work and how much is for the watching",
        emotionalGoal: "Deepening the comparison between authentic drive and performance of drive.",
        tags: ["strategy", "self-knowledge", "meaning", "psychology"],
      },
      {
        id: "arc-7-day-5",
        weeklyArcId: "arc-7",
        dayIndex: 4,
        dayLabel: "Apply",
        title: "What You're Striving Away From",
        sparkForm: "uncomfortable_question",
        depthTier: 3,
        sparkText:
          "Most conversations about ambition ask what you're striving toward. This is the wrong question. The more revealing question is: what are you striving away from?\n\nBecause ambition often starts not as desire but as escape. Escape from ordinariness. From the fear that without achievement you are not interesting, not valuable, not worth choosing. From the suspicion that if you stopped performing, people would see something disappointing. From a version of yourself that you decided long ago was unacceptable.\n\nThe relentless optimizer is often running from the person they'd be without the optimization. The chronic achiever is often terrified of what they'd find in stillness. The person who 'just has high standards' is often someone who learned early that love was conditional on performance.\n\nSo — what are you running from? Not what you're building toward. What you're building away from. Name the thing that your ambition keeps at a safe distance.",
        reflectionPrompt:
          "Stop defending your ambition for a moment. What is it protecting you from? If you stripped away the striving, the goals, the forward motion — what feeling or truth would be waiting?",
        extensionPrompt:
          "When did you first learn that achievement was the price of being acceptable? Who taught you? Was it spoken or was it atmospheric — absorbed through what was praised, what was ignored, what was enough?",
        distillationPrompt:
          "\"I strive because without it I'm afraid I'd be...\"",
        applicationPrompt:
          "Sit with this for sixty seconds: you will never be productive enough to outrun the thing you're avoiding. If that's true, what changes?",
        tensionNote: "Ambition as escape — the terrifying possibility that your drive is a defense, not a gift",
        emotionalGoal: "The turn. This should feel like the wind getting knocked out. Name the fear underneath the engine.",
        tags: ["strategy", "self-knowledge", "psychology", "meaning"],
      },
      {
        id: "arc-7-day-6",
        weeklyArcId: "arc-7",
        dayIndex: 5,
        dayLabel: "Articulate",
        title: "The Word 'Enough'",
        sparkForm: "historical_mirror",
        depthTier: 2,
        sparkText:
          "'How much money is enough?' someone asked John D. Rockefeller. 'Just a little bit more.'\n\nIt's told as a joke about greed. It's actually a diagnosis. The goalposts move because the goal was never really about the money. It was about the motion itself — the forward lean, the next pursuit, the momentum that keeps a deeper reckoning at bay.\n\nThe inability to say 'enough' is not about appetite. It's about what 'enough' would require: stopping. And stopping means sitting with yourself, unadorned by progress, without the next accomplishment to prove your value. For some people, that's the most terrifying prospect imaginable — not failure, but stillness.\n\n'Enough' is not a number. It's not an achievement. It's a relationship with yourself where you can tolerate who you are without external proof that you matter.\n\nCould you describe what 'enough' looks like for you — not as a platitude, but as a specific, livable picture? If you can't, that inability is the most important thing you've learned this week.",
        reflectionPrompt:
          "Can you define 'enough' for yourself in concrete terms — not 'I'll know it when I feel it,' but a specific picture? If you can't, what does that tell you?",
        extensionPrompt:
          "Take your sharpest insight from this week — about the scoreboard, hunger, discipline, the invisible audience, or what you're running from — and articulate it as something you could say to someone who knows you well. Make it honest enough that it would surprise them.",
        distillationPrompt:
          "\"For me, 'enough' would actually mean...\"",
        tensionNote: "The inability to define 'enough' as a symptom, not a virtue",
        emotionalGoal: "Articulation after confrontation. Give the week's hardest truth a speakable shape.",
        tags: ["strategy", "meaning", "self-knowledge", "philosophy"],
      },
      {
        id: "arc-7-day-7",
        weeklyArcId: "arc-7",
        dayIndex: 6,
        dayLabel: "Synthesize",
        title: "Ambition That Serves the Life",
        sparkForm: "inversion",
        depthTier: 2,
        sparkText:
          "Subtract the fear and see what remains.\n\nSubtract the need to prove something to someone who may not even be watching anymore. Subtract the restless hunger that can never be fed. Subtract the discipline that's actually avoidance, the audience in your head, the scoreboard you won't admit you're keeping.\n\nWhat's left? That remainder — whatever survives the subtraction — is the ambition worth keeping. It might be smaller than you expected. It might be quieter. But it's yours. Not inherited, not reactive, not running from anything.\n\nThis week wasn't designed to kill ambition. Examined ambition is more powerful than compulsive ambition, not less. A person who strives because they've chosen to — knowing the cost, seeing the pattern, aware of what they're building and why — creates differently than a person being chased by their own inadequacy.\n\nThe highest form of ambition is not more. It's clearer.",
        reflectionPrompt:
          "After this week, what has shifted in how you understand your own drive? What ambition survives the examination, and what was revealed as something else?",
        extensionPrompt:
          "If you could redesign your relationship with ambition — keeping what serves you and releasing what's driven by fear — what would concretely change about how you spend your time and energy?",
        distillationPrompt:
          "\"The ambition I want to keep is... The ambition I need to release is...\"",
        applicationPrompt:
          "Name one way your striving will change because of what you saw this week. Make it specific enough to act on, honest enough to matter.",
        tensionNote: "Examined ambition vs. compulsive ambition — and the courage to tell them apart",
        emotionalGoal: "Integration. Not rejecting ambition, but clarifying it. Carrying forward what survives the week.",
        tags: ["strategy", "self-knowledge", "meaning", "philosophy"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // ARC 8: MEANING
  // ─────────────────────────────────────────────
  {
    id: "arc-8",
    title: "Meaning",
    slug: "meaning",
    description:
      "Confront the question most people avoid: what makes your life feel significant — and what happens when it doesn't?",
    themeCategory: "philosophy",
    dailyPrompts: [
      {
        id: "arc-8-day-1",
        weeklyArcId: "arc-8",
        dayIndex: 0,
        dayLabel: "Observe",
        title: "The Meaningful Moment",
        sparkForm: "observation_seed",
        depthTier: 1,
        sparkText:
          "The moments that meant the most to you were almost never the ones you planned.\n\nA conversation that rearranged how you saw yourself. An ordinary afternoon that felt luminous for no reason you could name. A failure that quietly reorganized your priorities while you were busy grieving it.\n\nMeaning arrives sideways. The carefully engineered milestone — the graduation, the promotion, the trip you planned for months — often feels hollow at its center. Meanwhile some unremarkable Tuesday carries a weight you still can't explain years later.\n\nThis is strange, if you sit with it. You spend enormous energy engineering meaningful moments. And meaning keeps showing up uninvited, in the moments you didn't arrange. What does that suggest about where it actually lives — and whether your strategy for finding it has been pointing in the wrong direction?",
        reflectionPrompt:
          "Think of a moment that felt deeply meaningful to you. Was it planned or unplanned? What made it significant — and would you have predicted it in advance?",
        extensionPrompt:
          "Compare: a moment you engineered to feel meaningful (a graduation, a milestone, a trip) versus one that arrived without planning. Which one actually carried more weight? Why?",
        distillationPrompt:
          "\"The real thing here is that meaning tends to show up when...\"",
        applicationPrompt:
          "Today, pay attention to what feels meaningful in real time — not what should feel meaningful. Notice the gap.",
        tensionNote: "Planned significance vs. the meaning that arrives uninvited",
        emotionalGoal: "Safe observation. A quiet noticing that meaning doesn't follow the script.",
        tags: ["philosophy", "meaning", "self-knowledge"],
      },
      {
        id: "arc-8-day-2",
        weeklyArcId: "arc-8",
        dayIndex: 1,
        dayLabel: "Name",
        title: "The Productivity Decoy",
        sparkForm: "paradox",
        depthTier: 2,
        sparkText:
          "Sitting with a dying parent — unproductive. Watching your child discover something obvious — inefficient. Staring out a window while a half-formed thought crystallizes into the truest thing you've thought in months — indefensible on a timesheet.\n\nHere is the paradox: the more productive you become, the less meaningful your life may feel. And the moments of deepest meaning are, by every productivity metric, a waste of time.\n\nProductivity gives you the feeling of purpose without requiring the vulnerability of actual meaning. It's measurable. Defensible. It fills the hours convincingly. And it keeps the harder question safely at bay: if you stopped producing, what would remain? Not what you've built — what would remain of you?\n\nMost people have made a trade without realizing it: they swapped meaning for purpose, depth for output, presence for performance. The trade feels good. The spreadsheet fills up. The calendar is packed. And somewhere underneath all that productivity, the real questions sit unasked, patient, waiting.",
        reflectionPrompt:
          "Where in your life have you substituted productivity for meaning? Name the specific activities that feel purposeful but leave you empty.",
        extensionPrompt:
          "If all your productive output vanished tomorrow — the career achievements, the completed tasks, the accumulated results — what would still feel like it mattered? Be specific.",
        distillationPrompt:
          "\"I use productivity to avoid confronting...\"",
        tensionNote: "Purpose as achievement vs. meaning as presence",
        emotionalGoal: "Getting specific. Naming the substitution most people refuse to see.",
        tags: ["meaning", "philosophy", "work"],
      },
      {
        id: "arc-8-day-3",
        weeklyArcId: "arc-8",
        dayIndex: 2,
        dayLabel: "Complicate",
        title: "The Meaning-Making Machine",
        sparkForm: "inversion",
        depthTier: 2,
        sparkText:
          "Give a human being tragedy and they'll find the lesson. Give them failure and they'll find the growth. Give them heartbreak and they'll call it necessary. This capacity for meaning-making is genuinely remarkable — and sometimes genuinely dishonest.\n\nNot everything that hurt you made you stronger. Not every loss contained a hidden gift. Some suffering was just suffering — pointless, unfair, unredeemed. Some pain didn't teach you anything you couldn't have learned more gently. 'Everything happens for a reason' is sometimes courage. Sometimes it's a sophisticated refusal to grieve.\n\nThe meaning-making machine is a survival tool. It takes unbearable experience and wraps it in narrative until you can carry it. But the wrapping can also seal the wound before it's clean — trapping the thing you needed to feel beneath a story about growth and resilience.\n\nWhen does meaning-making become a way of refusing to feel what actually happened? And how would you know the difference?",
        reflectionPrompt:
          "Think of a painful experience you've narrated as 'meaningful' or 'growth.' Is that narrative fully honest, or does it let you skip past something you haven't actually processed?",
        extensionPrompt:
          "What would it cost you to admit that some of your suffering was simply unfair — not redemptive, not instructive, just painful? Why is that admission so hard?",
        distillationPrompt:
          "\"The real thing here is that meaning-making becomes dishonest when...\"",
        tensionNote: "Redemptive narratives vs. honest grief",
        emotionalGoal: "Complication. The tool you use to survive might also be a tool of avoidance.",
        tags: ["philosophy", "psychology", "meaning"],
      },
      {
        id: "arc-8-day-4",
        weeklyArcId: "arc-8",
        dayIndex: 3,
        dayLabel: "Compare",
        title: "Vitality vs. Significance",
        sparkForm: "historical_mirror",
        depthTier: 2,
        sparkText:
          "Nietzsche and Tolstoy — two men who couldn't be more different — represent the two poles of meaning that most people oscillate between without naming them.\n\nNietzsche's meaning is vitality. The surging, creative force of life itself — meaning as intensity, as engagement, as saying yes to existence even when it hurts. You don't justify the fire. You feel it.\n\nTolstoy's meaning is significance. The conviction that life connects to something larger — a moral order, a purpose, a truth that outlasts your death. Tolstoy had everything: wealth, fame, a masterpiece behind him. And he was suicidal, because none of it felt significant in the way he needed. The fire was there. The story that made it worthwhile was not.\n\nOne pole says: meaning is aliveness. The other says: meaning is mattering. They are not the same hunger. And most people are starving for one while feeding the other.\n\nWhich kind of meaning are you actually missing?",
        reflectionPrompt:
          "Which do you need more right now — more vitality (aliveness, intensity, engagement) or more significance (the sense that your life connects to something larger)? Where is the deficit?",
        extensionPrompt:
          "Think of someone whose life seems full of vitality but empty of significance, and someone who has significance but lacks aliveness. What can you see in each that applies to you?",
        distillationPrompt:
          "\"The kind of meaning I'm actually starving for is...\"",
        applicationPrompt:
          "Today, notice which moments feel vital and which feel significant. They may not be the same moments.",
        tensionNote: "Aliveness as meaning vs. purpose as meaning — and whether you can have both",
        emotionalGoal: "Pattern recognition. Distinguishing two hungers you may have confused.",
        tags: ["philosophy", "meaning", "self-knowledge"],
      },
      {
        id: "arc-8-day-5",
        weeklyArcId: "arc-8",
        dayIndex: 4,
        dayLabel: "Apply",
        title: "The Last Year",
        sparkForm: "scenario",
        depthTier: 3,
        sparkText:
          "Imagine you learn, with medical certainty, that you have one year left to live. Not a hypothetical — a real diagnosis. You feel fine now. You have twelve months.\n\nDon't rush to the comfortable answer ('I'd spend time with loved ones'). Sit with this longer.\n\nWhat would you stop doing immediately? What would you stop pretending to care about? What would you finally say — and to whom? What would you grieve not having done? What would you realize you'd been postponing out of fear rather than practical constraint?\n\nNow the question that actually cuts: why aren't you living that way now?\n\nNot the logistics — those are real. The emotional architecture. The things you'd say. The pretenses you'd drop. The honesty you'd finally allow yourself. What is the actual reason those are reserved for an emergency?",
        reflectionPrompt:
          "Answer honestly: what would you stop doing, start doing, and finally say? And then answer the harder question — what is actually preventing you from doing those things now, today?",
        extensionPrompt:
          "The gap between how you'd live with one year left and how you're living now — that gap has a name. What is it? Fear? Comfort? Obligation? Cowardice? Name it without softening.",
        distillationPrompt:
          "\"I am postponing... because I am afraid of...\"",
        applicationPrompt:
          "Choose one thing from your 'last year' list. Do it today. Not the biggest thing — the most honest one.",
        tensionNote: "The life you'd live under urgency vs. the life you're actually living",
        emotionalGoal: "The turn. This should land hard. The gap between knowing life is short and actually living accordingly.",
        tags: ["meaning", "self-knowledge", "philosophy"],
      },
      {
        id: "arc-8-day-6",
        weeklyArcId: "arc-8",
        dayIndex: 5,
        dayLabel: "Articulate",
        title: "Speaking About What Matters",
        sparkForm: "uncomfortable_question",
        depthTier: 2,
        sparkText:
          "Try to say, with a straight face, what you actually live for. Watch how fast you reach for a qualifier, a joke, a hedge.\n\nModern culture has made earnestness embarrassing. Irony is safe. Cynicism is sophisticated. Saying 'I live for my family' or 'I care about beauty' or 'I want to matter' feels nakedly sentimental — so you wrap it in enough distance to survive the vulnerability.\n\nBut this is not a small problem. If you cannot articulate what gives your life meaning, you cannot protect it. You cannot share it. You cannot build on it. You cannot tell the difference between a life that's meaningful and one that's merely full.\n\nThe inability to speak directly about what matters to you is not humility. It's a form of cowardice — one that lets the most important things in your life remain vague enough to ignore, neglect, or lose without noticing.\n\nSay it plainly. No irony. No hedging. What do you live for?",
        reflectionPrompt:
          "Say it without qualifiers: what do you live for? Write it in language plain enough that a stranger would understand and specific enough that it couldn't belong to anyone else.",
        extensionPrompt:
          "Now try saying it three ways: to a close friend, to someone you've just met, and to yourself in the mirror. Which version is most honest? Which is most uncomfortable?",
        distillationPrompt:
          "\"I live for...\"",
        tensionNote: "The embarrassment of sincerity vs. the cost of never saying what matters",
        emotionalGoal: "Articulation after vulnerability. Make the private thing speakable.",
        tags: ["communication", "meaning", "self-knowledge"],
      },
      {
        id: "arc-8-day-7",
        weeklyArcId: "arc-8",
        dayIndex: 6,
        dayLabel: "Synthesize",
        title: "Meaning Without Guarantees",
        sparkForm: "scenario",
        depthTier: 2,
        sparkText:
          "Meaning is not something you find once and keep. It's not a destination you arrive at and unpack. It's a practice — one that requires showing up without guarantees, over and over, in the face of uncertainty that never fully resolves.\n\nThis week examined meaning from every angle: where it actually lives (not where you plan for it), how productivity substitutes for it, when meaning-making becomes dishonest, the difference between aliveness and mattering, what mortality reveals, and the difficulty of saying any of it plainly.\n\nUnderneath all of it sits one uncomfortable truth: you cannot narrate your way to meaning. You cannot think your way there, or optimize your way there, or achieve your way there. You have to risk it — show up without knowing if the showing up will be justified, stay present to things that might not pay off, care about things that might not last.\n\nThe meaningful life is not the one that was justified in retrospect. It's the one that was lived with enough honesty and presence that justification became beside the point.",
        reflectionPrompt:
          "What has this week revealed about your relationship to meaning? What are you doing to avoid the question — and what would change if you stopped avoiding it?",
        extensionPrompt:
          "What is one belief about meaning that shifted this week? What replaced it — and does the replacement feel more honest or more uncomfortable?",
        distillationPrompt:
          "\"After a week of examining meaning, I see that I...\"\n\"One thing I want to stop pretending is...\"",
        applicationPrompt:
          "Name one way you'll live differently based on what you saw this week. Make it concrete, not aspirational.",
        tensionNote: "The desire for guaranteed meaning vs. the reality that meaning requires risk",
        emotionalGoal: "Integration. Gathering what remains after the defenses have been named.",
        tags: ["philosophy", "meaning", "self-knowledge"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // ARC 9: POWER AND SOCIETY
  // ─────────────────────────────────────────────
  {
    id: "arc-9",
    title: "Power and Society",
    slug: "power-and-society",
    description:
      "See the systems you swim in — status hierarchies, group behavior, institutional incentives, and the power dynamics you participate in without noticing.",
    themeCategory: "strategy",
    dailyPrompts: [
      {
        id: "arc-9-day-1",
        weeklyArcId: "arc-9",
        dayIndex: 0,
        dayLabel: "Observe",
        title: "The Game You're Already Playing",
        sparkForm: "observation_seed",
        depthTier: 1,
        sparkText:
          "You walk into a room and within seconds — before a single word — you've calculated: Who has status here? Who defers to whom? Where do I rank? Your posture shifts. Your vocabulary adjusts. Your eye contact recalibrates. All of it automatic, all of it beneath conscious awareness.\n\nThese calculations are older than language. They run in every meeting, every party, every family dinner. You're reading status signals — confidence, deference, who interrupts whom, who looks at whom for approval — and broadcasting your own, constantly, whether you mean to or not.\n\nPeople who say 'I don't play status games' are usually people whose status is secure enough that they can afford the performance of not caring. The denial is itself a move — one of the most effective status signals there is.\n\nThe game is always running. You're always playing. The only variable is whether you see the board.",
        reflectionPrompt:
          "Think of the last social gathering you attended. Without judging yourself, describe the status calculations you made — who you deferred to, who you competed with, who you dismissed. What pattern do you see?",
        extensionPrompt:
          "What are the specific signals you read to determine status in a room? Clothes? Confidence? Who speaks first? Who others look at? Which signals do you emit deliberately?",
        distillationPrompt:
          "\"The real thing here is that status is not something I can opt out of because...\"",
        applicationPrompt:
          "Today, in one social interaction, consciously observe the status dynamics. Don't change them — just see them. Notice your own moves.",
        tensionNote: "The belief that you're above status games vs. the evidence that you play them constantly",
        emotionalGoal: "Safe observation. Making the invisible game visible.",
        tags: ["strategy", "psychology", "self-knowledge"],
      },
      {
        id: "arc-9-day-2",
        weeklyArcId: "arc-9",
        dayIndex: 1,
        dayLabel: "Name",
        title: "Your Status Currency",
        sparkForm: "uncomfortable_question",
        depthTier: 2,
        sparkText:
          "Every person trades in a specific status currency.\n\nSome trade in intelligence — they need to be the sharpest mind in the room and feel a cold panic when someone is clearly smarter. Some trade in taste — their preferences must signal refinement, and being called basic stings worse than being called wrong. Some trade in moral virtue — they need to be seen as good, and any challenge to their ethics lands like a character assassination. Some trade in authenticity — they need to be seen as real, and being called a poser is the deepest cut.\n\nEach currency has its own marketplace, its own inflation, its own counterfeit. The intellectual snob and the moral crusader are playing the same game with different chips.\n\nYours is the one that, when threatened, makes you defensive, competitive, or quietly furious. Not what you'd choose in the abstract. The one that actually makes your blood move. Your status currency isn't just what you value. It's where you're fragile.",
        reflectionPrompt:
          "Name your primary status currency. What kind of recognition, when withheld, makes you most unsettled? Intelligence? Taste? Goodness? Competence? Authenticity? Attractiveness? Success?",
        extensionPrompt:
          "When someone challenges your status in your specific currency — what do you do? Fight? Withdraw? Perform harder? Pretend not to care? Describe your actual pattern.",
        distillationPrompt:
          "\"I trade in... and when that currency is devalued, I...\"",
        tensionNote: "The values you claim vs. the status currency you actually defend",
        emotionalGoal: "Getting specific. Naming the exact shape of your status hunger.",
        tags: ["strategy", "psychology", "self-knowledge"],
      },
      {
        id: "arc-9-day-3",
        weeklyArcId: "arc-9",
        dayIndex: 2,
        dayLabel: "Complicate",
        title: "Signaling vs. Substance",
        sparkForm: "paradox",
        depthTier: 2,
        sparkText:
          "The person who reads important books and makes sure you know about it. The person who donates to charity and photographs the moment. The person who rejects materialism — conspicuously. The person who performs not-caring as its own elaborate signal.\n\nYou cannot escape signaling. Every choice — what you wear, what you read, what you reject, how you speak — broadcasts something to the social world. Even the deliberate refusal to signal is a signal. The minimalist signals taste. The dropout signals independence. The person who says 'I don't care what people think' is signaling exactly that, to an audience they've chosen whether they know it or not.\n\nThe question isn't whether you signal. You do. It's whether any of your substance exists independent of its signal value. Is there something you believe, do, or value that you would maintain with absolute certainty even if no human being could ever know about it?\n\nBe careful with your answer. This is the question most people get wrong — not because they're dishonest, but because the signal and the substance have been fused for so long they genuinely can't tell them apart.",
        reflectionPrompt:
          "Name something you believe, do, or value that has significant signal value in your social world. Now ask honestly: would you maintain it if no one could ever see or know about it? What changes when you remove the audience?",
        extensionPrompt:
          "Think about your most 'authentic' choices — the ones that feel most genuinely yours. How many of them also happen to signal something desirable in your social context? Is that a coincidence?",
        distillationPrompt:
          "\"The real thing here is that I can't fully separate what I genuinely value from what I signal because...\"",
        tensionNote: "The impossibility of pure substance in a social species",
        emotionalGoal: "Complication. Even your authenticity is partly performance — and that's inescapable.",
        tags: ["strategy", "philosophy", "self-knowledge"],
      },
      {
        id: "arc-9-day-4",
        weeklyArcId: "arc-9",
        dayIndex: 3,
        dayLabel: "Compare",
        title: "Institutional Capture",
        sparkForm: "historical_mirror",
        depthTier: 2,
        sparkText:
          "In Zimbardo's Stanford Prison Experiment, guards became cruel and prisoners became submissive — not because they were cruel or submissive people, but because the structure demanded it. The role reshaped the person faster than the person could resist the role.\n\nThis doesn't require a laboratory. It's happening to you right now. Your company has incentives that are quietly reshaping your values. Your social circle has norms that constrain what you're willing to say aloud. Your political tribe has positions you adopted not through careful reflection but through osmosis — through the slow, invisible pressure of belonging.\n\nInstitutional capture is subtle precisely because it doesn't feel like capture. It feels like growth. The company man doesn't feel co-opted; he feels aligned. The partisan doesn't feel constrained; she feels principled. The convert doesn't feel pressured; he feels he's come to see things clearly.\n\nThat's the mechanism. The container shapes the water, and the water can't feel the walls. How much of what you believe is genuinely yours — arrived at through independent thought — and how much is the shape of whatever container you've been poured into?",
        reflectionPrompt:
          "Choose one institution you belong to — a company, a political group, a social circle, a professional field. What beliefs or behaviors have you adopted that you wouldn't have developed independently? Be specific.",
        extensionPrompt:
          "Where have you mistaken institutional pressure for personal growth? Where has 'I've evolved on this' actually been 'I've conformed on this'?",
        distillationPrompt:
          "\"The institution I'm most captured by is... and I can see it in how I...\"",
        applicationPrompt:
          "Today, identify one opinion you hold that is the default in your professional or social context. Ask yourself: did you arrive at it through evidence, or through belonging?",
        tensionNote: "Personal agency vs. structural determination — you have less freedom than you think",
        emotionalGoal: "Complexity. Seeing the water you swim in.",
        tags: ["strategy", "psychology", "decision-making"],
      },
      {
        id: "arc-9-day-5",
        weeklyArcId: "arc-9",
        dayIndex: 4,
        dayLabel: "Apply",
        title: "Your Complicity",
        sparkForm: "uncomfortable_question",
        depthTier: 3,
        sparkText:
          "You benefit from systems you claim to oppose. This is not an accusation — it's a structural fact.\n\nYou work within hierarchies that reward conformity while telling yourself you're independent. You participate in economic systems that produce suffering while focusing on your personal ethics. You enjoy privileges that were built on exclusions you'd condemn if you looked directly at them.\n\nThe comfortable response is to say: 'I know, but what can one person do?' This is the alibi of the complicit. It lets you keep the benefits while outsourcing the guilt.\n\nHere is the harder question: what specific power do you have that you're not using — not because you can't, but because using it would cost you something you don't want to lose? Comfort? Status? Belonging? Career advancement?\n\nThe question isn't whether you're complicit. Everyone is. The question is what you're protecting by pretending your complicity is helplessness.",
        reflectionPrompt:
          "Name a system you benefit from while claiming to disagree with. What specific comfort, advantage, or belonging does your participation buy you? What would you actually have to sacrifice to align your behavior with your stated values?",
        extensionPrompt:
          "When you express disagreement with systems you participate in — is that genuine moral concern, or is it a way of managing the discomfort of complicity without actually changing anything? Be ruthlessly honest.",
        distillationPrompt:
          "\"I maintain my position in systems I criticize because losing... would cost me...\"",
        applicationPrompt:
          "Identify one concrete action you could take this week that would reduce your complicity in a system you claim to oppose. Notice the resistance. Name what you're protecting.",
        tensionNote: "Stated values vs. lived complicity — the gap you maintain on purpose",
        emotionalGoal: "The turn. This should sting. You're not a helpless participant — you're a willing one.",
        tags: ["strategy", "self-knowledge", "philosophy"],
      },
      {
        id: "arc-9-day-6",
        weeklyArcId: "arc-9",
        dayIndex: 5,
        dayLabel: "Articulate",
        title: "Influence Without Manipulation",
        sparkForm: "inversion",
        depthTier: 2,
        sparkText:
          "The line between influence and manipulation is not about technique. It's about what you're willing to let the other person see.\n\nInfluence operates in the open: here is what I want, here is why, here is what I'm asking of you. Manipulation operates through concealment: I'm shaping your behavior while hiding my intent, my preferred outcome, my real stake in this.\n\nBut almost no real-world influence is purely one or the other. The leader who 'inspires' is using emotional leverage she never discloses. The friend who 'suggests' is applying social pressure calibrated to your insecurities. The partner who 'supports your decision' has communicated a preferred outcome through a thousand micro-signals — a tone shift, a pause, a carefully chosen question — while maintaining the fiction of neutrality.\n\nYou do this too. The question isn't whether you influence people. It's whether you can describe your technique accurately — as if a documentary crew had been filming your last ten attempts to shape someone's behavior.\n\nWhat would the footage show?",
        reflectionPrompt:
          "Describe your influence style as honestly as you can. How do you get people to do what you want? What do you let them see, and what do you conceal?",
        extensionPrompt:
          "Take your deepest insight about power from this week and express it in a way someone outside your context would understand. Make it concrete, not abstract.",
        distillationPrompt:
          "\"The difference between influence and manipulation, as I actually practice it, is...\"",
        applicationPrompt:
          "In your next attempt to influence someone, try full transparency: state what you want and why. Notice how it changes the dynamic.",
        tensionNote: "The self-image of ethical influence vs. the reality of how you actually operate",
        emotionalGoal: "Articulation. Making your power moves visible and speakable.",
        tags: ["communication", "strategy", "relationships"],
      },
      {
        id: "arc-9-day-7",
        weeklyArcId: "arc-9",
        dayIndex: 6,
        dayLabel: "Synthesize",
        title: "Freedom Within Structure",
        sparkForm: "scenario",
        depthTier: 2,
        sparkText:
          "Imagine you could see it all at once: every status game you're playing, every institutional pressure reshaping your values, every social norm constraining your speech, every inherited belief operating beneath your awareness. The complete picture. Every string attached to you, made visible.\n\nWould that vision liberate you, or paralyze you?\n\nThis week mapped the territory — the games, the currencies, the inescapable signals, the capture, the complicity, the influence you wield without full transparency. And the uncomfortable conclusion is: you can't escape any of it. You're a social animal embedded in structures. The strings don't come off.\n\nBut seeing them changes everything. Not freedom from the game — that's a fantasy. Freedom within it. The difference between a person shaped by forces they can't see and a person shaped by forces they've chosen, consciously, to accept or resist.\n\nThat's the only freedom on offer. It's enough — if you use it.",
        reflectionPrompt:
          "After this week, what system or dynamic can you now see that you couldn't see before — or were choosing not to see? How does seeing it change your relationship to it?",
        extensionPrompt:
          "Where do you want more agency in the systems you inhabit? What would exercising that agency actually require — and cost?",
        distillationPrompt:
          "\"After a week of examining power, I realize I...\"\n\"The freedom I actually have is...\"",
        applicationPrompt:
          "Name one power dynamic you'll engage with differently going forward. Be specific about what you'll do, not just what you'll think.",
        tensionNote: "Total freedom is impossible — but seeing the game changes how you play it",
        emotionalGoal: "Integration. You can't escape the systems, but you can stop being blind to them.",
        tags: ["strategy", "self-knowledge", "philosophy"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // ARC 10: REALITY AND TRUTH
  // ─────────────────────────────────────────────
  {
    id: "arc-10",
    title: "Reality and Truth",
    slug: "reality-and-truth",
    description:
      "Examine your relationship with truth itself — the beliefs you protect, the evidence you ignore, and the lies you need to function.",
    themeCategory: "philosophy",
    dailyPrompts: [
      {
        id: "arc-10-day-1",
        weeklyArcId: "arc-10",
        dayIndex: 0,
        dayLabel: "Observe",
        title: "The Beliefs You Don't Question",
        sparkForm: "observation_seed",
        depthTier: 1,
        sparkText:
          "'I'm a good person.' 'My relationship is strong.' 'I chose this career for the right reasons.' 'I know who I am.'\n\nThese sit so deep they don't feel like beliefs. They feel like reality itself. You don't hold them — they hold you. And you've never seriously examined them. Not because you're lazy, but because the cost of examination is too high. If 'I'm a good person' turns out to be more complicated than you'd like, everything built on that foundation shifts.\n\nThe mark of an unexamined belief isn't confidence. It's the inability to imagine what it would cost to lose it. You've never stress-tested it because the prospect of failure is too threatening. You've been protecting the belief from evidence rather than testing it against evidence.\n\nThe beliefs you guard most fiercely are the ones most likely to be wrong — not because they're baseless, but because you've made sure no counter-evidence can reach them.",
        reflectionPrompt:
          "What is one belief about yourself or your life that you've never seriously questioned — not because the evidence supports it, but because questioning it would be too destabilizing? Name it.",
        extensionPrompt:
          "What would change in your life if that belief turned out to be wrong? Not hypothetically — what specific decisions, relationships, or self-understanding would have to be revised?",
        distillationPrompt:
          "\"The belief I protect most from examination is...\"",
        applicationPrompt:
          "Today, notice when you encounter information that supports a belief you hold strongly. Ask: would I engage with this information differently if it pointed the other way?",
        tensionNote: "The comfort of unexamined beliefs vs. the risk of honest inquiry",
        emotionalGoal: "Safe entry. Intellectual framing of a deeply personal question.",
        tags: ["philosophy", "self-knowledge", "decision-making"],
      },
      {
        id: "arc-10-day-2",
        weeklyArcId: "arc-10",
        dayIndex: 1,
        dayLabel: "Name",
        title: "Your Motivated Reasoning",
        sparkForm: "paradox",
        depthTier: 2,
        sparkText:
          "You don't gather evidence and then form a conclusion. You form a conclusion and then gather evidence. The gathering feels like reasoning. It isn't. It's motivated reasoning — the most common form of thinking there is, disguised as the rarest.\n\nHere's the part that stings: intelligence doesn't protect you from this. It supercharges it. A sharper mind doesn't find truth more reliably. It finds sharper rationalizations. The most brilliantly argued positions are often the most elaborately defended biases — defended so well that neither you nor your audience can see the wires.\n\nThis means your most sophisticated beliefs — the ones you can defend most fluently, the ones that feel the most rigorously earned — might be exactly the ones you've invested the most in protecting from challenge. Fluency is not a sign of truth. It's often a sign of rehearsal.\n\nWhat belief do you argue most eloquently? When was the last time you genuinely tried to defeat it — not to sharpen your defense, but to see if it holds?",
        reflectionPrompt:
          "Name a belief you hold that you can defend brilliantly. Now ask: when was the last time you genuinely sought out the strongest argument against it — not to refute it, but to see if it lands?",
        extensionPrompt:
          "Think of a time you 'changed your mind.' Was it genuine updating based on evidence, or did you switch to a new position that was equally convenient? How can you tell the difference?",
        distillationPrompt:
          "\"I argue most fluently for things I need to be true because...\"",
        tensionNote: "Intelligence as a tool for truth vs. intelligence as a tool for self-defense",
        emotionalGoal: "Getting specific. The uncomfortable realization that your best arguments may be your deepest rationalizations.",
        tags: ["philosophy", "psychology", "self-knowledge"],
      },
      {
        id: "arc-10-day-3",
        weeklyArcId: "arc-10",
        dayIndex: 2,
        dayLabel: "Complicate",
        title: "The Necessary Fictions",
        sparkForm: "historical_mirror",
        depthTier: 2,
        sparkText:
          "Nietzsche asked a question that still cuts: what if untruth is a condition of life?\n\nThe belief that you matter. The belief that your work has lasting value. The belief that your partner chose you for the right reasons. The belief that the future will be better than the past. These may or may not be 'true' in any verifiable sense — but strip them away and action becomes nearly impossible. You don't get a cleaner life. You get paralysis.\n\nTerror Management Theory suggests that much of human culture — art, religion, legacy, ambition — is an elaborate defense against the awareness of death. Ibsen called them 'life-lies': the fictions people need in order to function. Remove them and the person doesn't become more honest. They collapse.\n\nSome lies are load-bearing. They hold up the structure of a functional life. Pull them out and the ceiling comes down.\n\nThis is the complication that honest people don't want to face: the question isn't whether to be fully truthful. It's which fictions you can safely examine — and which ones, if removed, would bring down everything built on top of them.",
        reflectionPrompt:
          "What is a 'life-lie' you might be maintaining? A fiction about yourself, your relationships, or your future that you need in order to function? Don't rush to dismantle it — just name it.",
        extensionPrompt:
          "If you could see your life with perfect clarity — every self-deception removed, every comforting fiction dissolved — would you be better off? Or are some illusions genuinely necessary? Where do you draw the line?",
        distillationPrompt:
          "\"The real thing here is that total honesty might not be survivable because...\"",
        tensionNote: "The value of truth vs. the function of necessary illusions",
        emotionalGoal: "Complication. Truth isn't always the highest value — and admitting that is itself a kind of truth.",
        tags: ["philosophy", "psychology", "meaning"],
      },
      {
        id: "arc-10-day-4",
        weeklyArcId: "arc-10",
        dayIndex: 3,
        dayLabel: "Compare",
        title: "Inherited vs. Chosen Beliefs",
        sparkForm: "inversion",
        depthTier: 2,
        sparkText:
          "Try inverting the origin story of your strongest belief. Instead of 'I believe X because I examined the evidence,' try: 'I was exposed to X at a formative age, in a context that rewarded believing it, surrounded by people who reinforced it, and I've never been in a situation where disbelieving it was socially safe.'\n\nThis reframing doesn't make the belief wrong. But it changes the question from 'Is this true?' to 'Would I believe this if I'd been born to different parents, in a different country, in a different century?'\n\nThe data is uncomfortable: most people's core convictions — about politics, morality, religion, human nature, what constitutes a good life — correlate more strongly with geography and upbringing than with independent reasoning. You believe what your context taught you to believe. Then you built a rational case for it later and called the result 'thinking for yourself.'\n\nWhich of your deepest convictions would survive a total change of context? The ones that would — those are genuinely yours. The ones that wouldn't were never convictions at all. They were inheritance.",
        reflectionPrompt:
          "Choose your strongest moral or political conviction. Trace its origin honestly: did you arrive at it through independent reasoning, or did you inherit it from your context and then build a rational case around it afterward?",
        extensionPrompt:
          "If you'd been born into a culture that held the opposite conviction, how confident are you that you'd have reasoned your way to your current position? What does your honest answer reveal about the nature of your 'convictions'?",
        distillationPrompt:
          "\"The belief I'm most confident about is also the one I... because...\"",
        applicationPrompt:
          "Today, engage seriously with the strongest version of an argument you disagree with. Not a straw man — the real thing. Notice your resistance.",
        tensionNote: "The feeling of independent reasoning vs. the reality of contextual belief",
        emotionalGoal: "Complexity. Seeing that your most cherished beliefs may be accidents of biography.",
        tags: ["philosophy", "decision-making", "self-knowledge"],
      },
      {
        id: "arc-10-day-5",
        weeklyArcId: "arc-10",
        dayIndex: 4,
        dayLabel: "Apply",
        title: "What You Refuse to See",
        sparkForm: "uncomfortable_question",
        depthTier: 3,
        sparkText:
          "There is something you know but will not look at.\n\nNot something you're ignorant of — something you've glimpsed and turned away from. A truth about your relationship. About your career. About what you actually want. About who you actually are. About what you've done or failed to do. About what is coming.\n\nYou've felt it at 3 AM, in the shower, in the pause before you reach for your phone. It surfaces in the moments when your defenses are down, and you push it back under immediately — with distraction, rationalization, busyness, or the simple refusal to hold the thought long enough for it to become undeniable.\n\nThis is not about small self-deceptions. This is about the central one. The thing that, if you admitted it fully, would require you to change your life.\n\nYou know what it is. You've always known.\n\nSay it.",
        reflectionPrompt:
          "Stop. Do not deflect into something safe. What is the thing you know but refuse to fully acknowledge — the truth that, if you let yourself see it completely, would require something of you that you're not ready to give? Write it down. All of it.",
        extensionPrompt:
          "What is the cost of continuing to not-see this thing? Not the dramatic cost — the daily one. The low-grade dishonesty. The energy spent maintaining the avoidance. The version of yourself that exists on the other side of admission. What are you paying to keep this unseen?",
        distillationPrompt:
          "\"The thing I've been refusing to see is...\"\n\"I refuse to see it because seeing it would mean...\"",
        applicationPrompt:
          "You don't have to act on it today. But you do have to stop pretending you don't know. Write it down somewhere private. Make it real by making it visible — even if only to yourself.",
        tensionNote: "The truth you know vs. the truth you'll admit — the central self-deception",
        emotionalGoal: "The hardest turn in the entire app. This is where all previous arcs converge. Every avoidance pattern, every self-deception, every motivated reasoning — this is what they've been protecting.",
        tags: ["self-knowledge", "philosophy", "meaning", "psychology"],
      },
      {
        id: "arc-10-day-6",
        weeklyArcId: "arc-10",
        dayIndex: 5,
        dayLabel: "Articulate",
        title: "The Courage to Update",
        sparkForm: "scenario",
        depthTier: 2,
        sparkText:
          "Imagine someone you respect deeply — a mentor, a friend, a thinker you admire — sits down with you and says: 'I need to tell you something I've noticed about you that I think you can't see yourself. It's going to be hard to hear, and your first instinct will be to explain it away. I'm asking you to just listen.'\n\nNow: what would you least want them to say?\n\nThe thing you least want to hear is almost certainly the thing you most need to hear. Your flinch response maps the territory of your self-deception more accurately than any amount of introspection.\n\nAfter yesterday's confrontation, today is about what comes next. Not confession — articulation. Can you take what you saw and make it speakable? Can you hold the truth without collapsing into shame or retreating into defensiveness?\n\nThe goal isn't self-flagellation. It's update. Seeing something true and integrating it rather than performing guilt about it.",
        reflectionPrompt:
          "What would you least want a trusted person to say they've noticed about you? Write it down. Then ask: is it true? Not partly true, not sometimes true — is it fundamentally accurate?",
        extensionPrompt:
          "Take the hardest truth from yesterday or today and express it in three ways: as a private admission, as something you could say to someone you trust, and as a single honest sentence. Which version matters most?",
        distillationPrompt:
          "\"I am someone who... and I'm choosing to see that clearly now because...\"",
        applicationPrompt:
          "Tell one person something true about yourself that you've been keeping behind a performance. Not the biggest thing — the most honest one.",
        tensionNote: "The difference between self-awareness as performance and self-awareness as genuine update",
        emotionalGoal: "Articulation after the hardest turn. Making the truth portable without making it a performance.",
        tags: ["communication", "self-knowledge", "philosophy"],
      },
      {
        id: "arc-10-day-7",
        weeklyArcId: "arc-10",
        dayIndex: 6,
        dayLabel: "Synthesize",
        title: "Living in the Real",
        sparkForm: "observation_seed",
        depthTier: 2,
        sparkText:
          "You contain contradictions. You maintain necessary fictions. You play status games you claim to despise. You avoid certain truths because the cost of seeing them is higher than the cost of not seeing them. You have mixed motives for almost everything you do — including the decision to do this work of self-examination.\n\nThat is not a confession. It is a description of being human.\n\nThis week — and this entire journey — has been about one thing: the distance between the story you tell about your life and the life you actually live. Each arc surfaced a different form of the same question: what are you willing to see?\n\nHuman nature. Judgment. Self-knowledge. Attention. Communication. Relationships. Ambition. Meaning. Power. And now truth itself — your relationship to what's real, what's constructed, and what you need to believe in order to keep moving.\n\nThe question was never whether you could become perfectly honest, perfectly self-aware, perfectly consistent. No one can. The question was whether you could bear to see yourself clearly — mixed motives, load-bearing fictions, status games and all — and keep going. Not despite the contradictions. With them.\n\nThat's the whole work. Not arriving at truth. Living in its neighborhood, with your eyes open, for as long as you can stand it.",
        reflectionPrompt:
          "After this week — and across all the arcs you've completed — what is the most important thing you now see about yourself that you didn't see before? What changed in how you relate to truth?",
        extensionPrompt:
          "What is your relationship with self-deception now? Not 'I'll never deceive myself again' — that's its own deception. Something more honest. Something you can actually sustain.",
        distillationPrompt:
          "\"After examining my relationship with truth, I...\"\n\"The thing I want to carry forward is...\"",
        applicationPrompt:
          "Name the single most important insight from your entire journey through these arcs. Write it in a form you'll remember. Then ask: what will you do with it?",
        tensionNote: "The desire for total clarity vs. the reality of living with partial sight",
        emotionalGoal: "Final integration. This is the capstone — not just of this arc but of the entire series. Gather what remains.",
        tags: ["philosophy", "self-knowledge", "meaning", "psychology"],
      },
    ],
  },
];
