import React from 'react';
import bosch from '../assets/brandsImg/Bosch-logo.svg.png';
import bryant from '../assets/brandsImg/Bryant copy.png';
import goodman from '../assets/brandsImg/Goodman_Global_logo.svg (1).png';
import kepler from '../assets/brandsImg/Kepler logo.png';
import lennox from '../assets/brandsImg/Lennox-Logo.png';
import carrier from '../assets/brandsImg/Logo_of_the_Carrier_Corporation.svg.png';
import midea from '../assets/brandsImg/Midea-Logo.png';
import mitsubishi from '../assets/brandsImg/Mitsubishi_Electric_logo.png';
import payne from '../assets/brandsImg/Payne_Heating__Cooling_Logo_old.png';
import york from '../assets/brandsImg/York-Logo-Vector.svg-.png';
import trane from '../assets/brandsImg/media_1bcd5a3e80504f24744720a77681111a6f8a8bf7f.png';
import tempstar from '../assets/brandsImg/tc-horiz-red-logo.png';

const Brands = () => {
    const brands = [
        bosch, bryant, goodman, kepler, lennox, carrier,
        midea, mitsubishi, payne, york, trane, tempstar
    ];

    return (
        <section className="brands-marquee-section" style={{
            padding: '60px 0',
            background: '#ffffff',
            overflow: 'hidden',
            borderTop: '1px solid #f0f0f0',
            borderBottom: '1px solid #f0f0f0'
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h3 style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#ff7216',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        Trusted by Leading Brands
                    </h3>
                    <div style={{
                        width: '50px',
                        height: '3px',
                        background: '#ff7216',
                        margin: '15px auto'
                    }}></div>
                </div>
            </div>

            <div className="marquee-wrapper" style={{
                display: 'flex',
                overflow: 'hidden',
                userSelect: 'none',
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}>
                <div className="marquee-content" style={{
                    display: 'flex',
                    gap: '60px',
                    animation: 'scroll 30s linear infinite',
                    whiteSpace: 'nowrap'
                }}>
                    {/* Double the array for seamless looping */}
                    {[...brands, ...brands].map((brand, index) => (
                        <div key={index} style={{
                            flex: '0 0 auto',
                            width: '150px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '10px'
                        }}>
                            <img
                                src={brand}
                                alt={`Brand ${index}`}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                    // filter: 'grayscale(100%) brightness(80%)',
                                    transition: 'filter 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={(e) => e.target.style.filter = 'grayscale(0%) brightness(100%)'}
                                onMouseOut={(e) => e.target.style.filter = 'grayscale(100%) brightness(80%)'}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }

                .marquee-content:hover {
                    animation-play-state: paused;
                }

                @media (max-width: 768px) {
                    .marquee-content {
                        gap: 40px;
                        animation-duration: 20s;
                    }
                    .marquee-content div {
                        width: 120px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Brands;
