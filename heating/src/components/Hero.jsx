import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import air_conditioner8 from '../assets/air_conditioner8.jpg'
import heroUrban from '../assets/heroUrban.png'

const PremiumHero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        {
            id: 1,
            image: air_conditioner8,
            title: 'Premium Home Comfort Solutions',
            subtitle: 'Stay Warm This Winter with High-Efficiency Furnaces',
            ctaText: 'View Furnaces',
            ctaLink: '/services/furnace'
        },
        {
            id: 2,
            image: heroUrban,
            title: 'Expert Heating & Cooling Services',
            subtitle: 'Reliable Installation, Repair & Maintenance for Your Home Comfort',
            ctaText: 'Get a Free Quote',
            ctaLink: '/contact'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setIsAnimating(false);
            }, 500);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const containerStyle = {
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        marginTop: '-45px'
    };

    const slideStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
    };

    const backgroundStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'kenBurns 20s ease-out infinite alternate',
        // filter: 'brightness(0.7)'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(0, 0, 0, 0.85) 100%)',
        // backdropFilter: 'blur(2px)'
    };

    const contentWrapperStyle = {
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
    };

    const contentStyle = {
        maxWidth: '700px',
        color: 'white'
    };

    const subtitleStyle = {
        fontSize: '0.95rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        marginBottom: '1.5rem',
        color: '#ff7216',
        fontWeight: '700',
        animation: 'fadeInUp 1s ease-out 0.3s both',
        textShadow: '0 2px 10px rgba(255, 114, 22, 0.5)'
    };

    const titleStyle = {
        fontSize: '4.5rem',
        fontWeight: '800',
        lineHeight: '1.1',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'fadeInUp 1s ease-out 0.5s both',
        textShadow: '0 5px 30px rgba(0, 0, 0, 0.5)'
    };

    const descriptionStyle = {
        fontSize: '1.25rem',
        lineHeight: '1.8',
        marginBottom: '3rem',
        color: 'rgba(255, 255, 255, 0.9)',
        animation: 'fadeInUp 1s ease-out 0.7s both',
        fontWeight: '300'
    };

    const buttonGroupStyle = {
        display: 'flex',
        gap: '1.5rem',
        animation: 'fadeInUp 1s ease-out 0.9s both',
        flexWrap: 'wrap'
    };

    const primaryButtonStyle = {
        padding: '1rem 2.5rem',
        fontSize: '1rem',
        fontWeight: '700',
        color: 'white',
        background: 'linear-gradient(135deg, #ff7216 0%, #e65100 100%)',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 10px 30px rgba(255, 114, 22, 0.4)',
        position: 'relative',
        overflow: 'hidden',
        letterSpacing: '0.05em'
    };

    const secondaryButtonStyle = {
        padding: '1rem 2.5rem',
        fontSize: '1rem',
        fontWeight: '700',
        color: 'white',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '50px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        backdropFilter: 'blur(10px)',
        letterSpacing: '0.05em'
    };

    const dotsContainerStyle = {
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '1rem',
        zIndex: 3
    };

    const dotStyle = (active) => ({
        width: active ? '3rem' : '0.75rem',
        height: '0.75rem',
        borderRadius: '50px',
        background: active ? '#ff7216' : 'rgba(255, 255, 255, 0.5)',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        border: '2px solid rgba(255, 255, 255, 0.3)'
    });

    const scrollIndicatorStyle = {
        position: 'absolute',
        bottom: '3rem',
        left: '3rem',
        zIndex: 3,
        animation: 'bounce 2s infinite'
    };

    return (
        <>
            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes kenBurns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.15) translate(-5%, -5%); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 114, 22, 0.5);
        }
        .hero-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: white;
          transform: translateY(-3px);
        }
        @media (max-width: 768px) {
          .hero-container { height: 600px !important; } 
          .hero-title { font-size: 2.5rem !important; }
          .hero-description { font-size: 1rem !important; }
          .hero-content-wrapper { padding: 0 1rem !important; }
          .hero-btn-group { flex-direction: column; width: 100%; }
          .hero-btn-primary, .hero-btn-secondary { width: 100%; justify-content: center; }
        }
      `}</style>
            <div style={containerStyle} className="hero-container">
                {slides.map((slide, index) => (
                    index === currentSlide && (
                        <div key={slide.id} style={slideStyle}>
                            <div style={{ ...backgroundStyle, backgroundImage: `url(${slide.image})` }}></div>
                            <div style={overlayStyle}></div>

                            <div style={contentWrapperStyle} className="hero-content-wrapper">
                                <div style={contentStyle}>
                                    <div style={subtitleStyle}>PREMIUM HVAC SERVICES</div>
                                    <h1 className="hero-title" style={titleStyle}>{slide.title}</h1>
                                    <p className="hero-description" style={descriptionStyle}>{slide.subtitle}</p>

                                    <div style={buttonGroupStyle} className="hero-btn-group">
                                        <Link to={slide.ctaLink} className="hero-btn-primary" style={primaryButtonStyle}>
                                            {slide.ctaText}
                                            <span>→</span>
                                        </Link>
                                        <Link to="/services" className="hero-btn-secondary" style={secondaryButtonStyle}>
                                            Explore Services
                                            <span>↗</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                ))}

                <div style={dotsContainerStyle}>
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            style={dotStyle(index === currentSlide)}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>

                <div style={scrollIndicatorStyle}>
                    <div style={{ color: 'white', opacity: 0.7, fontSize: '0.75rem', marginBottom: '0.5rem' }}>SCROLL</div>
                    <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, #ff7216, transparent)', margin: '0 auto' }}></div>
                </div>
            </div>
        </>
    );
};

export default PremiumHero;
