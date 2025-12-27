import React from 'react';
import './About.css';
import hvacServiceman from '../assets/hvacServiceman.png'

const About = () => (
    <section className="section-padding about-section">
        <div className="container">
            <div className="row about-row">
                <div className="col-text about-content">
                    <h2 className="section-title">About PATEL Heating & <span className="text-red">Air-Conditioning</span></h2>
                    <div className="divider-left"></div>
                    <p>
                        At PATEL Heating & Air-Conditioning, we specialize in residential HVAC installation, repair, and maintenance.
                        Our goal is to bring complete comfort, safety, and efficiency to your home. Whether you need a new furnace installation,
                        air conditioner repair, or full HVAC system replacement, our expert technicians are here to help.
                    </p>
                    <p>
                        Whether you need a furnace repair in Brampton, air conditioner installation in Mississauga, or emergency HVAC service in Milton,
                        our skilled technicians deliver fast, reliable, and affordable solutions. We use top-quality HVAC equipment and trusted brands
                        to ensure long-lasting comfort and energy efficiency for your home.
                    </p>
                    <p className="highlight-text">
                        Your comfort is our priority.
                    </p>
                    <a href="/about-us" className="btn btn-primary mt-4">More About Us</a>
                </div>
                <div className="col-image about-image-wrapper">
                    <img
                        // src="https://images.unsplash.com/photo-1621905251189-08b9bfd8f520?q=80&w=2000&auto=format&fit=crop"
                        src={hvacServiceman}
                        alt="HVAC Technician"
                        className="about-image" />
                    <div className="exp-badge">
                        <span className="years">10+</span>
                        <span className="text">Years of Experience</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
