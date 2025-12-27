import React from 'react';
import { FaFire, FaSnowflake, FaWater, FaWifi, FaFan, FaTint, FaBurn } from 'react-icons/fa';
import './Services.css';

const servicesData = [
    {
        id: 1,
        title: 'Heating',
        desc: 'Installation, repair, and maintenance for all furnace makes and models.',
        icon: <FaFire />
    },
    {
        id: 2,
        title: 'Cooling',
        desc: 'Expert AC repair and installation to keep you cool during summer.',
        icon: <FaSnowflake />
    },
    {
        id: 3,
        title: 'Water Heaters',
        desc: 'Tankless & standard water heaters for endless hot water supply.',
        icon: <FaWater />
    },
    {
        id: 4,
        title: 'Thermostats',
        desc: 'Smart Wi-Fi thermostats for precision home climate control.',
        icon: <FaWifi />
    },
    {
        id: 5,
        title: 'Air Quality',
        desc: 'HRV, ERV, and filtration systems for healthier indoor air.',
        icon: <FaFan />
    },
    {
        id: 6,
        title: 'Humidifiers',
        desc: 'Whole-home humidifiers to protect your health and furniture.',
        icon: <FaTint />
    },
    {
        id: 7,
        title: 'Gas Lines',
        desc: 'Safe and professional gas line installation for BBQs and appliances.',
        icon: <FaBurn />
    }
];

const Services = () => {
    return (
        <section className="section-padding bg-section-alt">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">Our Services</h2>
                    <div className="divider-center bg-red"></div>
                </div>

                <div className="services-grid">
                    {servicesData.map(service => (
                        <div key={service.id} className="service-card-reveal">
                            <div className="card-inner">
                                <div className="icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <div className="reveal-content">
                                    <p>{service.desc}</p>
                                    <span className="read-more">Learn More &rarr;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
