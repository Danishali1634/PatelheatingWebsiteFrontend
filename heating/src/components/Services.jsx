import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Flame, Snowflake, Droplets, Wifi, Wind, Zap, RefreshCw, Thermometer, ShieldCheck, Activity } from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        id: 1,
        title: 'Furnace',
        desc: 'High-efficiency furnace installation and repair to keep you warm.',
        icon: <Flame size={40} />,
        path: '/services/heating'
    },
    {
        id: 2,
        title: 'Air Conditioner',
        desc: 'Expert AC solutions for superior cooling during hot summers.',
        icon: <Snowflake size={40} />,
        path: '/services/cooling'
    },
    {
        id: 3,
        title: 'Heat Pump',
        desc: 'Versatile heating and cooling for year-round energy savings.',
        icon: <Zap size={40} />,
        path: '/services/heat-pump'
    },
    {
        id: 4,
        title: 'Tankless Water Heater',
        desc: 'Endless hot water on demand with space-saving efficiency.',
        icon: <Droplets size={40} />,
        path: '/services/tankless-water-heater'
    },
    {
        id: 5,
        title: 'Hot Water Tank',
        desc: 'Reliable hot water storage solutions for any household size.',
        icon: <Thermometer size={40} />,
        path: '/services/hot-water-tank'
    },
    {
        id: 6,
        title: 'Humidifier',
        desc: 'Balance indoor humidity for better health and comfort.',
        icon: <Wind size={40} />,
        path: '/services/humidifier'
    },
    {
        id: 7,
        title: 'Thermostat',
        desc: 'Smart climate control for convenience and energy reduction.',
        icon: <Wifi size={40} />,
        path: '/services/thermostat'
    },
    {
        id: 8,
        title: 'Gas Line',
        desc: 'Certified gas line installation for appliances.',
        icon: <Flame size={40} />, // Reusing Flame or could use a different icon if available
        path: '/services/gas-line'
    },
    {
        id: 9,
        title: 'Air Handler',
        desc: 'Optimize air circulation and quality throughout your home.',
        icon: <Activity size={40} />,
        path: '/services/air-handler'
    },
    {
        id: 10,
        title: 'HRV System',
        desc: 'Fresh air ventilation that retains your home’s heat.',
        icon: <RefreshCw size={40} />,
        path: '/services/hrv'
    },
    {
        id: 11,
        title: 'ERV System',
        desc: 'Balanced ventilation with humidity control for all seasons.',
        icon: <ShieldCheck size={40} />,
        path: '/services/erv'
    },
    {
        id: 12,
        title: 'Combie Boiler System',
        desc: 'Efficient hybrid heating and hot water for small homes.',
        icon: <Droplets size={40} />,
        path: '/services/combi-boiler'
    }
];

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Our HVAC Services Brampton | Heating & Cooling Solutions</title>
                <meta name="description" content="Explore our wide range of HVAC services including furnace repair, AC installation, heat pumps, tankless water heaters, and more in Brampton & GTA." />
                <meta name="keywords" content="HVAC services Brampton, heating repair, cooling installation, water heater service, gas line fitting, Patel Heating services" />
            </Helmet>
            <section className="section-padding bg-section-alt">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title" style={{ color: '#ff7216' }}>Our Services</h2>
                        <div className="divider-center bg-red"></div>
                    </div>

                    <div className="services-grid">
                        {servicesData.map(service => (
                            <div key={service.id} className="service-card-reveal">
                                <Link to={service.path} className="card-inner" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%', height: '100%' }}>
                                    <div className="icon-wrapper" style={{ color: '#ff7216' }}>
                                        {service.icon}
                                    </div>
                                    <h3>{service.title}</h3>
                                    <div className="reveal-content">
                                        <p>{service.desc}</p>

                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
