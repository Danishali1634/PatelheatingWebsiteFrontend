import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaBars, FaTimes, FaChevronDown, FaMoon, FaSun } from 'react-icons/fa';
import './Header.css';
// import brandLogo from '../../assets/brandLogo.png';
import brandLogo from '../assets/brandLogo.png'
import { AiOutlineCloseCircle } from "react-icons/ai"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const location = useLocation();

    const isServicesActive = location.pathname.startsWith('/services/');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Set initial theme
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
            {/* Top Bar - RED */}
            <div className="top-bar">
                <div className="container top-bar-inner">
                    <div className="socials">
                    </div>
                    <div className="top-right-group">
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaPhoneAlt className="icon-white" />
                                <span style={{ fontSize: 20, fontWeight: 800 }}>+1 (647) 984-7874</span>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="icon-white" />
                                <span style={{ fontSize: 20, fontWeight: 800 }}>info@patelheating.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="main-nav">
                <div className="container nav-inner">
                    <Link to="/" className="logo-link">
                        <div className="brand-logo">
                            <img src={brandLogo} alt='Logo image' style={{ height: '70px' }} />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="desktop-menu">
                        <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink></li>
                        <li
                            className="dropdown-trigger"
                            onMouseEnter={() => setServicesDropdownOpen(true)}
                            onMouseLeave={() => setServicesDropdownOpen(false)}
                        >


                            <span className={`nav-link ${servicesDropdownOpen || isServicesActive ? 'active-link' : ''}`}>Services <FaChevronDown size={10} /></span>
                            <ul className={`dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
                                <div className="dropdown-section-header">Heating & Cooling</div>
                                <li><NavLink to="/services/heating">Furnace</NavLink></li>
                                <li><NavLink to="/services/heat-pump">Heat Pump</NavLink></li>
                                <li><NavLink to="/services/cooling">Air Conditioner</NavLink></li>
                                <li><NavLink to="/services/air-handler">Air Handler</NavLink></li>

                                <div className="dropdown-section-header">Water Solutions</div>
                                <li><NavLink to="/services/combi-boiler">Combie Boiler System</NavLink></li>
                                <li><NavLink to="/services/tankless-water-heater">Tankless Water Heater</NavLink></li>
                                <li><NavLink to="/services/hot-water-tank">Hot Water Tank</NavLink></li>

                                <div className="dropdown-section-header">Air Quality</div>
                                <li><NavLink to="/services/humidifier">Humidifier</NavLink></li>
                                <li><NavLink to="/services/hrv">HRV (Heat Recovery)</NavLink></li>
                                <li><NavLink to="/services/erv">ERV (Energy Recovery)</NavLink></li>

                                <div className="dropdown-section-header">Support & Other</div>
                                <li><NavLink to="/services/gas-line">Gas Line</NavLink></li>
                                <li><NavLink to="/services/thermostat">Thermostat</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/reviews" className={({ isActive }) => (isActive ? 'active-link' : '')}>Reviews</NavLink></li>
                        <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'active-link' : '')}>Blog</NavLink></li>
                        <li><NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink></li>
                    </ul>

                    <div className="nav-actions">
                        <Link to="/contact" className="btn btn-primary nav-btn">Get a Quote</Link>
                    </div>

                    <div className="mobile-actions">
                        <a href="tel:+16479847874" className="mobile-phone-link">
                            <FaPhoneAlt />
                            <span>(647) 984-7874</span>
                        </a>
                        <div className="mobile-toggle" onClick={toggleMobileMenu}>
                            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-links">
                    <div style={{ position: 'absolute', top: 10, right: 10 }} title='Close' onClick={toggleMobileMenu}><AiOutlineCloseCircle color='#ff7216' size={40} /></div>
                    <span className='' />
                    {/* <li className="theme-toggle-mobile" onClick={toggleTheme}>
                        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'} {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </li> */}
                    <li onClick={toggleMobileMenu}><NavLink to="/" end>Home</NavLink></li>

                    <li className="mobile-dropdown-header">Our Services</li>

                    <div className="mobile-service-category">
                        <span className="category-label">Heating & Cooling</span>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/services/heating">Furnace</NavLink></li>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/services/heat-pump">Heat Pump</NavLink></li>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/services/cooling">Air Conditioner</NavLink></li>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/services/air-handler">Air Handler</NavLink></li>
                    </div>

                    <div className="mobile-service-category">
                        <span className="category-label">Water Solutions</span>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/services/combi-boiler">Combie Boiler System</NavLink></li>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/services/tankless-water-heater">Tankless Water Heater</NavLink></li>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/services/hot-water-tank">Hot Water Tank</NavLink></li>
                    </div>

                    <div className="mobile-service-category">
                        <span className="category-label">Air Quality</span>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/services/humidifier">Humidifier</NavLink></li>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/services/hrv">HRV (Heat Recovery)</NavLink></li>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/services/erv">ERV (Energy Recovery)</NavLink></li>
                    </div>

                    <div className="mobile-service-category">
                        <span className="category-label">Support & Other</span>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/services/gas-line">Gas Line</NavLink></li>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/services/thermostat">Thermostat</NavLink></li>
                    </div>

                    <div className="mobile-service-category" style={{ marginTop: '20px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                        <span className="category-label">Quick Links</span>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/reviews">Reviews</NavLink></li>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/blog">Blog</NavLink></li>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/about-us">About Us</NavLink></li>
                        <li onClick={toggleMobileMenu} className="sub-link"><NavLink to="/contact">Contact</NavLink></li>
                    </div>
                </ul>
            </div>
        </header>
    );
};

export default Header;
