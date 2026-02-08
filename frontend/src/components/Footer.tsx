import { Link } from 'react-router-dom';
import { MapPin, Headphones, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-x">X</span>
            <span className="footer-logo-top">top</span>
          </Link>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={16} />
              <span>Address: 5171 W Campbell Ave</span>
            </li>
            <li>
              <Headphones size={16} />
              <span>Call Us: (+91) - 540-025-124553</span>
            </li>
            <li>
              <Mail size={16} />
              <span>Email: sale@Nest.com</span>
            </li>
            <li>
              <Clock size={16} />
              <span>Hours: 10:00 - 18:00, Mon - Sat</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Support</h3>
          <p className="footer-text">Toshkent, O'zbekiston</p>
          <p className="footer-text">exclusive@gmail.com</p>
          <p className="footer-text">+88015-88888-9999</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Account</h3>
          <ul className="footer-links">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><Link to="/category">Shop</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Link</h3>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section footer-app">
          <h3 className="footer-title">Download App</h3>
          <p className="footer-app-text">Save $3 with App New User Only</p>
          <div className="footer-app-content">
            <div className="qr-code">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://xtop.uz" alt="QR Code" />
            </div>
            <div className="app-stores">
              <a href="#" className="store-badge">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
              </a>
              <a href="#" className="store-badge">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
              </a>
            </div>
          </div>
          <div className="footer-social">
            <a href="#" className="social-link"><Facebook size={18} /></a>
            <a href="#" className="social-link"><Twitter size={18} /></a>
            <a href="#" className="social-link"><Instagram size={18} /></a>
            <a href="#" className="social-link"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© Copyright ui.jahongiorov 2026. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
