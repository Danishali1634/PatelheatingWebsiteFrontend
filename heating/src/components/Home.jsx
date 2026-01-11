import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import Blogs from './Blogs';

const Home = () => {
    return (
        <>
            <title>Patel Heating & Air Conditioning - Home</title>
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <div style={{ padding: "80px 0", background: "#f9fafb" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "50px" }}>
                        <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#ff7216", marginBottom: "15px" }}>Latest from our Blog</h2>
                        <p style={{ fontSize: "18px", color: "#6b7280" }}>Stay informed with the latest HVAC tips and company news.</p>
                    </div>
                </div>
                <Blogs limit={3} isHome={true} />
            </div>
        </>
    );
};

export default Home;
