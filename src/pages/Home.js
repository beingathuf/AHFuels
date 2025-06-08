import React from "react";
import { Link } from "react-router-dom";
import { Shield, Clock,Award, Users } from "lucide-react";
import serviceTools from "../assets/service-tools.gif";
import about from "../assets/logo.png";
import gallery from "../assets/gallery.gif";
import gallery1 from "../assets/1.jpg";
import gallery2 from "../assets/2.jpg";



import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="home-section">
        <div className="home-content-wrapper">
          <div className="home-content">
            <h1 className="home-title">
              Experience <span className="highlight">Excellence</span> in
              Automotive Care
            </h1>
            <p className="home-description">
              From detailing and servicing to complete vehicle care, our
              certified team at AH AUTO KING ensures your vehicle is treated
              with precision and passion.
            </p>
            <div className="button-wrapper">
              <Link to="/services">
                <button className="primary-button">View Our Services</button>
              </Link>
            </div>

            <div className="features-grid">
              <div className="feature-item">
                <Shield className="icon red-icon" size={24} />
                <span>Quality Guaranteed</span>
              </div>
              <div className="feature-item">
                <Clock className="icon red-icon" size={24} />
                <span>Fast Service</span>
              </div>
              <div className="feature-item">
                <Users className="icon red-icon" size={24} />
                <span>Expert Team</span>
              </div>
              <div className="feature-item">
                <Award className="icon red-icon" size={24} />
                <span>Best in Class</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-card">
          <div className="about-flex">
            <div className="about-image-wrapper">
              <div className="about-image-container">
                <img
                  src={about}
                  alt="AH Auto King Garage"
                  className="about-image"
                />
              </div>
            </div>

            <div className="about-text-content">
              <h2 className="about-heading">About AH AUTO KING</h2>
              <p className="about-paragraph">
                At AH AUTO KING, we are driven by a passion for automobiles and
                a dedication to excellence. Our garage is equipped with
                top-of-the-line tools and premium-grade products to ensure the
                highest standard of vehicle care. Our experienced technicians
                bring precision, skill, and professionalism to every service we
                offer.
              </p>

              <div className="about-why-us">
                <h3 className="why-us-heading">What Sets Us Apart?</h3>
                <ul className="why-us-list">
                  <li className="why-us-item">
                    <span className="check-icon">✔</span>
                    High-quality detailing and service products
                  </li>
                  <li className="why-us-item">
                    <span className="check-icon">✔</span>
                    Advanced diagnostic and servicing equipment
                  </li>
                  <li className="why-us-item">
                    <span className="check-icon">✔</span>
                    Skilled and experienced automotive technicians
                  </li>
                  <li className="why-us-item">
                    <span className="check-icon">✔</span>
                    Customer-first approach with attention to detail
                  </li>
                  <li className="why-us-item">
                    <span className="check-icon">✔</span>
                    Reliable, efficient, and transparent service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="overview-row">
        {/* Services Overview Card */}
        <div className="services-card">
          <img
            src={serviceTools}
            alt="Auto Services Tools"
            className="overview-icon"
          />
          <h2 className="overview-title">Our Premium Services</h2>
          <p className="overview-description">
            From routine maintenance to complete detailing, our team of
            experienced professionals provides comprehensive auto care services.
          </p>
          <ul className="overview-list">
            <li> Detailing (Interior & Exterior)</li>
            <li> Engine Diagnostics</li>
            <li> Car Wash & Vacuuming</li>
            <li> AC Service, Polishing, and more</li>
          </ul>
          <Link to="/services" className="overview-link">
            Explore Full Services →
          </Link>
        </div>

        {/* Gallery Overview Card */}
        <div className="services-card">
          <img
            src={gallery}
            alt="Gallery Preview"
            className="overview-icon"
          />
          <h2 className="overview-title">Gallery Overview</h2>
          <p className="overview-description">
            Take a look at some of our finest detailing, paint jobs, and service
            transformations. We take pride in every vehicle that enters our
            garage.
          </p>
          <div className="gallery-preview-grid">
            <img
              src={gallery1}
              alt="Gallery 1"
            />
            <img
              src={gallery2}
              alt="Gallery 2"
            />
          </div>
          <Link to="/gallery" className="overview-link">
            View Full Gallery →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
