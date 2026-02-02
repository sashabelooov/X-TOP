import { Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-nav">
          <Link to="/about" className="header-link">Biz haqimizda</Link>
          <a href="#" className="header-link">Yetkazib berish</a>
          <Link to="/payment" className="header-link">To'lovlar tizimi</Link>
          <a href="#" className="header-link">Bonuslar</a>
        </nav>
        <div className="header-info">
          <div className="header-time">
            <Clock size={16} />
            <span>Ish vaqti: 9:00 - 18:00</span>
          </div>
          <a href="tel:+998909680000" className="header-phone">
            <Phone size={16} />
            <span>+998 90 968 00 00</span>
          </a>
          <a href="#" className="header-callback">Qo'ng'iroq qilish</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
