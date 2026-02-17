// ---------------------------------------------------------------------------
// In-memory sliding-window rate limiter (IP-based)
// ---------------------------------------------------------------------------

interface WindowEntry {
  timestamps: number[];
}

const store = new Map<string, WindowEntry>();

// Clean stale entries every 5 minutes
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;

let lastCleanup = Date.now();

function cleanup(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  for (const [key, entry] of store) {
    entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs);
    if (entry.timestamps.length === 0) {
      store.delete(key);
    }
  }
}

export function rateLimit(
  ip: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): { allowed: boolean; remaining: number } {
  const now = Date.now();

  cleanup(windowMs);

  const entry = store.get(ip) ?? { timestamps: [] };

  // Drop timestamps outside the current window
  entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs);

  if (entry.timestamps.length >= limit) {
    return { allowed: false, remaining: 0 };
  }

  entry.timestamps.push(now);
  store.set(ip, entry);

  return { allowed: true, remaining: limit - entry.timestamps.length };
}
