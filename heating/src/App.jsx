import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Furnace from './components/Furnace';
import HeatPump from './components/HeatPump';
import Cooling from './components/Cooling';
import TanklessWaterHeater from './components/TanklessWaterHeater';
import Humidifier from './components/Humidifier';
import Thermostat from './components/Thermostat';
import HotWaterTank from './components/HotWaterTank';
import GasLine from './components/GasLine';
import AirHandler from './components/AirHandler';
import Hrv from './components/Hrv';
import Erv from './components/Erv';
import CombiBoiler from './components/CombiBoiler';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import Services from './components/Services';
import Reviews from './components/Reviews';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

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
    </BrowserRouter>
  );
}

export default App;
