import React from 'react';
import {
  Wrench,
  PenTool as Tool,
  Droplet,
  BarChart4,
  Gauge,
  Shield,
  Battery,
  Truck,
  Disc2
} from 'lucide-react';

import './Services.css';

const services = [
  {
    id: 1,
    title: "Premium Detailing",
    description:
      "Our full-service detailing includes interior deep cleaning, exterior wash, clay bar treatment, polishing, and waxing to restore your vehicle's showroom shine.",
    icon: <Droplet className="icon" />,
    details: [
      "Exterior hand wash and dry",
      "Clay bar treatment",
      "Paint correction and polishing",
      "Interior deep cleaning",
      "Leather conditioning",
      "Engine bay detailing",
    ],
  },
  {
    id: 2,
    title: "Routine Maintenance",
    description:
      "Keep your vehicle running smoothly with our comprehensive maintenance services, from oil changes to fluid checks and filter replacements.",
    icon: <Wrench className="icon" />,
    details: [
      "Oil and filter changes",
      "Fluid checks and top-ups",
      "Air filter replacement",
      "Cabin filter replacement",
      "Tire rotation and balancing",
      "Multi-point inspection",
    ],
  },
  {
    id: 3,
    title: "Engine Diagnostics",
    description:
      "Our state-of-the-art diagnostic equipment identifies issues with precision, allowing our technicians to recommend the right repairs for your vehicle.",
    icon: <BarChart4 className="icon" />,
    details: [
      "Check engine light diagnosis",
      "Computer system scanning",
      "Performance testing",
      "Emissions system checks",
      "Electrical system diagnosis",
      "Comprehensive reporting",
    ],
  },
  {
    id: 4,
    title: "Brake Services",
    description:
      "Ensure your safety with our complete brake services, including inspection, pad replacement, rotor resurfacing, and hydraulic system maintenance.",
    icon: <Shield className="icon" />,
    details: [
      "Brake pad replacement",
      "Rotor resurfacing/replacement",
      "Brake fluid flush",
      "Caliper rebuilding/replacement",
      "Brake line inspection/repair",
      "ABS system diagnosis",
    ],
  },
  {
    id: 5,
    title: "Performance Upgrades",
    description:
      "Enhance your vehicle's performance with our professional upgrades, from exhaust systems to ECU tuning and suspension modifications.",
    icon: <Gauge className="icon" />,
    details: [
      "ECU tuning and remapping",
      "Exhaust system upgrades",
      "Intake system modifications",
      "Suspension enhancements",
      "Brake system upgrades",
      "Custom fabrication",
    ],
  },
  {
    id: 6,
    title: "Tire Services",
    description:
      "Our comprehensive tire services include mounting, balancing, alignment, and repairs to ensure optimal performance and safety.",
    icon: <Disc2 className="icon" />,
    details: [
      "Tire mounting and balancing",
      "Wheel alignment for all vehicles",
      "Tire rotation",
      "Puncture repairs",
      "TPMS service",
      "Seasonal tire changeovers",
    ],
  },
  {
    id: 7,
    title: "Wheel Balancing for Trucks",
    description:
      "Specialized wheel balancing service for trucks to ensure stability, safety, and tire longevity on heavy vehicles.",
    icon: <Truck className="icon" />,
    details: [
      "Truck wheel balancing",
      "Heavy vehicle tire inspection",
      "Vibration diagnostics",
      "Alignment checks",
      "Suspension assessment",
    ],
  },
  {
    id: 8,
    title: "Electrical Systems",
    description:
      "From battery replacements to complex electrical diagnostics, our technicians can solve electrical issues affecting modern vehicles.",
    icon: <Battery className="icon" />,
    details: [
      "Battery testing and replacement",
      "Alternator diagnosis/replacement",
      "Starter motor service",
      "Wiring repairs",
      "Light and accessory installation",
      "Computer system updates",
    ],
  },
  {
    id: 9,
    title: "Transmission Service",
    description:
      "Maintain your transmission with our comprehensive services including fluid changes, filter replacements, and complete rebuilds when necessary.",
    icon: <Tool className="icon" />,
    details: [
      "Transmission fluid changes",
      "Filter replacements",
      "Clutch repairs",
      "Differential service",
      "Transmission rebuilds",
      "Transfer case maintenance",
    ],
  },
];

const Services = () => {
  return (
    <section id="services-detail" className="services-section">
      <div className="container">
        <div className="header">
          <h2>Our Complete Services</h2>
          <p>
            At AH AUTO KING, we provide a comprehensive range of services to keep your vehicle in peak
            condition. Our skilled technicians use the latest tools and techniques to deliver exceptional
            results.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                {service.icon}
                <h3>{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
              <ul className="service-details">
                {service.details.map((detail, index) => (
                  <li key={index}>
                    <span className="bullet">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
