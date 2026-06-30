import React from 'react';
import { CinematicHero } from '../components/home/CinematicHero';
import { FeaturedJourneys } from '../components/home/FeaturedJourneys';
import { MoodExplorer } from '../components/home/MoodExplorer';
import { SignatureExperiences } from '../components/home/SignatureExperiences';
import { CuratedCollection } from '../components/home/CuratedCollection';
import { TravellerStories } from '../components/home/TravellerStories';
import { LuxuryStays } from '../components/home/LuxuryStays';
import { JourneyBuilderTeaser } from '../components/home/JourneyBuilderTeaser';
import { SeasonalInspirations } from '../components/home/SeasonalInspirations';
import { EditorialJournal } from '../components/home/EditorialJournal';
import { ClosingCTA } from '../components/home/ClosingCTA';
export function Home() {
  return (
    <div className="flex flex-col w-full">
      <CinematicHero />
      <MoodExplorer />
      <FeaturedJourneys />
      <SignatureExperiences />
      <CuratedCollection />
      <SeasonalInspirations />
      <LuxuryStays />
      <TravellerStories />
      <JourneyBuilderTeaser />
      <EditorialJournal />
      <ClosingCTA />
    </div>);

}