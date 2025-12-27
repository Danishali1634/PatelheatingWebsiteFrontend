import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<Placeholder title="About Us" />} />
          <Route path="services" element={<Placeholder title="Our Services" />} />
          <Route path="services/*" element={<Placeholder title="Service Detail" />} />
          <Route path="blog" element={<Placeholder title="Our Blog" />} />
          <Route path="contact" element={<Placeholder title="Contact Us" />} />
          <Route path="*" element={<Placeholder title="404 Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
