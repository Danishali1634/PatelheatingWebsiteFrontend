import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
export default function ContactPage() {
    const orange = "#ff7216";
    const dark = "#0d0d0d";


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
    const [lastFormData, setLastFormData] = useState(null);
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
        // Use current form data or last submitted data if form was cleared
        const data = (formData.name || formData.email || formData.phone || formData.message) ? formData : lastFormData;

        if (!data || !data.name || !data.email || !data.phone || !data.message) {
            alert("Please fill in all fields before sending via WhatsApp.");
            return;
        }

        const message = `Hello! I'm interested in your HVAC services.\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`;
        const whatsappUrl = `https://wa.me/16479847874?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            alert("Please fill in all required fields.");
            return;
        }

        setStatus('loading');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api/contact';
            const isAspx = apiUrl.toLowerCase().endsWith('.aspx');

            let response;
            if (isAspx) {
                // Handle ASP.NET form-encoded data
                const formDataParams = new URLSearchParams();
                formDataParams.append('txtFullName', formData.name);
                formDataParams.append('txtEmail', formData.email);
                formDataParams.append('txtPhone', formData.phone);
                formDataParams.append('txtMessage', formData.message);

                response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: formDataParams,
                });
            } else {
                // Handle Node.js JSON data
                response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
            }

            // For ASP.NET, sometimes it might not return JSON
            if (isAspx) {
                if (response.ok) {
                    setStatus('success');
                    setLastFormData({ ...formData });
                    setFormData({ name: "", email: "", phone: "", message: "" });
                } else {
                    setStatus('error');
                }
            } else {
                const data = await response.json();
                if (data.success) {
                    setStatus('success');
                    setLastFormData({ ...formData }); // Save a copy before clearing
                    setFormData({ name: "", email: "", phone: "", message: "" });
                } else {
                    setStatus('error');
                    console.error('Submission failed:', data.message);
                }
            }
        } catch (error) {
            setStatus('error');
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <title>Contact Us - Patel Heating</title>
            <div style={{
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                backgroundColor: "#fff",
                color: dark,
                minHeight: "100vh"
            }}>

                {/* Main Contact Section */}
                <div style={{
                    maxWidth: 1000,
                    margin: "0 auto",
                    padding: "20px 20px 60px"
                }}>
                    <div style={{
                        textAlign: "left",
                        marginBottom: 48,
                        animation: "fadeInUp 0.8s ease-out"
                    }}>
                        <h1 style={{
                            fontSize: "clamp(32px, 5vw, 48px)",
                            fontWeight: 900,
                            color: dark,
                            marginBottom: 16,
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                            marginTop: 20,
                        }}>
                            Patel Heating & Air Conditioning
                        </h1>
                        <p style={{
                            fontSize: "clamp(16px, 1.2vw, 18px)",
                            color: "#64748b",
                            maxWidth: 700,
                            lineHeight: 1.6
                        }}>
                            Your trusted partner for heating and cooling solutions in Brampton and surrounding areas.
                        </p>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: 80,
                        alignItems: "start"
                    }}>
                        {/* Left Side - Contact Info Information */}
                        <div style={{ display: "grid", gap: 24 }}>
                            {contactInfo.map((info, i) => (
                                <a
                                    key={i}
                                    href={info.link}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 24,
                                        padding: "24px",
                                        backgroundColor: "#fff",
                                        borderRadius: 20,
                                        border: "1px solid #e2e8f0",
                                        textDecoration: "none",
                                        color: "inherit",
                                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                        boxShadow: hoveredCard === i ? "0 10px 25px -5px rgba(0,0,0,0.05)" : "none",
                                        transform: hoveredCard === i ? "translateY(-4px)" : "translateY(0)"
                                    }}
                                    onMouseEnter={() => setHoveredCard(i)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 16,
                                        backgroundColor: "#fff7ed",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: orange,
                                        flexShrink: 0,
                                        border: "1px solid rgba(255, 114, 22, 0.1)"
                                    }}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: 14,
                                            color: "#64748b",
                                            fontWeight: 600,
                                            marginBottom: 4,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em"
                                        }}>
                                            {info.title}
                                        </div>
                                        <div style={{
                                            fontSize: "clamp(17px, 1.5vw, 20px)",
                                            color: dark,
                                            fontWeight: 700
                                        }}>
                                            {info.content}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Right Side - WhatsApp Contact Form */}
                        <div style={{
                            backgroundColor: "#fff",
                            padding: "48px",
                            borderRadius: 24,
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)",
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
                                Fill out the form below to send us an email directly.
                            </p>

                            {status === 'success' && (
                                <div style={{
                                    padding: '15px',
                                    backgroundColor: '#d1fae5',
                                    color: '#065f46',
                                    borderRadius: '10px',
                                    marginBottom: '20px',
                                    textAlign: 'center',
                                    fontWeight: '600'
                                }}>
                                    Your message has been sent successfully!
                                </div>
                            )}

                            {status === 'error' && (
                                <div style={{
                                    padding: '15px',
                                    backgroundColor: '#fee2e2',
                                    color: '#991b1b',
                                    borderRadius: '10px',
                                    marginBottom: '20px',
                                    textAlign: 'center',
                                    fontWeight: '600'
                                }}>
                                    Failed to send message. Please try again or contact us via phone.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 20 }}>
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
                                    type="submit"
                                    disabled={status === 'loading'}
                                    style={{
                                        background: status === 'loading' ? '#9ca3af' : "linear-gradient(135deg, #ff7216 0%, #ff8c42 100%)",
                                        color: "#fff",
                                        border: "none",
                                        padding: "16px",
                                        borderRadius: 12,
                                        fontSize: 17,
                                        fontWeight: 700,
                                        cursor: status === 'loading' ? 'not-allowed' : "pointer",
                                        marginTop: 10,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 10,
                                        transition: "all 0.3s ease",
                                        boxShadow: "0 4px 12px rgba(255, 114, 22, 0.3)"
                                    }}
                                    onMouseEnter={(e) => {
                                        if (status !== 'loading') {
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                            e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 114, 22, 0.4)";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (status !== 'loading') {
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 114, 22, 0.3)";
                                        }
                                    }}
                                >
                                    <Send size={20} />
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>

                                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                    <span style={{ color: '#6b7280', fontSize: '14px' }}>OR</span>
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

                {/* Emergency CTA */}
                <div style={{
                    backgroundColor: "#fef3c7",
                    padding: "40px 20px",
                    borderTop: "1px solid #fde68a"
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

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

            </div>
        </>
    );
}