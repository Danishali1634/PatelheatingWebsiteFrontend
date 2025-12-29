import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import brandLogo from "../assets/brandLogo.png";
export default function ContactPage() {
    const orange = "#ff7216";
    const dark = "#0d0d0d";
    const lightGray = "#f9fafb";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [hoveredCard, setHoveredCard] = useState(null);

    const contactInfo = [
        {
            icon: <Phone size={28} />,
            title: "Phone",
            content: "+1 (647) 984-7874",
            link: "tel:+16479847874"
        },
        {
            icon: <Mail size={28} />,
            title: "Email",
            content: "info@patelheating.com",
            link: "mailto:info@patelheating.com"
        },
        {
            icon: <MapPin size={28} />,
            title: "Location",
            content: "Brampton, ON",
            link: "#"
        },
        {
            icon: <Clock size={28} />,
            title: "Hours",
            content: "24/7 Emergency Service",
            link: "#"
        },
    ];

    const handleWhatsApp = () => {
        const message = `Hello! I'm interested in your HVAC services.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
        const whatsappUrl = `https://wa.me/16479847874?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div style={{
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            backgroundColor: "#fff",
            color: dark,
            minHeight: "100vh"
        }}>

            {/* Hero Section */}
            <div style={{
                position: "relative",
                background: `linear-gradient(135deg, white 0%, white 100%)`,
                padding: "100px 20px 140px",
                overflow: "hidden"
            }}>
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(255,255,255,0.1) 0%, transparent 40%)
          `,
                    pointerEvents: "none"
                }}></div>

                <div style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1
                }}>
                    <div style={{
                        display: "inline-block",
                        backgroundColor: "rgba(255,255,255,0.2)",
                        color: "#fff",
                        padding: "10px 24px",
                        borderRadius: 50,
                        fontSize: 14,
                        fontWeight: 600,
                        letterSpacing: 1.5,
                        marginBottom: 24,
                        backdropFilter: "blur(10px)",
                        animation: "fadeInDown 0.6s ease-out"
                    }}>
                        GET IN TOUCH
                    </div>

                    <h1 style={{
                        fontSize: "clamp(40px, 6vw, 68px)",
                        fontWeight: 900,
                        color: "#ff7216",
                        marginBottom: 24,
                        lineHeight: 1.1,
                        textShadow: "0 4px 20px rgba(0,0,0,0.2)",
                        animation: "fadeInUp 0.8s ease-out"
                    }}>
                        Contact Us
                    </h1>

                    <p style={{
                        fontSize: "clamp(18px, 2vw, 24px)",
                        color: "rgba(255,255,255,0.95)",
                        color: "#ff7216",
                        maxWidth: 700,
                        margin: "0 auto",
                        lineHeight: 1.6,
                        animation: "fadeInUp 1s ease-out"
                    }}>
                        We're here to help with all your heating, cooling, and ventilation needs
                    </p>
                </div>
            </div>

            {/* Main Contact Section */}
            <div style={{
                maxWidth: 1200,
                margin: "-80px auto 0",
                padding: "0 20px 80px",
                position: "relative",
                zIndex: 2
            }}>
                <div style={{
                    background: "#fff",
                    borderRadius: 24,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                    padding: "60px",
                    animation: "slideUp 0.8s ease-out"
                }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: 60,
                        alignItems: "start"
                    }}>

                        {/* Left Side - Contact Info & Logo */}
                        <div>
                            {/* Logo */}
                            <div style={{
                                marginBottom: 40,
                                animation: "fadeIn 1s ease-out"
                            }}>
                                <img
                                    src={brandLogo}
                                    alt="Patel Heating & Air Conditioning"
                                    style={{
                                        width: "100%",
                                        maxWidth: 280,
                                        objectFit: "contain"
                                    }}
                                />
                            </div>

                            <h2 style={{
                                fontSize: "clamp(24px, 3vw, 32px)",
                                fontWeight: 800,
                                marginBottom: 16,
                                color: dark
                            }}>
                                Patel Heating & Air Conditioning
                            </h2>
                            <p style={{
                                fontSize: 16,
                                color: "#6b7280",
                                marginBottom: 40,
                                lineHeight: 1.6
                            }}>
                                Your trusted partner for heating and cooling solutions in Brampton and surrounding areas.
                            </p>

                            {/* Contact Info Cards */}
                            <div style={{ display: "grid", gap: 20 }}>
                                {contactInfo.map((info, i) => (
                                    <a
                                        key={i}
                                        href={info.link}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 16,
                                            padding: 20,
                                            backgroundColor: hoveredCard === i ? lightGray : "#fff",
                                            borderRadius: 12,
                                            border: "1px solid #e5e7eb",
                                            textDecoration: "none",
                                            color: "inherit",
                                            transition: "all 0.3s ease",
                                            transform: hoveredCard === i ? "translateX(8px)" : "translateX(0)",
                                            boxShadow: hoveredCard === i ? "0 8px 24px rgba(0,0,0,0.1)" : "none",
                                            cursor: "pointer"
                                        }}
                                        onMouseEnter={() => setHoveredCard(i)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        <div style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 12,
                                            backgroundColor: hoveredCard === i ? orange : "#fff7ed",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: hoveredCard === i ? "#fff" : orange,
                                            transition: "all 0.3s ease",
                                            flexShrink: 0
                                        }}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <div style={{
                                                fontSize: 13,
                                                color: "#6b7280",
                                                fontWeight: 600,
                                                marginBottom: 4
                                            }}>
                                                {info.title}
                                            </div>
                                            <div style={{
                                                fontSize: 17,
                                                color: dark,
                                                fontWeight: 700
                                            }}>
                                                {info.content}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - WhatsApp Contact Form */}
                        <div style={{
                            backgroundColor: lightGray,
                            padding: 40,
                            borderRadius: 20,
                            border: "1px solid #e5e7eb",
                            animation: "fadeIn 1.2s ease-out"
                        }}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                marginBottom: 24
                            }}>
                                <div style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 12,
                                    background: `linear-gradient(135deg, #25D366 0%, #128C7E 100%)`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#fff"
                                }}>
                                    <MessageCircle size={24} />
                                </div>
                                <h2 style={{
                                    fontSize: 24,
                                    fontWeight: 800,
                                    color: dark,
                                    margin: 0
                                }}>
                                    Send us a Message
                                </h2>
                            </div>

                            <p style={{
                                fontSize: 15,
                                color: "#6b7280",
                                marginBottom: 30,
                                lineHeight: 1.6
                            }}>
                                Fill out the form below and we'll contact you via WhatsApp
                            </p>

                            <form style={{ display: "grid", gap: 20 }}>
                                <div>
                                    <label style={{
                                        display: "block",
                                        marginBottom: 8,
                                        fontWeight: 600,
                                        fontSize: 14,
                                        color: dark
                                    }}>
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={{
                                            width: "100%",
                                            padding: "14px 16px",
                                            borderRadius: 10,
                                            border: "1px solid #e5e7eb",
                                            fontSize: 16,
                                            outline: "none",
                                            backgroundColor: "#fff",
                                            transition: "all 0.3s ease"
                                        }}
                                        placeholder="John Doe"
                                        onFocus={(e) => {
                                            e.target.style.borderColor = orange;
                                            e.target.style.boxShadow = `0 0 0 3px rgba(255, 114, 22, 0.1)`;
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = "#e5e7eb";
                                            e.target.style.boxShadow = "none";
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{
                                        display: "block",
                                        marginBottom: 8,
                                        fontWeight: 600,
                                        fontSize: 14,
                                        color: dark
                                    }}>
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        style={{
                                            width: "100%",
                                            padding: "14px 16px",
                                            borderRadius: 10,
                                            border: "1px solid #e5e7eb",
                                            fontSize: 16,
                                            outline: "none",
                                            backgroundColor: "#fff",
                                            transition: "all 0.3s ease"
                                        }}
                                        placeholder="john@example.com"
                                        onFocus={(e) => {
                                            e.target.style.borderColor = orange;
                                            e.target.style.boxShadow = `0 0 0 3px rgba(255, 114, 22, 0.1)`;
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = "#e5e7eb";
                                            e.target.style.boxShadow = "none";
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{
                                        display: "block",
                                        marginBottom: 8,
                                        fontWeight: 600,
                                        fontSize: 14,
                                        color: dark
                                    }}>
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        style={{
                                            width: "100%",
                                            padding: "14px 16px",
                                            borderRadius: 10,
                                            border: "1px solid #e5e7eb",
                                            fontSize: 16,
                                            outline: "none",
                                            backgroundColor: "#fff",
                                            transition: "all 0.3s ease"
                                        }}
                                        placeholder="+1 (555) 123-4567"
                                        onFocus={(e) => {
                                            e.target.style.borderColor = orange;
                                            e.target.style.boxShadow = `0 0 0 3px rgba(255, 114, 22, 0.1)`;
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = "#e5e7eb";
                                            e.target.style.boxShadow = "none";
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{
                                        display: "block",
                                        marginBottom: 8,
                                        fontWeight: 600,
                                        fontSize: 14,
                                        color: dark
                                    }}>
                                        Your Message *
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        style={{
                                            width: "100%",
                                            padding: "14px 16px",
                                            borderRadius: 10,
                                            border: "1px solid #e5e7eb",
                                            fontSize: 16,
                                            outline: "none",
                                            resize: "vertical",
                                            backgroundColor: "#fff",
                                            fontFamily: "inherit",
                                            transition: "all 0.3s ease"
                                        }}
                                        placeholder="Tell us about your HVAC needs..."
                                        onFocus={(e) => {
                                            e.target.style.borderColor = orange;
                                            e.target.style.boxShadow = `0 0 0 3px rgba(255, 114, 22, 0.1)`;
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = "#e5e7eb";
                                            e.target.style.boxShadow = "none";
                                        }}
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={handleWhatsApp}
                                    style={{
                                        background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                                        color: "#fff",
                                        border: "none",
                                        padding: "16px",
                                        borderRadius: 12,
                                        fontSize: 17,
                                        fontWeight: 700,
                                        cursor: "pointer",
                                        marginTop: 10,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 10,
                                        transition: "all 0.3s ease",
                                        boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(37, 211, 102, 0.4)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.3)";
                                    }}
                                >
                                    <MessageCircle size={20} />
                                    Send via WhatsApp
                                </button>
                            </form>

                            <p style={{
                                fontSize: 13,
                                color: "#6b7280",
                                marginTop: 20,
                                textAlign: "center",
                                lineHeight: 1.5
                            }}>
                                By clicking send, you'll be redirected to WhatsApp to complete your message
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Emergency CTA */}
            <div style={{
                backgroundColor: "#fef3c7",
                padding: "60px 20px",
                borderTop: "1px solid #fde68a",
                borderBottom: "1px solid #fde68a"
            }}>
                <div style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    textAlign: "center"
                }}>
                    <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 12,
                        backgroundColor: "#fbbf24",
                        padding: "12px 28px",
                        borderRadius: 50,
                        marginBottom: 20
                    }}>
                        <Phone size={20} color="#fff" />
                        <span style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#fff",
                            letterSpacing: 1
                        }}>
                            EMERGENCY SERVICE
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: "clamp(28px, 4vw, 38px)",
                        fontWeight: 800,
                        marginBottom: 12,
                        color: dark
                    }}>
                        Need Immediate Assistance?
                    </h2>
                    <p style={{
                        fontSize: 18,
                        color: "#78350f",
                        marginBottom: 30
                    }}>
                        Our 24/7 emergency hotline is always available for urgent HVAC issues
                    </p>
                    <a
                        href="tel:+16479847874"
                        style={{
                            display: "inline-block",
                            backgroundColor: orange,
                            color: "#fff",
                            padding: "16px 40px",
                            borderRadius: 12,
                            fontSize: 18,
                            fontWeight: 700,
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 12px rgba(255, 114, 22, 0.3)"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 114, 22, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 114, 22, 0.3)";
                        }}
                    >
                        Call Now: +1 (647) 984-7874
                    </a>
                </div>
            </div>

            <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>

        </div>
    );
}