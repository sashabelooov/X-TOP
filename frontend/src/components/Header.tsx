import { Clock, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-nav">
          <span className="header-link inactive">Biz haqimizda</span>
          <span className="header-link inactive">Yetkazib berish</span>
          <span className="header-link inactive">To'lovlar tizimi</span>
          <span className="header-link inactive">Bonuslar</span>
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
