import type { MetadataRoute } from 'next';

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.protechroof.net';

// AI search + answer engine crawlers — explicitly allowed so ProTech is
// visible when users ask ChatGPT, Claude, Perplexity, Gemini, Copilot, etc.
// for roofing recommendations or related questions.
const AI_CRAWLERS = [
  // OpenAI
  'OAI-SearchBot',     // live search powering ChatGPT search-the-web
  'ChatGPT-User',      // user-clicked citation links from ChatGPT
  'GPTBot',            // training crawler
  // Anthropic
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google AI (Gemini / Bard / AI Overviews)
  'Google-Extended',
  // Apple Intelligence
  'Applebot',
  'Applebot-Extended',
  // Microsoft Copilot uses bingbot
  // Common Crawl (feeds many open-source AI training datasets)
  'CCBot',
  // Meta AI
  'Meta-ExternalAgent',
  'meta-externalagent',
  'FacebookBot',
  // DuckDuckGo Assist
  'DuckAssistBot',
  // Cohere
  'cohere-ai',
  // Mistral
  'MistralAI-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule for all crawlers.
      // NOTE: /_next/ is intentionally NOT disallowed — Google needs to fetch
      // the chunked JS/CSS to render client-rendered pages. Blocking /_next/
      // produces ~6,000 "disallowed internal resource" warnings in Semrush
      // and silently degrades indexing because Googlebot can't see hydrated
      // content. Block only routes that should never be indexed.
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/portal/', '/q/', '/j/', '/s/'],
      },
      // AI search crawlers — explicit allow (some default-restrict otherwise)
      ...AI_CRAWLERS.map((agent) => ({
        userAgent: agent,
        allow: '/',
      })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
