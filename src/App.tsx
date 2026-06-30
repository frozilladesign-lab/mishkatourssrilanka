import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Tours } from './pages/Tours';
import { TourDetails } from './pages/TourDetails';
import { Destinations } from './pages/Destinations';
import { DestinationDetails } from './pages/DestinationDetails';
import { Experiences } from './pages/Experiences';
import { About } from './pages/About';
import { TravelGuide } from './pages/TravelGuide';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
import { TripPlanner } from './pages/TripPlanner';
import { TourCategory } from './pages/TourCategory';
import { FAQ } from './pages/FAQ';
import { VisaRequirements } from './pages/VisaRequirements';
import { Transport } from './pages/Transport';
import { CustomTourBuilder } from './pages/CustomTourBuilder';
import { Hotels } from './pages/Hotels';
import { Offers } from './pages/Offers';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { PersonalizationProvider } from './components/personalization/PersonalizationContext';
import { PreferencesProvider } from './components/personalization/PreferencesContext';
import { SavedJourneys } from './pages/SavedJourneys';
import { CompareTours } from './pages/CompareTours';
export function App() {
  return (
    <PreferencesProvider>
    <PersonalizationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tours" element={<Tours />} />
            <Route
              path="tour-collections/:category"
              element={<TourCategory />} />
            
            <Route path="tours/:slug" element={<TourDetails />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="destinations/:slug" element={<DestinationDetails />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="travel-guide" element={<TravelGuide />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="trip-planner" element={<TripPlanner />} />
            <Route path="custom-tour" element={<CustomTourBuilder />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="offers" element={<Offers />} />
            <Route path="transport" element={<Transport />} />
            <Route path="visa-requirements" element={<VisaRequirements />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="saved" element={<SavedJourneys />} />
            <Route path="compare" element={<CompareTours />} />
            <Route path="*" element={<PlaceholderPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersonalizationProvider>
    </PreferencesProvider>);

}