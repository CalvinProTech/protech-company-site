// ---------------------------------------------------------------------------
// Spam detection utilities for form submissions
// ---------------------------------------------------------------------------

interface SpamCheckInput {
  /** Honeypot field — should be empty for real users */
  honeypot?: string;
  /** Timestamp (ms) when the form was rendered */
  formLoadedAt?: number;
  /** First name from the form */
  firstName?: string;
  /** Last name from the form */
  lastName?: string;
  /** Full name (for callback forms) */
  name?: string;
}

/**
 * Returns true if the submission looks like spam.
 * When spam is detected, the API route should return a fake 200 so bots
 * don't know they were blocked.
 */
export function isSpam(input: SpamCheckInput): boolean {
  // 1. Honeypot filled = definitely a bot
  if (input.honeypot) {
    console.log('[spam] Honeypot triggered');
    return true;
  }

  // 2. Form submitted too quickly (< 3 seconds)
  if (input.formLoadedAt) {
    const elapsed = Date.now() - input.formLoadedAt;
    if (elapsed < 3_000) {
      console.log('[spam] Submitted too fast:', elapsed, 'ms');
      return true;
    }
  }

  // 3. Name gibberish detection
  const names = [input.firstName, input.lastName, input.name].filter(
    Boolean,
  ) as string[];

  for (const name of names) {
    if (isGibberish(name)) {
      console.log('[spam] Gibberish name detected:', name);
      return true;
    }
  }

  return false;
}

/**
 * Checks if a string looks like random gibberish rather than a real name.
 */
function isGibberish(text: string): boolean {
  const cleaned = text.replace(/[^a-zA-Z]/g, '');

  // Short names are fine
  if (cleaned.length <= 2) return false;

  // Very long single "word" (real names are rarely >20 alpha chars)
  if (cleaned.length > 20) return true;

  const lower = cleaned.toLowerCase();

  // Vowel ratio — real names typically have 15-60% vowels
  // Threshold 0.10 avoids false positives on names like "Schwartz" (0.125)
  const vowelCount = (lower.match(/[aeiou]/g) || []).length;
  const vowelRatio = vowelCount / lower.length;
  if (vowelRatio < 0.1) return true;

  // 5+ consecutive consonants (rare in real names)
  // Exclude 'y' since it acts as a vowel in names like Krzysztof
  if (/[bcdfghjklmnpqrstvwxz]{5,}/.test(lower)) return true;

  // Excessive case changes (real names are Title Case, not rAnDoM)
  let caseChanges = 0;
  for (let i = 1; i < cleaned.length; i++) {
    const prevUpper = cleaned[i - 1] === cleaned[i - 1].toUpperCase();
    const currUpper = cleaned[i] === cleaned[i].toUpperCase();
    if (prevUpper !== currUpper) caseChanges++;
  }
  if (caseChanges > 5) return true;

  return false;
}
