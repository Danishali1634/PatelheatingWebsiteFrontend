import React from "react";
import { Award, Users, Heart, Shield, Clock, ThumbsUp, Zap, Target, CheckCircle, Phone, MapPin } from "lucide-react";
import brandLogo from "../assets/brandLogo.png";

export default function AboutPage() {
    const orange = "#ff7216";
    const red = "#e31e25";
    const dark = "#0d0d0d";
    const lightGray = "#f9fafb";

    const values = [
        {
            icon: <Heart size={36} />,
            title: "Customer First",
            description: "Your comfort and satisfaction are our top priorities in everything we do"
        },
        {
            icon: <Shield size={36} />,
            title: "Quality Guaranteed",
            description: "We stand behind our work with comprehensive warranties and guarantees"
        },
        {
            icon: <Clock size={36} />,
            title: "Always Available",
            description: "24/7 emergency service because comfort can't wait"
        },
        {
            icon: <ThumbsUp size={36} />,
            title: "Expert Team",
            description: "Certified technicians with years of experience and ongoing training"
        }
    ];

    const stats = [
        { number: "15+", label: "Years Experience" },
        { number: "5000+", label: "Happy Customers" },
        { number: "100%", label: "Satisfaction Rate" },
        { number: "24/7", label: "Support Available" }
    ];

    const whyChooseUs = [
        {
            icon: <Award size={32} />,
            title: "Industry Certified",
            description: "All our technicians are fully licensed, insured, and certified"
        },
        {
            icon: <Zap size={32} />,
            title: "Fast Response",
            description: "Quick turnaround times with same-day service available"
        },
        {
            icon: <Target size={32} />,
            title: "Precision Work",
            description: "Attention to detail in every installation and repair"
        }
    ];

    const services = [
        "Furnace Installation & Repair",
        "Heat Pump Systems",
        "Air Conditioning Services",
        "Tankless Water Heaters",
        "Emergency HVAC Repairs",
        "Regular Maintenance"
    ];

    return (
        <div style={{
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            backgroundColor: "#fff",
            color: dark,
            minHeight: "100vh"
        }}>

            {/* Hero Section - Clean and Minimal */}
            <div style={{
                position: "relative",
                padding: "120px 20px 100px",
                backgroundColor: "#fff",
                borderBottom: "1px solid #e5e7eb"
            }}>
                <div style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: 60,
                    alignItems: "center"
                }}>
                    <div>
                        <div style={{
                            display: "inline-block",
                            backgroundColor: lightGray,
                            color: dark,
                            padding: "8px 20px",
                            borderRadius: 50,
                            fontSize: 13,
                            fontWeight: 600,
                            letterSpacing: 1,
                            marginBottom: 24
                        }}>
                            ABOUT US
                        </div>

                        <h1 style={{
                            fontSize: "clamp(36px, 5vw, 56px)",
                            fontWeight: 900,
                            color: orange,
                            marginBottom: 24,
                            lineHeight: 1.1
                        }}>
                            Heating & Cooling Experts You Can Trust
                        </h1>

                        <p style={{
                            fontSize: 18,
                            color: "#6b7280",
                            marginBottom: 30,
                            lineHeight: 1.7
                        }}>
                            Serving Brampton and surrounding areas with reliable HVAC solutions for over 15 years. Your comfort is our commitment.
                        </p>

                        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 30 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <Phone size={20} color={orange} />
                                <span style={{ fontSize: 16, fontWeight: 600 }}>+1 (647) 984-7874</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <MapPin size={20} color={orange} />
                                <span style={{ fontSize: 16, fontWeight: 600 }}>Brampton, ON</span>
                            </div>
                        </div>
                    </div>

                    {/* Logo */}
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <img
                            src={brandLogo}
                            alt="Patel Heating & Air Conditioning"
                            style={{
                                width: "100%",
                                maxWidth: 400,
                                objectFit: "contain"
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div style={{
                backgroundColor: lightGray,
                padding: "60px 20px"
            }}>
                <div style={{
                    maxWidth: 1200,
                    margin: "0 auto"
                }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: 40,
                        textAlign: "center"
                    }}>
                        {stats.map((stat, idx) => (
                            <div key={idx}>
                                <div style={{
                                    fontSize: "clamp(40px, 5vw, 56px)",
                                    fontWeight: 900,
                                    marginBottom: 8,
                                    color: orange
                                }}>
                                    {stat.number}
                                </div>
                                <div style={{
                                    fontSize: 16,
                                    color: "#6b7280",
                                    fontWeight: 600,
                                    letterSpacing: 0.5
                                }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <div style={{
                padding: "100px 20px",
                backgroundColor: "#fff"
            }}>
                <div style={{
                    maxWidth: 1100,
                    margin: "0 auto"
                }}>
                    <div style={{
                        textAlign: "center",
                        marginBottom: 60
                    }}>
                        <h2 style={{
                            fontSize: "clamp(32px, 4vw, 48px)",
                            fontWeight: 800,
                            marginBottom: 16,
                            color: orange
                        }}>
                            Our Story
                        </h2>
                        <div style={{
                            width: 60,
                            height: 3,
                            backgroundColor: dark,
                            margin: "0 auto",
                            borderRadius: 2
                        }}></div>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: 50,
                        alignItems: "start"
                    }}>
                        <div>
                            <p style={{
                                fontSize: 17,
                                lineHeight: 1.9,
                                marginBottom: 20,
                                color: "#4b5563"
                            }}>
                                Founded with a passion for exceptional service and technical excellence, <strong style={{ color: orange }}>Patel Heating & Air Conditioning</strong> has been serving the Brampton community and surrounding areas for over 15 years.
                            </p>
                            <p style={{
                                fontSize: 17,
                                lineHeight: 1.9,
                                color: "#4b5563"
                            }}>
                                What started as a small family business has grown into one of the most trusted names in HVAC services, built on reliability, quality craftsmanship, and honest service.
                            </p>
                        </div>

                        <div style={{
                            background: lightGray,
                            borderRadius: 16,
                            padding: 40,
                            borderLeft: `4px solid ${orange}`
                        }}>
                            <h3 style={{
                                fontSize: 24,
                                fontWeight: 700,
                                marginBottom: 16,
                                color: dark
                            }}>
                                Our Mission
                            </h3>
                            <p style={{
                                fontSize: 16,
                                lineHeight: 1.8,
                                color: "#4b5563"
                            }}>
                                To provide exceptional heating and cooling solutions that enhance comfort, ensure safety, and deliver peace of mind to every home we serve. We're not just fixing systems—we're building lasting relationships with our customers, one home at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Values */}
            <div style={{
                padding: "100px 20px",
                backgroundColor: lightGray
            }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{
                        textAlign: "center",
                        marginBottom: 60
                    }}>
                        <h2 style={{
                            fontSize: "clamp(32px, 4vw, 48px)",
                            fontWeight: 800,
                            marginBottom: 16,
                            color: orange
                        }}>
                            Our Core Values
                        </h2>
                        <div style={{
                            width: 60,
                            height: 3,
                            backgroundColor: orange,
                            margin: "0 auto 20px",
                            borderRadius: 2
                        }}></div>
                        <p style={{
                            fontSize: 18,
                            color: "#6b7280",
                            maxWidth: 600,
                            margin: "0 auto"
                        }}>
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: 30
                    }}>
                        {values.map((value, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: "#fff",
                                    borderRadius: 16,
                                    padding: 35,
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                    cursor: "pointer",
                                    border: "1px solid #f0f0f0"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-8px)";
                                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                                }}
                            >
                                <div style={{
                                    width: 64,
                                    height: 64,
                                    borderRadius: 12,
                                    background: lightGray,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: orange,
                                    marginBottom: 20
                                }}>
                                    {value.icon}
                                </div>
                                <h3 style={{
                                    fontSize: 20,
                                    fontWeight: 700,
                                    marginBottom: 12,
                                    color: dark
                                }}>
                                    {value.title}
                                </h3>
                                <p style={{
                                    fontSize: 15,
                                    lineHeight: 1.7,
                                    color: "#6b7280"
                                }}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div style={{
                backgroundColor: "#fff",
                padding: "100px 20px"
            }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{
                        textAlign: "center",
                        marginBottom: 60
                    }}>
                        <h2 style={{
                            fontSize: "clamp(32px, 4vw, 48px)",
                            fontWeight: 800,
                            marginBottom: 16,
                            color: orange
                        }}>
                            Why Choose Us?
                        </h2>
                        <div style={{
                            width: 60,
                            height: 3,
                            backgroundColor: orange,
                            margin: "0 auto 20px",
                            borderRadius: 2
                        }}></div>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 50
                    }}>
                        {whyChooseUs.map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    textAlign: "center",
                                    padding: "20px"
                                }}
                            >
                                <div style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: "50%",
                                    background: lightGray,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: orange,
                                    margin: "0 auto 24px",
                                    transition: "transform 0.3s",
                                    cursor: "pointer"
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scale(1.1)";
                                        e.currentTarget.style.background = orange;
                                        e.currentTarget.style.color = "#fff";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.style.background = lightGray;
                                        e.currentTarget.style.color = orange;
                                    }}>
                                    {item.icon}
                                </div>
                                <h3 style={{
                                    fontSize: 22,
                                    fontWeight: 700,
                                    marginBottom: 12,
                                    color: dark
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: 16,
                                    lineHeight: 1.7,
                                    color: "#6b7280"
                                }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services We Offer */}
            <div style={{
                backgroundColor: lightGray,
                padding: "100px 20px"
            }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <div style={{
                        textAlign: "center",
                        marginBottom: 50
                    }}>
                        <h2 style={{
                            fontSize: "clamp(32px, 4vw, 48px)",
                            fontWeight: 800,
                            marginBottom: 16,
                            color: orange
                        }}>
                            Services We Offer
                        </h2>
                        <div style={{
                            width: 60,
                            height: 3,
                            backgroundColor: dark,
                            margin: "0 auto",
                            borderRadius: 2
                        }}></div>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: 20
                    }}>
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: "#fff",
                                    padding: "20px 24px",
                                    borderRadius: 10,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                    cursor: "pointer",
                                    border: "1px solid #f0f0f0"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateX(8px)";
                                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateX(0)";
                                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.04)";
                                }}
                            >
                                <CheckCircle size={22} color={orange} style={{ flexShrink: 0 }} />
                                <span style={{
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: dark
                                }}>
                                    {service}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div style={{
                background: `linear-gradient(135deg, ${orange} 0%, #d65a0e 100%)`,
                padding: "80px 20px",
                position: "relative",
                overflow: "hidden"
            }}>
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
          `,
                    pointerEvents: "none"
                }}></div>

                <div style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 40,
                    color: "#fff",
                    position: "relative",
                    zIndex: 1
                }}>
                    <div style={{ flex: "1 1 300px" }}>
                        <h2 style={{
                            fontSize: "clamp(28px, 4vw, 42px)",
                            marginBottom: 12,
                            fontWeight: 800,
                            color: "white"
                        }}>
                            Ready to Experience the Difference?
                        </h2>
                        <p style={{ fontSize: 18, opacity: 0.95 }}>
                            Contact us today and let us take care of your heating and cooling needs
                        </p>
                    </div>

                    <button style={{
                        backgroundColor: "#fff",
                        color: orange,
                        border: "none",
                        padding: "18px 40px",
                        borderRadius: 12,
                        fontSize: 17,
                        fontWeight: 700,
                        cursor: "pointer",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                        transition: "transform 0.2s, box-shadow 0.2s",
                        whiteSpace: "nowrap"
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                        }}>
                        Contact Us
                    </button>
                </div>
            </div>

        </div>
    );
}