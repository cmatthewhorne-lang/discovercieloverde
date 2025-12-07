// lib/lineageEngine.ts

export type GuideArchetype =
  | "soft_oracle"
  | "tough_mentor"
  | "forest_spirit"
  | "lineage_sage"
  | "future_self";

export type TruthLine = {
  id: string;
  archetype: GuideArchetype;
  text: (mother: string, father: string) => string;
  tags?: string[];
};

// capitalize and clean
export function cap(s: string) {
  if (!s) return "";
  const trimmed = s.trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

// detect jokey / dismissive / low-effort intentions
function isPlayfulOrDismissive(intention: string): boolean {
  const lower = intention.toLowerCase().trim();
  if (!lower) return false;

  const jokeWords = [
    "fart",
    "poop",
    "pee",
    "lol",
    "lmao",
    "rofl",
    "idk",
    "i dont know",
    "i don't know",
    "dont care",
    "don't care",
    "nothing",
    "whatever",
    "test",
    "asdf",
    "qwerty",
  ];

  if (jokeWords.some((w) => lower.includes(w))) {
    return true;
  }

  // very short and not meaningful
  if (lower.length < 6) {
    return true;
  }

  return false;
}

// simple deterministic hash for seeded "randomness"
function simpleHash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function pickWithSeed<T>(arr: T[], seed: string): T {
  if (arr.length === 0) {
    throw new Error("Cannot pick from empty array");
  }
  const h = simpleHash(seed);
  const index = h % arr.length;
  return arr[index];
}

/**
 * Library of guide lines.
 * You can add many more entries following the same shape.
 */
export const TRUTH_LINES: TruthLine[] = [
  // LINEAGE SAGE · time / ancestry
  {
    id: "time-field-1",
    archetype: "lineage_sage",
    tags: ["time", "past_present_future"],
    text: (mother, father) =>
      `The line between ${cap(mother)} and ${cap(
        father
      )} does not sit behind you. It moves with you in every step you take.`,
  },
  {
    id: "time-field-2",
    archetype: "lineage_sage",
    tags: ["time", "echo"],
    text: (mother, father) =>
      `Every choice you make sends a quiet signal backward to ${cap(
        mother
      )} and ${cap(
        father
      )}, and forward to those who will carry your name.`,
  },
  {
    id: "lineage-grief-1",
    archetype: "lineage_sage",
    tags: ["grief"],
    text: () =>
      `Some of what you feel today belongs to stories that never had a witness. You are that witness now.`,
  },

  // SOFT ORACLE · gentle, mystical
  {
    id: "soft-1",
    archetype: "soft_oracle",
    tags: ["tender"],
    text: (mother, father) =>
      `Between the names ${cap(mother)} and ${cap(
        father
      )}, a quiet gravity forms. Something in your line wishes to be witnessed, not corrected, simply seen.`,
  },
  {
    id: "soft-2",
    archetype: "soft_oracle",
    tags: ["time", "calm"],
    text: () =>
      `You live in the past, present, and future at once. Healing moves across all three whenever you choose to notice.`,
  },

  // TOUGH MENTOR · loving but firm
  {
    id: "tough-1",
    archetype: "tough_mentor",
    tags: ["identity", "choice"],
    text: (mother, father) =>
      `You carry the line of ${cap(mother)} and ${cap(
        father
      )}. The question is not who they were. The question is who you will choose to become now.`,
  },
  {
    id: "tough-2",
    archetype: "tough_mentor",
    tags: ["discipline"],
    text: () =>
      `You ask who you are. The harder question is who you are becoming. Your lineage gave you raw material. You decide the form.`,
  },
  {
    id: "tough-3",
    archetype: "tough_mentor",
    tags: ["accountability"],
    text: () =>
      `You cannot heal a line you refuse to study. Look closer at what repeats in your story and ask why.`,
  },
  {
    id: "tough-playful-1",
    archetype: "tough_mentor",
    tags: ["playful", "deflection"],
    text: () =>
      `You can joke if you want. That is allowed here. But if you ever decide to tell the truth about what hurts or what you want, this space will be ready for you.`,
  },
  {
    id: "tough-playful-2",
    archetype: "tough_mentor",
    tags: ["playful", "honesty"],
    text: () =>
      `Sometimes the easiest way to avoid a real question is to make a joke. If you feel that happening, notice it. You are allowed to bring something real here whenever you choose.`,
  },

  // FOREST SPIRIT · Cielo Verde / land
  {
    id: "forest-1",
    archetype: "forest_spirit",
    tags: ["cielo_verde", "land"],
    text: (mother, father) =>
      `When you whisper ${cap(mother)} and ${cap(
        father
      )} beneath living trees, the forest does not judge your story. It simply holds it.`,
  },
  {
    id: "forest-2",
    archetype: "forest_spirit",
    tags: ["nature", "stillness"],
    text: () =>
      `The land already understands your lineage. The real question is whether you are willing to sit still long enough to listen.`,
  },

  // FUTURE SELF · who you want to be
  {
    id: "future-1",
    archetype: "future_self",
    tags: ["future", "legacy"],
    text: () =>
      `Your future self is already watching this moment. One day they will call it the turning point.`,
  },
  {
    id: "future-2",
    archetype: "future_self",
    tags: ["descendants"],
    text: () =>
      `You are becoming the ancestor someone else will look back to. What do you want them to inherit from you.`,
  },
];

/**
 * Decide which guide archetype should speak based on intention.
 */
export function chooseArchetype(intention: string): GuideArchetype {
  const lower = intention.toLowerCase();

  if (isPlayfulOrDismissive(lower)) {
    // gentle call-in, not scolding
    return "tough_mentor";
  }

  if (lower.match(/grief|death|loss|hurt|pain|mourning|trauma/)) {
    return "lineage_sage";
  }

  if (lower.match(/stuck|lost|numb|identity|who am i|purpose|meaning/)) {
    return "tough_mentor";
  }

  if (lower.match(/forest|land|rain|tree|bamboo|costa rica|cielo verde/)) {
    return "forest_spirit";
  }

  if (lower.match(/future|child|children|descendant|legacy|next generation/)) {
    return "future_self";
  }

  return "soft_oracle";
}

/**
 * Summarize what the intention seems to be about,
 * for people who do not know how to articulate it.
 */
export function summarizeIntention(intention: string): string {
  const trimmed = intention.trim();
  if (!trimmed) {
    return "You are here without perfect words, but something in you knows it is time to listen.";
  }

  if (isPlayfulOrDismissive(trimmed)) {
    return "Right now you are playing it off with a joke or a light touch. Underneath that, there may be something you do not want to name yet, and that is okay.";
  }

  const lower = trimmed.toLowerCase();

  if (lower.match(/grief|death|loss|mourning|condolence|bereav/)) {
    return "You want to understand and soften the grief that lives in your line.";
  }

  if (lower.match(/trauma|hurt|wound|cycle|pattern|break/)) {
    return "You want to break a pattern of hurt that has been repeating for a long time.";
  }

  if (lower.match(/identity|who am i|myself|self|belong/)) {
    return "You want to see who you truly are beneath family expectations and old roles.";
  }

  if (lower.match(/forgive|forgiveness|resent|anger|blame/)) {
    return "You want some kind of release around anger or resentment in your family story.";
  }

  if (lower.match(/future|child|children|descendant|legacy|next generation/)) {
    return "You want to offer something cleaner and kinder to the people who come after you.";
  }

  if (lower.match(/forest|land|earth|cielo verde|nature/)) {
    return "You want to heal in relationship with land and living places, not just ideas.";
  }

  // fallback: gentle reflection using their own words, if not crude
  if (trimmed.length > 140) {
    const short = trimmed.slice(0, 140).trim();
    return `You are circling something that feels important: “${short}...”`;
  }

  return `You are trying to name something real: “${trimmed}”. That is enough to begin.`;
}

/**
 * Main function to call when you want a "truth" line for the user.
 */
export function generateTruthLine(
  motherName: string,
  fatherName: string,
  intention: string
): string {
  const archetype = chooseArchetype(intention);

  const candidates = TRUTH_LINES.filter(
    (line) => line.archetype === archetype
  );

  const seed = `${cap(motherName)}|${cap(
    fatherName
  )}|${archetype}|${intention.slice(0, 32)}`;

  const chosen = pickWithSeed(
    candidates.length > 0 ? candidates : TRUTH_LINES,
    seed
  );

  return chosen.text(motherName, fatherName);
}
