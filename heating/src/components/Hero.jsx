
import WorkDuring from '../assets/workDuring.mp4'
import heroNew from '../assets/heroSectionNew.webp'
import heroMobile from '../assets/herotwo.png'
import React from 'react';
import { Phone } from 'lucide-react';

const PremiumHero = () => {
    const slide = {
        title: 'Bringing Comfort to Your Home',
        image: heroNew,
        mobileImage: heroMobile
    };

    return (
        <div className="premium-hvac-wrapper">
            {/* ================= HERO ================= */}
            <div className="hero-container">
                <div
                    className="hero-slide"
                    style={{
                        '--desktop-bg': `url(${slide.image})`,
                        '--mobile-bg': `url(${slide.mobileImage})`
                    }}
                >
                    <div className="hero-overlay" />
                    <div className="hero-content">
                        <h1 className='hero-main-title'>{slide.title}</h1>
                        <a href="tel:+16479847874" style={{ textDecoration: 'none' }}>
                            <button className="btn-call-hero">
                                <Phone size={20} />
                                Call Us Now
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* ================= CONTENT ================= */}
            <section className="content-wrapper">
                {/* Intro Section */}
                <div className="intro-section">
                    <div className="section-badge">About Us</div>
                    <h2 className="section-title" style={{ color: '#ff7216' }}>Trusted HVAC Experts in the GTA</h2>
                    <p className="section-description">
                        At PATEL Heating & Air Conditioning, we provide reliable,
                        energy-efficient and affordable residential HVAC services designed to
                        keep your home comfortable year-round.
                    </p>
                </div>

                {/* Video Section */}
                <div className="video-section">
                    <div className="video-content">
                        <div className="video-text">
                            <div className="section-badge" style={{ color: 'black' }}>See Us In Action</div>
                            <h2 className="section-title" style={{ color: '#ff7216' }}>Watch How We Work</h2>
                            <p className="section-description">
                                Discover our professional approach to HVAC installation and maintenance.
                                Our certified technicians ensure every job is done right the first time.
                            </p>
                            <ul className="feature-list">
                                <li><span style={{ color: '#ff7216', fontSize: 18 }}>✓</span> Certified & Licensed Professionals</li>
                                <li><span style={{ color: '#ff7216' }}>✓</span> State-of-the-Art Equipment</li>
                                <li><span style={{ color: '#ff7216' }}>✓</span> Quality Workmanship Guaranteed</li>
                                <li><span style={{ color: '#ff7216' }}>✓</span> Clean & Efficient Service</li>
                            </ul>
                        </div>
                        <div className="video-player">
                            <video
                                style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                                autoPlay
                                loop
                                muted
                                src={WorkDuring}
                                title="PATEL Heating & Air Conditioning"
                            />
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="why-choose-section">
                    <div className="section-badge" style={{ color: 'black' }}>Why Choose Us</div>
                    <h2 className="section-title" style={{ color: '#ff7216' }}>Why Homeowners Choose Patel Heating and Air Conditioning</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-number" style={{ color: '#ff7216' }}>01</div>
                            <h3 style={{ color: '#ff7216' }}>Fast & Reliable</h3>
                            <p>Quick response times and efficient service for all your HVAC needs</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-number" style={{ color: '#ff7216' }}>02</div>
                            <h3 style={{ color: '#ff7216' }}>Licensed & Insured</h3>
                            <p>Certified technicians with comprehensive insurance coverage</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-number" style={{ color: '#ff7216' }}>03</div>
                            <h3 style={{ color: '#ff7216' }}>GTA-Wide Service</h3>
                            <p>Serving Brampton, Mississauga, Milton and the entire GTA</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-number" style={{ color: '#ff7216' }}>04</div>
                            <h3 style={{ color: '#ff7216' }}>100% Satisfaction</h3>
                            <p>We guarantee your complete satisfaction with every service</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to Experience Premium HVAC Service?</h2>
                        <p>Your comfort is our priority — today and all year long.</p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn-primary large">
                                Book Service Now
                            </a>
                            <a href="tel:+16479847874" className="btn-outline large">
                                Call Us Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STYLES ================= */}
            <style>{`
                .premium-hvac-wrapper {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                }

                * {
                    box-sizing: border-box;
                }

                /* ========== HERO ========== */
                .hero-container {
                    height: 90vh;
                    min-height: 600px;
                    position: relative;
                    overflow: hidden;
                }

                .hero-slide {
                    height: 100%;
                    background-image: var(--desktop-bg);
                    background-size: cover;
                    background-position: bottom center;
                    background-repeat: no-repeat;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 1.5rem;
                }

                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.45);
                }

                .hero-content {
                    position: relative;
                    max-width: 900px;
                    width: 100%;
                    color: #fff;
                    z-index: 2;
                    text-align: center;
                    padding: 2rem 1.5rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .hero-main-title {
                    font-size: clamp(2.5rem, 7vw, 5rem);
                    margin: 0 0 2rem 0;
                    line-height: 1.1;
                    font-weight: 800;
                    text-shadow: 0 4px 20px rgba(0,0,0,0.5);
                    color: white;
                    letter-spacing: -0.02em;
                }

                .btn-primary {
                    background: linear-gradient(135deg, #ff7216, #ff8c42);
                    color: #fff;
                    padding: 1.1rem 2.5rem;
                    border-radius: 50px;
                    border: none;
                    font-weight: 700;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 8px 25px rgba(255, 114, 22, 0.4);
                    display: inline-block;
                    cursor: pointer;
                    text-decoration: none;
                }

                .btn-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 12px 35px rgba(255, 114, 22, 0.5);
                }

                .btn-outline {
                    border: 2px solid #ff7216;
                    background: transparent;
                    color: #ff7216;
                    padding: 1.1rem 2.5rem;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    display: inline-block;
                    cursor: pointer;
                    text-decoration: none;
                }

                .btn-outline:hover {
                    background: #ff7216;
                    color: #fff;
                    transform: translateY(-3px);
                }

                .btn-call-hero {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    background: #ff7216;
                    color: white;
                    border: none;
                    padding: 1.25rem 3rem;
                    border-radius: 50px;
                    font-size: 1.15rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 30px rgba(255, 114, 22, 0.4);
                    margin: 0;
                }

                .btn-call-hero:hover {
                    background: #e66200;
                    transform: translateY(-3px);
                    box-shadow: 0 15px 40px rgba(255, 114, 22, 0.5);
                }

                .btn-call-hero:active {
                    transform: translateY(-1px);
                }

                /* ========== CONTENT ========== */
                .content-wrapper {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }

                .section-badge {
                    display: inline-block;
                    color: #ff7216;
                    background: rgba(255, 114, 22, 0.1);
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 1rem;
                }

                .section-title {
                    font-size: clamp(2rem, 4vw, 3.5rem);
                    color: #1a1a1a;
                    margin: 0 0 1.5rem 0;
                    font-weight: 800;
                    line-height: 1.2;
                }

                .section-description {
                    font-size: clamp(1rem, 2vw, 1.25rem);
                    color: #666;
                    line-height: 1.8;
                    max-width: 800px;
                }

                /* ========== INTRO SECTION ========== */
                .intro-section {
                    text-align: center;
                    padding: 5rem 1.5rem 3rem;
                    max-width: 900px;
                    margin: 0 auto;
                }

                /* ========== VIDEO SECTION ========== */
                .video-section {
                    background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
                    border-radius: 32px;
                    padding: 6rem 2rem;
                    margin: 4rem 0 6rem;
                }

                .video-content {
                    max-width: 1400px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 0.8fr 1.2fr;
                    gap: 5rem;
                    align-items: center;
                }

                .video-text {
                    padding-right: 2rem;
                }

                .feature-list {
                    list-style: none;
                    padding: 0;
                    margin: 2rem 0 0 0;
                }

                .feature-list li {
                    color: #333;
                    font-size: 1.1rem;
                    padding: 0.75rem 0;
                    font-weight: 500;
                }

                .video-player {
                    position: relative;
                    width: 100%;
                    border-radius: 32px;
                    overflow: hidden;
                    box-shadow: 0 30px 80px rgba(0,0,0,0.18);
                    aspect-ratio: 16/9;
                    background: #000;
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .video-player:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 40px 100px rgba(0,0,0,0.22);
                }

                /* ========== WHY CHOOSE US ========== */
                .why-choose-section {
                    text-align: center;
                    padding: 3rem 0 5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 2.5rem;
                    margin-top: 3rem;
                }

                .feature-item {
                    text-align: center;
                    padding: 2rem;
                }

                .feature-number {
                    font-size: 3rem;
                    font-weight: 800;
                    color: rgba(255, 114, 22, 0.15);
                    margin-bottom: 1rem;
                    line-height: 1;
                }

                .feature-item h3 {
                    color: #1a1a1a;
                    font-size: 1.5rem;
                    margin: 0 0 1rem 0;
                    font-weight: 700;
                }

                .feature-item p {
                    color: #666;
                    line-height: 1.7;
                    margin: 0;
                }

                /* ========== CTA SECTION ========== */
                .cta-section {
                    background: linear-gradient(135deg, #ff7216, #ff8c42);
                    padding: 5rem 2rem;
                    border-radius: 32px;
                    margin: 3rem 0 5rem;
                    box-shadow: 0 20px 60px rgba(255, 114, 22, 0.3);
                }

                .cta-content {
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .cta-content h2 {
                    color: #fff;
                    font-size: clamp(2rem, 4vw, 3rem);
                    margin: 0 0 1rem 0;
                    font-weight: 800;
                }

                .cta-content p {
                    color: rgba(255,255,255,0.95);
                    font-size: clamp(1rem, 2vw, 1.25rem);
                    margin: 0 0 2.5rem 0;
                }

                .cta-buttons {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .btn-primary.large,
                .btn-outline.large {
                    padding: 1.2rem 3rem;
                    font-size: 1.1rem;
                }

                .cta-section .btn-primary {
                    background: #fff;
                    color: #ff7216;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
                }

                .cta-section .btn-primary:hover {
                    background: #f8f9fa;
                }

                .cta-section .btn-outline {
                    border-color: #fff;
                    color: #fff;
                }

                .cta-section .btn-outline:hover {
                    background: #fff;
                    color: #ff7216;
                }

                /* ========== MOBILE RESPONSIVE ========== */
                @media (max-width: 768px) {
                    .hero-container {
                        height: auto;
                        min-height: auto;
                        padding-top: 0;
                        background: #fff;
                    }

                    .hero-slide {
                        display: block;
                        height: auto;
                        padding: 0;
                        background: none;
                        background-image: none;
                    }

                    .hero-slide::before {
                        content: "";
                        display: block;
                        width: 100%;
                        aspect-ratio: 1600 / 1066;
                        background-image: var(--mobile-bg);
                        background-size: cover;
                        background-position: center;
                    }

                    .hero-overlay {
                        display: none;
                    }

                    .hero-content {
                        position: relative;
                        padding: 2.5rem 1.5rem;
                        background: #fff;
                        color: #1a1a1a;
                    }

                    .hero-main-title {
                        font-size: 1.4rem !important;
                        color: #1a1a1a !important;
                        text-shadow: none;
                        margin-bottom: 1rem;
                    }

                    .btn-call-hero {
                        padding: 1.1rem 2.5rem;
                        font-size: 1.05rem;
                        width: auto;
                    }

                    .intro-section {
                        padding: 3rem 1rem 2rem;
                    }

                    .video-section {
                        padding: 3.5rem 1.5rem;
                        margin: 2.5rem 0 4rem;
                        border-radius: 24px;
                    }

                    .video-content {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }

                    .video-text {
                        padding-right: 0;
                        text-align: center;
                    }

                    .video-player {
                        aspect-ratio: 16/9;
                        margin: 0 -0.5rem;
                    }

                    .feature-list {
                        text-align: left;
                        max-width: 450px;
                        margin: 2.5rem auto 0;
                        padding-left: 1rem;
                    }

                    .feature-list li {
                        font-size: 1.05rem;
                        padding: 0.6rem 0;
                    }

                    .why-choose-section {
                        padding: 4rem 1rem 3rem;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }

                    .cta-section {
                        padding: 3rem 1.5rem;
                        margin: 2rem 0 3rem;
                        border-radius: 24px;
                    }

                    .cta-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .btn-primary.large,
                    .btn-outline.large {
                        width: 100%;
                        max-width: 300px;
                    }
                }

                @media (max-width: 480px) {
                    .hero-content h1 {
                        font-size: 1.8rem;
                        margin-bottom: 1.5rem;
                    }

                    .btn-call-hero {
                        padding: 1rem 2rem;
                        font-size: 1rem;
                    }

                    .section-title {
                        font-size: 1.9rem;
                        line-height: 1.3;
                    }

                    .section-description {
                        font-size: 1.05rem;
                        line-height: 1.6;
                    }

                    .feature-number {
                        font-size: 2.5rem;
                    }

                    .video-section {
                        padding: 3rem 1.2rem;
                        margin: 2rem 0.5rem 4rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default PremiumHero;
