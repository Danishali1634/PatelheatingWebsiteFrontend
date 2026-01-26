import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

// Lazy load components for performance
const Home = lazy(() => import('./components/Home'));
const Furnace = lazy(() => import('./components/Furnace'));
const HeatPump = lazy(() => import('./components/HeatPump'));
const Cooling = lazy(() => import('./components/Cooling'));
const TanklessWaterHeater = lazy(() => import('./components/TanklessWaterHeater'));
const Humidifier = lazy(() => import('./components/Humidifier'));
const Thermostat = lazy(() => import('./components/Thermostat'));
const HotWaterTank = lazy(() => import('./components/HotWaterTank'));
const GasLine = lazy(() => import('./components/GasLine'));
const AirHandler = lazy(() => import('./components/AirHandler'));
const Hrv = lazy(() => import('./components/Hrv'));
const Erv = lazy(() => import('./components/Erv'));
const CombiBoiler = lazy(() => import('./components/CombiBoiler'));
const Contact = lazy(() => import('./components/Contact'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Blogs = lazy(() => import('./components/Blogs'));
const BlogDetail = lazy(() => import('./components/BlogDetail'));
const Services = lazy(() => import('./components/Services'));
const Reviews = lazy(() => import('./components/Reviews'));

const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#ff7216', fontSize: '1.2rem', fontWeight: 700 }}>
    Loading...
  </div>
);

// Placeholder components for routes not yet implemented but linked in Header
const Placeholder = ({ title }) => (
  <div className="container section-padding text-center">
    <h1>{title}</h1>
    <p>This page is under construction as part of the redesign.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="services/heating" element={<Furnace />} />
            <Route path="services/combi-boiler" element={<CombiBoiler />} />
            <Route path="services/heat-pump" element={<HeatPump />} />
            <Route path="services/cooling" element={<Cooling />} />
            <Route path="services/tankless-water-heater" element={<TanklessWaterHeater />} />
            <Route path="services/humidifier" element={<Humidifier />} />
            <Route path="services/thermostat" element={<Thermostat />} />
            <Route path="services/hot-water-tank" element={<HotWaterTank />} />
            <Route path="services/gas-line" element={<GasLine />} />
            <Route path="services/air-handler" element={<AirHandler />} />
            <Route path="services/hrv" element={<Hrv />} />
            <Route path="services/erv" element={<Erv />} />
            <Route path="contact" element={<Contact />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="blog/:id" element={<BlogDetail />} />
            <Route path="*" element={<Placeholder title="404 Not Found" />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
