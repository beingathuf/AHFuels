import React from "react";
import "./Footer.css";
import { MapPin } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo & About */}
          <div>
            <Link to="/" className="footer-logo flex items-center">
              <img
                src={logo}
                alt="AH AUTO KING Logo"
                className="h-13 w-auto mr-2"
              />
            </Link>
            <p className="footer-description">
              Providing premium automotive services with expertise and care.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-list">
              <li>
                <Link to="/services">Premium Detailing</Link>
              </li>
              <li>
                <Link to="/services">Routine Maintenance</Link>
              </li>
              <li>
                <Link to="/services">Engine Diagnostics</Link>
              </li>
              <li>
                <Link to="/services">Brake Services</Link>
              </li>
              <li>
                <Link to="/services">Performance Upgrades</Link>
              </li>
              <li>
                <Link to="/services">Electrical Systems</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-heading">Contact Info</h3>
            <address className="footer-address">
              <a
                href="https://www.google.com/maps?q=AH+Fuels+%26+Services,+Nalapad+Highway+King,+Opp.+RTO+Checkpost,+Thalapady"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-location-link"
              >
                <div className="location-container">
                  <MapPin size={18} className="map-icon" />
                  <div>
                    <p className="location-name">
                      AH Fuels & Services, Nalapad Highway King
                    </p>
                    <p className="location-address">
                      Opp. RTO Checkpost, Thalapady
                    </p>
                    <small className="map-note">
                      Tap to open in Google Maps
                    </small>
                  </div>
                </div>
              </a>

              <div className="contact-details">
                <p>
                  Phone: <a href="tel:+919520338902">+91 9520338902</a>
                </p>
                <p>
                  Office: <a href="tel:+917411972999">+91 7411972999</a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:ahautoking@gmail.com">ahautoking@gmail.com</a>
                </p>
              </div>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} AH Auto King. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
