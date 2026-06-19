import { getLocationsByState, getAllStates, getStateProfile } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllStates().map((s) => ({ state: s.stateSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const profile = getStateProfile(state);
  if (!profile) return {};
  return createPageMetadata({
    title: `Roofing Services in ${profile.state}`,
    description: `ProTech Roofing serves ${profile.state} with expert roof replacement, repair, and storm-damage restoration. Licensed & insured. Free estimates statewide.`,
    path: `/locations/${state}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const profile = getStateProfile(state);
  const cities = getLocationsByState(state);
  if (!profile || cities.length === 0) notFound();
  return (
    <StatePageTemplate state={profile.state} stateSlug={state} cities={cities} />
  );
}
