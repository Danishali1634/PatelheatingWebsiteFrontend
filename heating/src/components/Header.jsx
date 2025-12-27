import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaBars, FaTimes, FaChevronDown, FaMoon, FaSun } from 'react-icons/fa';
import './Header.css';
// import brandLogo from '../../assets/brandLogo.png';
import brandLogo from '../assets/brandLogo.png'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [theme, setTheme] = useState('light');

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
                        <a href="https://www.facebook.com/Patel-Heating-and-Air-Conditioning-481166902281003/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/patel_heating_air_conditioning/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className="top-right-group">
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaPhoneAlt className="icon-white" />
                                <span>+1 (647) 984-7874</span>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="icon-white" />
                                <span>142 Thornbush Blvd, Brampton, ON</span>
                            </div>
                        </div>
                        {/* Theme Toggle in Top Bar for access */}
                        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="main-nav">
                <div className="container nav-inner">
                    <Link to="/" className="logo-link">
                        <div className="brand-logo">
                            <img src={brandLogo} alt='image' />
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
                            <span className={`nav-link ${servicesDropdownOpen ? 'active-link' : ''}`}>Services <FaChevronDown size={10} /></span>
                            <ul className={`dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
                                <li><NavLink to="/services/cooling">Cooling</NavLink></li>
                                <li><NavLink to="/services/furnace">Furnace</NavLink></li>
                                <li><NavLink to="/services/heat-pump">Heat Pump</NavLink></li>
                                <li><NavLink to="/services/water-heater">Water Heater</NavLink></li>
                                <li><NavLink to="/services/air-handler">Air Handler</NavLink></li>
                                <li><NavLink to="/services/humidifier">Humidifier</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'active-link' : '')}>Blog</NavLink></li>
                        <li><NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink></li>
                    </ul>

                    <div className="nav-actions">
                        <Link to="/contact" className="btn btn-primary nav-btn">Get a Quote</Link>
                    </div>

                    <div className="mobile-toggle" onClick={toggleMobileMenu}>
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-links">
                    <li onClick={toggleMobileMenu}><NavLink to="/" end>Home</NavLink></li>
                    <li className="mobile-dropdown-header">Services</li>
                    <li onClick={toggleMobileMenu} className="sub-link"><Link to="/services/cooling">Cooling</Link></li>
                    <li onClick={toggleMobileMenu} className="sub-link"><Link to="/services/furnace">Heating</Link></li>
                    <li onClick={toggleMobileMenu}><NavLink to="/blog">Blog</NavLink></li>
                    <li onClick={toggleMobileMenu}><NavLink to="/about-us">About</NavLink></li>
                    <li onClick={toggleMobileMenu}><NavLink to="/contact">Contact</NavLink></li>
                    <li className="theme-toggle-mobile" onClick={toggleTheme}>
                        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'} {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
