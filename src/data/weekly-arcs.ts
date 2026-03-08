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
          "Notice: people rarely reveal themselves most clearly in what they praise. They reveal themselves in what they envy, resent, and keep returning to.\n\nAdmiration is easy to perform. Envy is almost impossible to fake. Resentment slips out sideways — in the joke that's slightly too sharp, the compliment that curdles at the edges, the subject they can't stop bringing up.\n\nIf you want to understand someone, don't listen to their stated values. Watch their involuntary reactions.",
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
          "What do you pretend not to want? Say it without softening it.\n\nDo you want admiration? Control? Safety? Validation? Desirability? Importance? Revenge? Peace? To be chosen? To be right?\n\nMost people dress their deepest wants in acceptable language: 'I just want to help.' 'I don't care what people think.' 'It's not about the money.' But honesty begins with naming the want beneath the mask. The person who says 'I don't need recognition' often needs it most. The one who says 'I'm not competitive' is often keeping meticulous score.",
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
          "The desire to be seen can make a person more honest or more performative. Sometimes both at once.\n\nWhen does being understood deepen a person, and when does it tempt them into becoming a character? When does sharing become curating? When does vulnerability become a strategy?\n\nThe paradox: the moment you notice you're being authentic, you've introduced a witness. And a witness changes the act. The most honest version of you might be the one nobody sees.",
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
          "What if status is not the opposite of love, but one of the ways people try to secure it? What if much of ambition is disguised longing?\n\nThe person climbing the ladder may tell themselves it's about mastery, but it's often about mattering. The one who gives endlessly may frame it as love, but it's sometimes about being needed — which is a form of control. The one who never disagrees calls it kindness, but it's often about belonging at any cost.\n\nEach need is real. But confusing them leads to lives built on the wrong foundation.",
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
          "Think of the last time you did something generous, thoughtful, or impressive.\n\nNow be precise: how much of it was for them, and how much was for the version of yourself you wanted to feel you were?\n\nThis is not about guilt. Mixed motives are human. But most people never look directly at the ratio — because looking at it threatens the story they need to believe about themselves.",
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
          "Seneca wrote about virtue while living with immense wealth and political proximity to power. His critics called him a hypocrite. His defenders said wisdom doesn't require perfection.\n\nWas he a hypocrite, a realist, or simply human? What standard do you use when judging the gap between belief and behavior — in others and in yourself?\n\nAnd here's the sharper question: is the standard you apply to others the same one you apply to yourself, or do you grade on a curve when it's your own inconsistency?",
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
          "This week was not about whether human motives are pure. They never are. It was about whether you can bear to see them clearly without becoming cynical.\n\nCynicism is the lazy exit from honest observation. It says: 'People are terrible, nothing matters.' But that's not insight — it's the refusal to hold complexity. The harder position is: people are mixed, motives are layered, and clear sight makes compassion possible, not impossible.",
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
          "What if the quality of a decision has nothing to do with its outcome?\n\nA good decision can lead to a bad outcome — you made the right call, but the world was unlucky. A bad decision can lead to a good outcome — you were reckless, but it happened to work. Most people judge decisions by results. But results include luck, timing, and factors beyond anyone's control.\n\nThe gambler who wins big made a bad bet that happened to pay off. The doctor who made the right call but lost the patient didn't make the wrong choice. Confusing outcome quality with decision quality is one of the most common — and most costly — errors in judgment.",
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
          "Charlie Munger: 'Show me the incentive and I will show you the outcome.'\n\nAlmost every puzzling human behavior makes sense once you see the incentive structure beneath it. Doctors who own their equipment order more tests. Advisors paid by commission recommend more products. Friends who need validation agree with everything you say.\n\nThe behavior isn't mysterious. The incentive is just hidden.\n\nNow turn it on yourself: what incentives are shaping your behavior right now — ones you didn't consciously choose?",
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
          "A company cuts costs by firing its most experienced (expensive) employees. First-order effect: immediate savings. The spreadsheet looks great.\n\nSecond-order: institutional knowledge vanishes. Third-order: mistakes multiply, new hires need training from people who no longer work there. Fourth-order: morale drops, the best remaining people leave, recruiting costs surge. The savings evaporate — and then some.\n\nFirst-order thinking asks: 'What happens if I do this?'\nSecond-order thinking asks: 'And then what? And then what after that?'\n\nMost poor judgment comes from stopping too early.",
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
          "Jeff Bezos distinguishes between 'one-way doors' and 'two-way doors.' One-way doors are irreversible — marry, quit, publish, say the thing you can't unsay. Two-way doors are reversible — try the new approach, test the idea, take the trip.\n\nThe paradox: most people treat two-way doors like one-way doors, agonizing over reversible choices. And some people treat one-way doors like two-way doors, being reckless with decisions that can't be undone.\n\nThe first pattern creates paralysis. The second creates wreckage. Great judgment is partly about knowing which door you're standing in front of.",
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
          "Everyone has a judgment autopilot — a default decision-making mode that runs beneath conscious awareness.\n\nSome people always rush. Some always delay. Some seek consensus as a way to avoid responsibility. Some go contrarian to feel smart. Some optimize for safety and call it wisdom. Some optimize for excitement and call it courage.\n\nNone of these is always right. But most people don't see their default — they just assume it's 'how they think.'\n\nHere's the uncomfortable question: what is your autopilot? And when was the last time it cost you?",
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
          "Imagine two people explaining the same difficult decision.\n\nPerson A: 'I just went with my gut. It felt right.'\n\nPerson B: 'Here's what I weighed. Here's what I didn't know. Here's the risk I accepted. Here's why I chose this anyway.'\n\nPerson B doesn't have more certainty — they have more clarity. And clarity is more trustworthy than confidence. The ability to articulate tradeoffs honestly, without hiding behind false certainty or vague intuition, is itself a form of intelligence.\n\nPoor articulators hide behind jargon or gut feelings. Great articulators show their work.",
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
          "Good judgment isn't one skill. It's a collection of habits running simultaneously: slow down at the right moment, speed up at another. See incentives. Think forward in time. Know your own defaults. Articulate tradeoffs. Hold uncertainty without freezing.\n\nYou've spent a week examining these habits. The question isn't whether you understand them intellectually — it's which ones you'll actually install.\n\nUnderstanding without practice is just entertainment.",
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
          "What if the biggest obstacle to self-knowledge isn't that you don't know yourself — but that you know an old version and haven't updated?\n\nMost people carry a self-image assembled in adolescence, reinforced by family narratives, and selectively updated based on comfortable feedback. 'I'm the smart one.' 'I'm the reliable one.' 'I'm bad at relationships.' 'I'm not creative.'\n\nThese stories may have been true once. Some may still be. But many have become cages disguised as identities — maps drawn twenty years ago for territory that's completely changed.",
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
          "Your avoidance patterns are a more honest autobiography than your resume.\n\nWhat you consistently avoid — conversations, decisions, emotions, types of people, kinds of work — is a map of your fears. And your fears are a map of your edges. The places where growth is possible are almost always the places where avoidance lives.\n\nDon't think about dramatic fears. Think about the subtle ones: the email sitting unsent, the conversation you keep postponing, the decision you keep deferring, the thought you keep starting and then steering away from.",
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
          "You are not one person. You are a committee — of impulses, values, fears, and desires that often vote against each other.\n\nYou want freedom and safety. You want to be seen and to hide. You value honesty and also peace. You want discipline and indulgence. You want to be extraordinary and to be left alone.\n\nMost people try to resolve these contradictions by denying one side, pretending they don't contain multitudes. But denial doesn't kill the contradiction — it just forces it underground, where it shows up as anxiety, self-sabotage, or that vague feeling that something is off.\n\nMaturity isn't resolving contradictions. It's holding the tension: 'I am someone who wants both of these things, and that's okay.'",
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
          "Imagine two versions of yourself existing simultaneously:\n\nVersion A is the one you show the world — considered, intentional, curated. The version that knows what to say, when to smile, how to frame the story of your life.\n\nVersion B is the one that exists at 3am, or in the shower, or in the moments just before you fall asleep — uncertain, messy, searching, sometimes afraid.\n\nThe gap between these two isn't hypocrisy. It's human. But when the gap becomes too wide, you start feeling like a fraud. When it narrows, you start feeling free.\n\nThe question isn't whether the gap exists. It's how wide yours is — and in which direction you're moving.",
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
          "You have a pattern. In relationships, you tend to do the same thing. In stress, you reach for the same mechanism. In conflict, you default to the same move. In success, you self-sabotage in the same way.\n\nYou probably already know what it is. You might even have a sophisticated explanation for it. But knowing about a pattern and changing it are not the same thing — and the gap between them is where most of your frustration with yourself lives.\n\nSo: what is the pattern you keep running? Not the abstract version. The specific one. The one you can feel right now.",
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
          "Self-knowledge that stays internal is incomplete. The unspoken insight remains vapor. The spoken one becomes real.\n\nMany people 'know' things about themselves but have never said them aloud — never put them in words precise enough to hold. They carry vague self-awareness like fog: present but formless.\n\nThe act of articulation — finding exact words for an inner truth — transforms understanding from a feeling into something solid. Something you can examine, share, and build on.\n\nYour task today: take the most honest thing you've thought this week and make it speakable. Not hedged, not intellectualized. Clear.",
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
          "Self-knowledge isn't about finding a fixed identity and locking it in. It's about seeing yourself clearly enough to choose who you're becoming — instead of drifting there by default.\n\nYou've spent a week looking inward: at outdated stories, avoidance patterns, internal contradictions, the gap between your performed and felt selves, and the patterns you keep running. You haven't solved any of these. But you've seen them.\n\nSeeing clearly is not the same as changing. But it is the prerequisite. You can't steer what you can't see.",
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
          "Your attention is not a spotlight. It's a sculptor. What you pay attention to becomes your life — not in a vague inspirational way, but literally.\n\nThe things you attend to become your thoughts, your emotions, your memories, your identity. The meeting you dreaded shapes your morning. The argument you replay shapes your evening. The feed you scroll shapes the texture of your mind.\n\nSimone Weil: 'Attention is the rarest and purest form of generosity.'\nWilliam James: 'My experience is what I agree to attend to.'\n\nIf someone observed how you spent your attention for a week — not your time, your attention — what would they conclude your life is actually about?",
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
          "Your attention is the most valuable resource you have — and it's under constant siege. Not by enemies, but by systems engineered with billions of dollars and thousands of PhDs to capture it.\n\nBut here's the question that's harder than blaming the systems: you know this. Everyone knows this. And yet you hand your attention over anyway. Why?\n\nThe systems don't just steal your time. They steal your interiority — your ability to be alone with a thought long enough for it to deepen into something real. When was the last time you sat with a single idea for thirty minutes? Can you even remember?",
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
          "We live in an age of unprecedented stimulation — and unprecedented boredom. This isn't a contradiction. It's a causal relationship.\n\nConstant stimulation raises the threshold for engagement. The brain, flooded with novelty, loses its sensitivity to subtlety. The person who scrolls for hours finds a book boring. The person who watches short-form video finds a real conversation tedious. The person who can access any information instantly loses the ability to wonder.\n\nBoredom isn't the absence of stimulation. It's the inability to find richness in ordinary experience. It's a broken receptor, not an empty room.\n\nThe most overstimulated people are often the most bored. And the most bored people are often the most overstimulated. The snake eats its tail.",
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
          "There are two modes of attention, and most people are starving in one while overfeeding the other.\n\nFocused attention is a laser: concentrated, directed, penetrating. It's what you need for deep work, analysis, and problem-solving.\n\nOpen attention is a lantern: wide, receptive, peripheral. It's what you need for creativity, noticing patterns, being present to what's actually happening around you, and having the kind of insight that arrives sideways.\n\nModern environments demand focused attention while systematically destroying the conditions for it. And almost no environment cultivates open attention at all — because open attention looks, from the outside, like doing nothing.",
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
          "The quality of your attention is the quality of your relationships. This is not a metaphor.\n\nWhen you give someone your full, undivided attention, they feel it — not as a technique, but as a form of respect and presence. When you half-listen while composing your response, check your phone during a conversation, or are physically present but mentally elsewhere, they feel that too. It communicates: 'You are not important enough for my full presence.'\n\nNow the uncomfortable part: who in your life are you giving fragmented attention to? And what is that doing to them — and to the relationship?",
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
          "The contemplatives understood something about attention that productivity culture misses entirely.\n\nSimone Weil, writing during WWII, argued that attention — real attention, not the effortful concentration we usually mean — is a kind of waiting. 'Attention consists of suspending our thought, leaving it detached, empty, and ready to be penetrated by the object.' Not grasping. Receiving.\n\nThis is the opposite of how we use the word. We say 'pay attention' as if it's an expenditure of effort. But the deepest attention is closer to surrender. You stop trying to extract. You let the thing you're attending to speak.\n\nHow would you explain what attention really is to someone who has only ever thought of it as a productivity tool?",
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
          "You've spent a week examining attention — where it goes, what steals it, the paradox of stimulation, two modes, its role in relationships, and its deeper meaning.\n\nHere's what was underneath all of it: attention is not just a cognitive function. It's an ethical act. What you choose to attend to is, in a real sense, what you choose to value.\n\nA week of paying attention to attention has been, secretly, a week of examining your values — not the values you profess, but the ones you actually live by, minute to minute, day to day.\n\nWhat did the examination reveal?",
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
          "Pay attention today to the moment between thinking something and saying it. There is a gap — sometimes a fraction of a second, sometimes several — where you revise.\n\nYou soften a criticism. You add a qualifier. You swap an honest word for a diplomatic one. You decide not to say it at all. This editing happens so fast it feels like nothing. But it is not nothing. It is a choice, repeated hundreds of times a day, about what version of your thoughts the world gets to hear.\n\nThe question is not whether you edit. Everyone edits. The question is whether you know what you're optimizing for when you do.",
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
          "What if silence is never neutral? What if every time you choose not to speak, you're communicating something — consent, resentment, superiority, fear, strategy, or love?\n\nPeople treat silence as the absence of communication. But silence has content. The person who doesn't push back is training the other person to keep pushing. The one who withholds praise is shaping someone's confidence. The one who never raises the difficult subject is building a relationship on shared avoidance.\n\nYour silences are not empty. They're full of everything you decided not to say.",
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
          "The more precisely you say what you mean, the more vulnerable you become. Vague language is armor. 'I was a little annoyed' is safer than 'I felt dismissed and it made me furious.' 'We should probably talk about this sometime' is safer than 'I need to tell you something that might change how you see me.'\n\nBut here's the paradox: imprecise language, which feels like it protects the relationship, often slowly degrades it. The things you won't say precisely become the things that can never be resolved. Meanwhile, the sharp truth — the one that risks everything — is often the only thing that can actually bring people closer.\n\nClarity is a form of courage. Vagueness is a form of control.",
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
          "George Orwell argued that most bad writing comes from the desire to sound impressive rather than to communicate clearly. He watched intellectuals bury simple ideas in complex language — not to illuminate, but to signal intelligence. The fog was the point.\n\nThe same dynamic plays out in everyday conversation. There is a difference between speaking to be understood and speaking to be admired. One centers the listener; the other centers you. One simplifies until the idea lands; the other complicates until the speaker feels adequate.\n\nMost people toggle between these modes without realizing it. The shift is subtle — a slightly elevated vocabulary, a reference dropped for effect, an explanation that serves your ego more than their comprehension. The question is: when you speak, who are you actually serving?",
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
          "Imagine two versions of you in every conversation. One knows exactly what you feel and mean. The other is the translator — the one who converts raw experience into words that other people can receive.\n\nThe translator is necessary. Without it, you'd be incomprehensible. But the translator also loses things. It rounds off edges. It flattens intensity. It substitutes acceptable emotions for the ones you're actually having. 'I'm fine' is a translation of something more jagged. 'I don't mind' is a translation of something with more teeth.\n\nThe gap between what you experience and what you can articulate is not a failure of vocabulary. It's a negotiation between truth and receivability. The question is whether the cost of translation has become so high that people close to you are responding to a version of you that barely exists.",
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
          "This week was about the architecture of your communication — the edits, the silences, the precision you avoid, the performance you default to, the things you won't say, and the cost of constant translation.\n\nUnderneath all of it is a single question: are you using language to connect, or to manage? To reveal, or to control how you're perceived?\n\nMost people do both, constantly, without realizing which mode they're in. The week's work was not about becoming radically transparent — that's its own kind of performance. It was about seeing the machinery. Once you see how you use language to protect yourself, you can start choosing when protection is necessary and when it's just habit.\n\nWhat did the seeing change?",
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
          "Notice how quickly you assign roles to people. This one is 'the reliable one.' That one is 'the difficult one.' This one is 'the one who gets me.' That one is 'the one I have to manage.'\n\nThese assignments happen fast and feel like observation, but they're closer to casting. You audition people for parts in a story you've already written, and then you interact with the character instead of the person. When they deviate from the role, it feels like betrayal — even though they never agreed to the part.\n\nThe question is not whether you cast people. Everyone does. The question is whether you've noticed the script.",
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
          "What if every relationship you're in has a contract you never discussed? Not the spoken agreements — those are easy. The unspoken ones: I'll admire you if you never challenge me. I'll be loyal if you make me feel needed. I'll stay if you don't make me feel ordinary. I'll tolerate this if you never make me address that.\n\nThese contracts are invisible, but they govern everything. When someone 'suddenly' becomes angry or distant, it's rarely sudden — it's usually that one party violated a term of the contract the other never articulated.\n\nThe hardest part is not discovering the contract. It's admitting what you demanded in exchange for what you gave.",
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
          "There is a kind of closeness that looks like love but functions like surveillance. Two people so attuned to each other's moods that neither can feel anything independently. Every emotion becomes shared property. Every silence becomes a signal. Every decision is filtered through 'How will they react?'\n\nThis is often called intimacy. It is not intimacy. Intimacy requires two separate people choosing to reveal themselves. Enmeshment is two people who have lost the boundary between self and other — and mistake the loss for connection.\n\nThe paradox: the closer you get without maintaining separateness, the less there is of you to actually offer. The most suffocating relationships are often the ones that feel the most 'connected.'",
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
          "The patron saints of generosity are rarely as selfless as they appear. Andrew Carnegie gave away fortunes — while union workers died in his steel mills. Philanthropists name buildings after themselves. Parents who sacrifice everything for their children often collect the debt in guilt and obligation for decades.\n\nGenerosity creates indebtedness. The person who gives the most often controls the most. 'After everything I've done for you' is the collection notice that reveals what the giving was actually about.\n\nThis is not to say all generosity is manipulation. But some of it is — and the generous person is usually the last to see it. The question is whether your giving creates freedom for the other person or obligation.",
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
          "Imagine someone filmed your last month of interactions with the person closest to you and showed it to a stranger. The stranger knows nothing about your history, your intentions, your inner life. They only see the footage.\n\nWhat would they conclude you want from the relationship? What would they say you're teaching the other person to expect from you? What role would they see you playing — and would it match the role you think you play?\n\nPeople don't respond to your intentions. They respond to your patterns. You've trained the people in your life to expect a specific version of you — through repetition, not declaration. The version they've learned may not be the one you meant to teach.\n\nIf there is a gap between who you believe yourself to be in relationships and who your behavior has trained people to experience, that gap is where most relational pain lives.",
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
          "This week stripped the machinery bare. The casting, the contracts, the enmeshment dressed as intimacy, the generosity that functions as control, the pattern you keep rebuilding, the version of you that your behavior — not your intentions — has taught people to expect.\n\nNone of this means your relationships are false. It means they're human. The question was never whether these dynamics exist in your connections — they exist in everyone's. The question is whether you can love someone while seeing clearly what you're doing and why.\n\nLove without illusion is harder than love with it. It requires holding two things at once: genuine care for another person, and honest awareness of what you're getting from the arrangement. Most people choose one or the other. The work is holding both.",
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
          "Notice: you are keeping score. You may not admit it, but there is a leaderboard in your head. It tracks who's ahead, who's behind, who's doing better than they should be, and who's doing worse than you expected.\n\nThe scoreboard isn't always about money or status. Sometimes it's about depth of relationships, or creative output, or moral seriousness, or who seems happiest. The metrics shift depending on what you value — but the scorekeeping is constant.\n\nWatch today for the moments when the score updates. Someone gets a promotion. Someone posts something that lands. Someone seems effortlessly good at something you work hard at. Notice not just the comparison, but the specific metric you're tracking. It will tell you what you're actually competing for.",
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
          "There is a difference between ambition and hunger. Ambition has a shape — a goal, a direction, a reason. Hunger is formless. It's the feeling that you should be doing more, being more, achieving more — without a clear picture of what 'more' even means.\n\nHunger disguises itself as ambition. But ambition can be satisfied. Hunger can't. The ambitious person finishes something and feels the accomplishment. The hungry person finishes something and immediately scans for the next thing, because the achievement was never really the point.\n\nWhich one drives you? Be honest. Not about what you say in interviews, but about what happens in the quiet moment after you get the thing you worked for. Is there relief, or just the next want?",
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
          "Discipline is universally praised. The person who wakes early, works hard, stays focused, optimizes their life — this person is held up as a model. And often they deserve it. Discipline creates things. It moves the needle. It separates intention from result.\n\nBut discipline can also be a place to hide. The person who is always working doesn't have to sit with themselves. The one who optimizes every hour doesn't have to ask whether the project is worth doing. The one who never stops striving never has to confront what they're striving away from.\n\nThe paradox: the same discipline that makes you productive can make you unreachable — to others, and to yourself. A perfectly optimized life can be a perfectly defended one. The question is not whether your discipline serves you. It's whether it also protects you from something you need to face.",
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
          "Imagine you achieve everything you're currently working toward. The project succeeds. The career advances. The number goes up. The recognition arrives. But there is a condition: nobody knows. No one sees. No one is impressed. No one's opinion of you changes. The accomplishment is real, but invisible.\n\nHow much of it would you still want?\n\nThis is not a gotcha. External validation is human and legitimate. But the gap between 'what I'd pursue if nobody could see' and 'what I actually pursue' reveals the proportion of your ambition that's about the work versus the proportion that's about the witness.\n\nSome people discover the gap is small. That's clarifying. Some people discover it's enormous. That's clarifying too — but harder to sit with.",
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
          "John D. Rockefeller, when asked 'How much money is enough?', reportedly answered: 'Just a little bit more.' It's told as a joke about greed, but it's really a diagnosis of a certain relationship with ambition — one where the goal posts are always moving because the goal was never really about the money.\n\nThe inability to say 'enough' is not about appetite. It's about what 'enough' would require you to do: stop. And stopping means sitting with yourself, unadorned by progress, without the forward motion that keeps the deeper questions at bay.\n\n'Enough' is not a number or an achievement. It's a relationship with yourself — specifically, a relationship where you can tolerate who you are without the next accomplishment as proof of your value.\n\nDo you have that relationship? Could you describe what 'enough' looks like for you — not as a platitude, but as a specific, livable reality?",
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
          "What if the highest form of ambition is not more, but clearer? Not achieving harder, but knowing precisely why you're doing what you're doing — and being willing to stop when the reason no longer holds?\n\nThis week mapped the terrain of your striving: the scoreboard, the hunger beneath the ambition, the discipline that doubles as defense, the audience in your head, the thing you're running from, and the word 'enough' that you may not be able to define.\n\nThe point was not to kill ambition. Ambition that's examined is more powerful than ambition that's compulsive. A person who strives because they've chosen to — knowing the cost, seeing the pattern, aware of what they're not running from — builds differently than a person being chased by their own inadequacy.\n\nWhat remains of your ambition when you subtract the fear? That remainder — whatever is left — is the ambition worth keeping.",
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
          "Notice something strange: the moments that feel most meaningful in your life are almost never the ones you planned. The conversation that changed how you saw yourself. The afternoon that felt luminous for no particular reason. The failure that rearranged your priorities.\n\nMeaning arrives sideways. It rarely shows up in the moments you engineered to be significant — the carefully staged milestone, the achievement you spent years pursuing. Those often feel hollow at the center, while some unremarkable Tuesday carries a weight you can't explain.\n\nWhat does this suggest about where meaning actually lives?",
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
          "Here is a paradox that defines modern life: the more productive you are, the less meaningful your life may feel. And the moments of deepest meaning are often, by any productivity metric, a waste of time.\n\nSitting with a dying parent — unproductive. Watching your child discover something obvious — inefficient. Staring out a window while a half-formed thought crystallizes — indefensible on a timesheet.\n\nProductivity gives you the feeling of purpose without requiring the vulnerability of actual meaning. It's measurable, defensible, and it keeps the harder question at bay: if you stopped producing, what would remain?\n\nMost people have substituted purpose for meaning without realizing they made a trade.",
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
          "What if your ability to make meaning out of suffering is not wisdom but a defense mechanism?\n\nHumans are extraordinary meaning-making machines. Give us tragedy, and we'll find the lesson. Give us failure, and we'll find the growth. Give us heartbreak, and we'll call it necessary. This capacity is genuinely remarkable — and sometimes genuinely dishonest.\n\nNot everything that hurts you made you stronger. Not every loss contained a gift. Some suffering was just suffering. Some pain didn't teach you anything you couldn't have learned more gently. The story 'everything happens for a reason' is sometimes courage and sometimes a refusal to grieve.\n\nWhen does meaning-making become a way of refusing to feel what actually happened?",
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
          "Nietzsche and Tolstoy represent two poles of meaning that most people oscillate between without naming them.\n\nNietzsche's meaning is vitality: the surging, creative force of life itself. Meaning as intensity, as engagement, as saying yes to existence even when it's painful. The point is not to justify your life but to feel it fully.\n\nTolstoy's meaning is significance: the conviction that life connects to something larger — a moral order, a purpose, a truth that outlasts your death. Late in life, surrounded by wealth and fame, he was suicidal because none of it felt significant in the way he needed.\n\nOne says: meaning is the fire in your blood. The other says: meaning is the story that makes the fire worthwhile.\n\nWhich kind of meaning are you actually hungry for? Are you sure?",
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
          "Why is it so hard to say what matters to you without sounding naive, pretentious, or sentimental?\n\nModern culture has made earnestness embarrassing. Irony is safe. Cynicism is sophisticated. But try to say, with a straight face, what you actually live for — and watch how quickly you qualify, hedge, or retreat into humor.\n\nThis is not a small problem. If you cannot articulate what gives your life meaning, you cannot protect it. You cannot share it. You cannot build on it. The inability to speak directly about meaning is not humility — it's a kind of cowardice that lets the important things remain vague enough to ignore.\n\nSay it plainly. What do you live for? No irony. No hedging.",
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
          "You've spent a week looking at meaning from every angle: where it actually lives, how productivity substitutes for it, when meaning-making becomes dishonest, the difference between vitality and significance, the test of mortality, and the difficulty of saying it plainly.\n\nHere is what sits underneath all of it: meaning is not something you find once and possess. It is not a destination. It is a practice — one that requires showing up without guarantees, over and over, in the face of uncertainty.\n\nThe meaningful life is not the one that was justified in retrospect. It's the one that was lived with enough honesty and presence that justification became unnecessary.\n\nYou cannot narrate your way to meaning. You have to risk it.",
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
          "Walk into any room and within seconds you're calculating. Not consciously — automatically. Who has status here? Who defers to whom? Where do I rank? Who is performing confidence and who actually has it?\n\nThese calculations happen faster than thought. You adjust your posture, your vocabulary, your level of eye contact based on where you place yourself in the hierarchy — before you've said a word.\n\nPeople who say 'I don't care about status' are usually people whose status is secure enough that they don't need to fight for it. The denial is itself a status move.\n\nThe game is always running. The only question is whether you see it or play it blind.",
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
          "Every person trades in a specific status currency. Some trade in intelligence — they need to be the smartest person in the room. Some trade in taste — they need their preferences to signal refinement. Some trade in moral virtue — they need to be seen as good. Some trade in authenticity — they need to be seen as real.\n\nEach currency has its own marketplace, its own inflation, its own counterfeit. The intellectual snob and the moral crusader are playing the same game with different chips.\n\nWhat's yours? Not the one you'd like to claim. The one that, when threatened, makes you defensive, competitive, or quietly furious.\n\nBecause your status currency is not just what you value. It's where you're fragile.",
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
          "The person who reads important books and makes sure you know about it. The person who donates to charity and makes sure it's visible. The person who rejects materialism — conspicuously. The person who performs not-caring as its own form of signaling.\n\nHere is the paradox: you cannot escape signaling. Every choice you make — what you wear, what you read, what you reject, how you speak — signals something to the social world. Even the deliberate refusal to signal is a signal. The minimalist signals taste. The dropout signals independence. The person who says 'I don't care what people think' is signaling that they don't care what people think.\n\nSo the question isn't whether you signal. It's whether any of your substance exists independent of its signal value. Is there something you do, believe, or value that you would maintain even if no one ever knew about it?\n\nBe careful with your answer. Most people are wrong about this.",
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
          "In the 1960s, psychologist Philip Zimbardo designed the Stanford Prison Experiment. Guards became cruel. Prisoners became submissive. Not because they were cruel or submissive people — but because the structure demanded it. The role shaped the person more than the person shaped the role.\n\nThis dynamic doesn't require a laboratory. It happens in every institution you belong to. Your company has incentives that quietly reshape your values. Your social circle has norms that constrain what you're willing to say. Your political tribe has positions you adopted not through reflection but through osmosis.\n\nInstitutional capture is subtle. You don't feel the walls closing in. You feel yourself 'growing' — in the exact direction the institution needs you to grow. The company man doesn't feel captured. He feels aligned. The partisan doesn't feel constrained. She feels principled.\n\nHow much of what you believe is genuinely yours, and how much is the shape of the container you've been poured into?",
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
          "What if the line between influence and manipulation is not about technique but about what you're willing to let the other person see?\n\nInfluence operates in the open: here is what I want, here is why, here is what I'm asking. Manipulation operates through concealment: I'm shaping your behavior while hiding my intent.\n\nBut most real-world influence lives in the uncomfortable middle. The leader who 'inspires' is often using emotional leverage. The friend who 'suggests' is often applying social pressure. The partner who 'supports your decision' often has a preferred outcome they've communicated through a thousand micro-signals.\n\nYou do this too. The question is whether you can name it — to yourself and to others.\n\nHow do you influence people? Describe it as if an observer were narrating your technique.",
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
          "Imagine you could see, clearly and completely, every system that shapes your behavior — every status game, every institutional pressure, every social norm, every inherited belief operating beneath your conscious awareness.\n\nWould this vision liberate you or paralyze you?\n\nThis week mapped the territory: the status games you play, the currency you trade in, the signals you can't escape, the institutions that have captured you, the complicity you maintain, and the influence you wield without full transparency.\n\nThe point was never to escape these systems. You can't. You're a social animal embedded in structures. The point was to see them — because seeing them is the only form of freedom available. Not freedom from the game, but freedom within it. The difference between a person shaped by forces they can't see and a person shaped by forces they've chosen to accept.\n\nWhat will you accept? What will you resist? And can you tell the difference between the two?",
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
          "You have a set of beliefs you've never seriously examined. Not because you're lazy — because examining them would be too expensive.\n\nThese aren't beliefs about obscure topics. They're beliefs about yourself, your relationships, your work, your worth. They sit so deep that they feel less like beliefs and more like reality itself. 'I'm a good person.' 'My relationship is strong.' 'I chose this career for the right reasons.' 'I know who I am.'\n\nThe mark of an unexamined belief isn't that you hold it confidently. It's that you've never imagined what it would cost to lose it. The belief you can't afford to question is the one most likely to be wrong — because you've been protecting it from evidence rather than testing it against evidence.",
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
          "Motivated reasoning is not a flaw in otherwise rational thinking. It is the engine of most thinking. You don't gather evidence and then form a conclusion. You form a conclusion and then gather evidence — and the gathering feels like reasoning.\n\nThe paradox: the smarter you are, the better you are at motivated reasoning. Intelligence doesn't protect against self-deception — it supercharges it. A sharper mind finds sharper rationalizations. The most articulate defense of a position is often the most elaborate avoidance of its weaknesses.\n\nThis means your most sophisticated, well-reasoned beliefs might be the most motivated. The ones you can argue most fluently might be the ones you've invested the most in defending rather than testing.\n\nWhat belief do you argue most fluently? How long has it been since you genuinely tried to defeat it?",
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
          "Nietzsche asked a question that still cuts: what if untruth is a condition of life?\n\nThe belief that you matter. The belief that your work has value. The belief that your partner chose you for the right reasons. The belief that the future will be better. These may or may not be 'true' in any verifiable sense — but without them, action becomes nearly impossible.\n\nTerror Management Theory in psychology suggests that much of human culture — art, religion, legacy, ambition — is an elaborate defense against the awareness of death. Strip away the fiction, and you don't get a cleaner truth. You get paralysis.\n\nIbsen called them 'life-lies' — the fictions people need to function. Remove them and the person doesn't become more honest. They collapse.\n\nSo here is the complication: some lies are load-bearing. The question isn't whether to be fully honest. It's which fictions you can afford to examine and which ones, if removed, would bring down the structure.",
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
          "What if you inverted the origin story of your beliefs? Instead of 'I believe X because I examined the evidence,' try: 'I was exposed to X at a formative age, in a context that rewarded believing it, surrounded by people who reinforced it, and I've never been in a situation where disbelieving it was socially or emotionally safe.'\n\nThis doesn't make the belief wrong. But it changes the question from 'Is this true?' to 'Would I believe this if I'd been born somewhere else, to different parents, in a different era?'\n\nMost people's core convictions — about politics, morality, religion, human nature, what constitutes a good life — correlate more strongly with geography and upbringing than with evidence. You believe what your context taught you to believe. The question is whether you've ever genuinely tested those inherited beliefs or merely defended them with adult sophistication.\n\nWhich of your strongest convictions would survive a change of context?",
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
          "This week — and this entire journey — has been about one thing: the distance between the story you tell and the life you live.\n\nYou've examined human nature, judgment, relationships, identity, conflict, communication, attention, meaning, power, and now truth itself. Each arc asked you to close the gap between narrative and reality. Each one surfaced a different form of the same question: what are you willing to see?\n\nHere is what remains after everything has been examined: you are a person who contains contradictions, maintains necessary fictions, plays status games, avoids certain truths, and has mixed motives for almost everything — including the decision to do this work of self-examination.\n\nThat is not a confession. It is a description of being human.\n\nThe question was never whether you could become perfectly honest, perfectly self-aware, perfectly consistent. It was whether you could bear to see yourself clearly and keep going — not despite the contradictions, but with them.\n\nCan you?",
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
