import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import WorkDuring from '../assets/workDuring.mp4'

const PremiumHero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    // Placeholder images - replace with your actual image paths
    const air_conditioner8 = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200';
    const heroUrban = 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200';

    const slides = [
        {
            id: 1,
            image: air_conditioner8,
            title: 'Bringing Comfort to Your Home',
            subtitle: 'PATEL Heating & Air Conditioning — Trusted HVAC Experts in the GTA delivering reliable, energy-efficient home comfort solutions.',
            ctaText: 'Contact Us',
            ctaLink: '/contact',
        },
        {
            id: 2,
            image: heroUrban,
            title: 'Complete HVAC Services You Can Trust',
            subtitle: 'Furnace repair, AC installation & 24/7 emergency HVAC service across Brampton, Mississauga, Milton & the GTA.',
            ctaText: 'Get Free Quote',
            ctaLink: '/contact',
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide((p) => (p + 1) % slides.length);
                setIsAnimating(false);
            }, 600);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const handleNavigation = (link) => {
        window.open(link, '_self');
    };

    return (
        <div className="premium-hvac-wrapper">
            {/* ================= HERO ================= */}
            <div className="hero-container">
                {slides.map((slide, index) =>
                    index === currentSlide && (
                        <div
                            key={slide.id}
                            className={`hero-slide ${isAnimating ? 'fade' : ''}`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="hero-overlay" />
                            <div className="hero-content">
                                <span className="hero-tag">Residential HVAC Services</span>
                                <h1 style={{ color: 'white' }}>{slide.title}</h1>
                                <p className="hero-subtitle" style={{ color: '#ff7216' }}>{slide.subtitle}</p>
                            </div>

                            {/* Slide Indicators */}
                            <div className="slide-indicators">
                                {slides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        className={`indicator ${idx === currentSlide ? 'active' : ''}`}
                                        onClick={() => setCurrentSlide(idx)}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                )}
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

                {/* Services Grid */}
                {/* <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon">🔥</div>
                        <h3>Heating Services</h3>
                        <p>Furnace installation, repair & high-efficiency replacements.</p>
                        <button
                            className="service-link"
                            onClick={() => handleNavigation('/services/furnace')}
                        >
                            Learn More →
                        </button>
                    </div>
                    <div className="service-card">
                        <div className="service-icon" style={{ color: '#ff7216' }}>❄️</div>
                        <h3>Air Conditioning</h3>
                        <p>Central AC, ductless systems & expert repairs.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon" style={{ color: '#ff7216' }}>🌬️</div>
                        <h3 style={{ color: '#ff7216' }}>Indoor Air Quality</h3>
                        <p>Humidifiers, HRV systems & smart thermostats.</p>
                        <button
                            className="service-link"
                            onClick={() => handleNavigation('/services/air-quality')}
                        >
                            Learn More →
                        </button>
                    </div>
                    <div className="service-card">
                        <div className="service-icon" style={{ color: '#ff7216' }}>💧</div>
                        <h3 style={{ color: '#ff7216' }}>Gas & Water Systems</h3>
                        <p>Tankless water heaters & gas line services.</p>
                        <button
                            className="service-link"
                            onClick={() => handleNavigation('/services/gas-water')}
                        >
                            Learn More →
                        </button>
                    </div>
                </div> */}

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
                            {!showVideo ? (
                                <div className="video-thumbnail">
                                    <img src={air_conditioner8} alt="HVAC Service" />
                                    <button
                                        className="play-button"
                                        onClick={() => setShowVideo(true)}
                                        aria-label="Play video"
                                    >
                                        <Play size={48} />
                                    </button>
                                </div>
                            ) : (
                                <div style={{ height: '100%', width: '100%' }}>
                                    <video
                                        style={{ height: '100%', width: '100%' }}
                                        autoPlay
                                        loop
                                        src={WorkDuring}
                                        title="PATEL Heating & Air Conditioning"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="why-choose-section">
                    <div className="section-badge" style={{ color: 'black' }}>Why Choose Us</div>
                    <h2 className="section-title" style={{ color: '#ff7216' }}>Why Homeowners Choose PATEL</h2>
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
                            <Link to="/contact">
                                <button
                                    className="btn-primary large"
                                >
                                    Book Service Now
                                </button>
                            </Link>
                            <a href="tel:+16479847874" style={{ textDecoration: 'none' }}>
                                <button
                                    className="btn-outline large"
                                >
                                    Call Us Today
                                </button>
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
                    height: 100vh;
                    min-height: 600px;
                    position: relative;
                    overflow: hidden;
                }
                
                .hero-slide {
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 1.5rem;
                    transition: transform 1s ease, opacity 1s ease;
                }
                
                .hero-slide.fade {
                    transform: scale(1.08);
                    opacity: 1;
                }
                
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(0,0,0,0.65), rgba(0,0,0,0.85));
                }
                
                .hero-content {
                    position: relative;
                    max-width: 800px;
                    width: 100%;
                    color: #fff;
                    z-index: 2;
                    text-align: center;
                    padding: 2rem 1.5rem;
                }
                
                .hero-tag {
                    display: inline-block;
                    color: #ff7216;
                    background: rgba(255, 114, 22, 0.1);
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(255, 114, 22, 0.3);
                }
                
                .hero-content h1 {
                    font-size: clamp(2rem, 6vw, 4.5rem);
                    margin: 0 0 1.5rem 0;
                    line-height: 1.1;
                    font-weight: 800;
                    text-shadow: 0 4px 20px rgba(0,0,0,0.5);
                }
                
                .hero-subtitle {
                    font-size: clamp(1rem, 2.5vw, 1.25rem);
                    line-height: 1.7;
                    color: rgba(255,255,255,0.95);
                    margin-bottom: 2rem;
                    max-width: 700px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .hero-actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-top: 2.5rem;
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
                }
                
                .btn-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 12px 35px rgba(255, 114, 22, 0.5);
                }
                
                .btn-secondary {
                    border: 2px solid rgba(255,255,255,0.9);
                    background: rgba(255,255,255,0.1);
                    backdrop-filter: blur(10px);
                    color: #fff;
                    padding: 1.1rem 2.5rem;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .btn-secondary:hover {
                    background: rgba(255,255,255,0.2);
                    transform: translateY(-3px);
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
                }

                .btn-outline:hover {
                    background: #ff7216;
                    color: #fff;
                    transform: translateY(-3px);
                }
                
                .slide-indicators {
                    position: absolute;
                    bottom: 3rem;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 0.75rem;
                    z-index: 3;
                }
                
                .indicator {
                    width: 40px;
                    height: 4px;
                    background: rgba(255,255,255,0.3);
                    border: none;
                    border-radius: 2px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .indicator.active {
                    background: #ff7216;
                    width: 60px;
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

                /* ========== SERVICES GRID ========== */
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    padding: 3rem 0 5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .service-card {
                    background: #fff;
                    padding: 2.5rem;
                    border-radius: 24px;
                    box-shadow: 0 4px 30px rgba(0,0,0,0.08);
                    transition: all 0.4s ease;
                    border: 1px solid rgba(0,0,0,0.05);
                }

                .service-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 60px rgba(255, 114, 22, 0.15);
                }

                .service-icon {
                    font-size: 3rem;
                    margin-bottom: 1.5rem;
                }

                .service-card h3 {
                    color: #ff7216;
                    font-size: 1.5rem;
                    margin: 0 0 1rem 0;
                    font-weight: 700;
                }

                .service-card p {
                    color: #666;
                    line-height: 1.7;
                    margin: 0 0 1.5rem 0;
                }

                .service-link {
                    color: #ff7216;
                    background: none;
                    border: none;
                    font-weight: 600;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    padding: 0;
                }

                .service-link:hover {
                    color: #ff8c42;
                }

                /* ========== VIDEO SECTION ========== */
                .video-section {
                    background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
                    border-radius: 32px;
                    padding: 4rem 2rem;
                    margin: 3rem 0 5rem;
                }

                .video-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
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
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
                }

                .video-thumbnail {
                    position: relative;
                    width: 100%;
                    padding-bottom: 56.25%;
                    background: #000;
                }

                .video-thumbnail img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .play-button {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #ff7216, #ff8c42);
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    transition: all 0.3s ease;
                    box-shadow: 0 8px 30px rgba(255, 114, 22, 0.5);
                }

                .play-button:hover {
                    transform: translate(-50%, -50%) scale(1.1);
                    box-shadow: 0 12px 40px rgba(255, 114, 22, 0.6);
                }

                .video-embed {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    padding-bottom: 56.25%;
                }

                .video-embed video {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
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
                        min-height: 500px;
                        height: 90vh;
                    }

                    .hero-content {
                        padding: 1.5rem;
                    }

                    .hero-tag {
                        font-size: 0.7rem;
                        padding: 0.4rem 1rem;
                    }

                    .hero-actions {
                        flex-direction: column;
                        gap: 0.75rem;
                        margin-top: 1.5rem;
                    }

                    .btn-primary,
                    .btn-secondary,
                    .btn-outline {
                        width: 100%;
                        max-width: 300px;
                        text-align: center;
                        padding: 1rem 2rem;
                    }

                    .slide-indicators {
                        bottom: 2rem;
                    }

                    .intro-section {
                        padding: 3rem 1rem 2rem;
                    }

                    .services-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                        padding: 2rem 0 3rem;
                    }

                    .service-card {
                        padding: 2rem 1.5rem;
                    }

                    .video-section {
                        padding: 2.5rem 1.5rem;
                        margin: 2rem 0 3rem;
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

                    .feature-list {
                        text-align: left;
                        max-width: 400px;
                        margin: 2rem auto 0;
                    }

                    .play-button {
                        width: 70px;
                        height: 70px;
                    }

                    .why-choose-section {
                        padding: 2rem 0 3rem;
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
                        font-size: 1.75rem;
                    }

                    .hero-subtitle {
                        font-size: 0.95rem;
                    }

                    .section-title {
                        font-size: 1.75rem;
                    }

                    .service-card {
                        padding: 1.75rem 1.25rem;
                    }

                    .service-icon {
                        font-size: 2.5rem;
                    }

                    .feature-number {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default PremiumHero;