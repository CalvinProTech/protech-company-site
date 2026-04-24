import { SITE_CONFIG } from '@/lib/constants';
import JsonLd from './JsonLd';

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  totalTime?: string;
  estimatedCost?: { currency: string; value: number | string };
  steps: HowToStep[];
  image?: string;
}

/**
 * Schema.org HowTo JSON-LD. AI search assistants strongly prefer HowTo
 * schema for step-by-step queries ("how to file an insurance claim",
 * "spring roof maintenance steps") and frequently quote individual steps
 * with attribution.
 */
export default function HowToSchema({
  name,
  description,
  totalTime,
  estimatedCost,
  steps,
  image,
}: HowToSchemaProps) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: s.url } : {}),
      ...(s.image ? { image: s.image } : {}),
    })),
  };
  if (totalTime) data.totalTime = totalTime;
  if (estimatedCost) {
    data.estimatedCost = {
      '@type': 'MonetaryAmount',
      currency: estimatedCost.currency,
      value: String(estimatedCost.value),
    };
  }
  if (image) {
    data.image = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`;
  }
  return <JsonLd data={data} />;
}
