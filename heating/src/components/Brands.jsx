import React from 'react';

const Brands = () => {
    const brands = [
        'https://res.cloudinary.com/dtjcelk8d/image/upload/v1769539187/York-Logo-Vector.svg-_td8h7b.png',
        'https://res.cloudinary.com/dtjcelk8d/image/upload/v1769539185/tc-horiz-red-logo_zfuhs5.png',
        'https://res.cloudinary.com/dtjcelk8d/image/upload/v1769539184/Payne_Heating__Cooling_Logo_old_ehyzlu.png',
        'https://res.cloudinary.com/dtjcelk8d/image/upload/v1769539182/Mitsubishi_Electric_logo_h7hd3f.png',
        'https://res.cloudinary.com/dtjcelk8d/image/upload/v1769539181/Midea-Logo_jgybuo.png',
        'https://res.cloudinary.com/dtjcelk8d/image/upload/v1769539179/media_1bcd5a3e80504f24744720a77681111a6f8a8bf7f_yaisrt.png',
        'https://res.cloudinary.com/dtjcelk8d/image/upload/v1769539179/Logo_of_the_Carrier_Corporation.svg_w6rkd4.png',
        'https://res.cloudinary.com/dtjcelk8d/image/upload/v1769539177/Lennox-Logo_s4nk71.png',
        'https://res.cloudinary.com/dtjcelk8d/image/upload/v1769539176/Kepler_logo_aiqitt.png',
        'https://res.cloudinary.com/dtjcelk8d/image/upload/v1769539175/Goodman_Global_logo.svg_1_nyhsq3.png',
        'https://res.cloudinary.com/dtjcelk8d/image/upload/v1769539174/Bryant_copy_hfm4gy.png',
        'https://res.cloudinary.com/dtjcelk8d/image/upload/v1769539173/Bosch-logo.svg_c4vs9d.png'
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
