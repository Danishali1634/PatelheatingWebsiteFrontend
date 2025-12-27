import React from 'react';
import { FaClock, FaMapMarkedAlt, FaUserShield } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <section className="section-padding why-choose-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2>Why Homeowners Choose PATEL</h2>
                    <div className="divider-center bg-red"></div>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <FaClock className="feature-icon" />
                        <h3>Fast Service</h3>
                        <p>We dispatch our expert technicians without delay. Available for prompt, reliable, and hassle-free service every time you call.</p>
                    </div>
                    <div className="feature-card">
                        <FaMapMarkedAlt className="feature-icon" />
                        <h3>Wide Service Area</h3>
                        <p>Serving Brampton, Mississauga, Burlington, Oakville, Milton, Bolton, Georgetown and across the GTA.</p>
                    </div>
                    <div className="feature-card">
                        <FaUserShield className="feature-icon" />
                        <h3>Expert Team</h3>
                        <p>Highly skilled HVAC specialists dedicated to delivering reliable solutions. Licensed, Bonded & Insured for your peace of mind.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
