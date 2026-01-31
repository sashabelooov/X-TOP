import { Search, Heart, ShoppingCart, User, LayoutGrid } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-left">
          <a href="/" className="logo">
            <span className="logo-x">X</span>
            <span className="logo-top">top</span>
          </a>
          <button className="catalog-btn">
            <LayoutGrid size={20} />
            <span>Katalog</span>
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Izlash uchun mahsulot nomini kiriting"
            className="search-input"
          />
          <button className="search-btn">
            <Search size={20} />
          </button>
        </div>

        <div className="nav-actions">
          <button className="nav-action-btn">
            <Heart size={24} />
          </button>
          <button className="nav-action-btn">
            <ShoppingCart size={24} />
          </button>
          <button className="nav-action-btn login-btn">
            <User size={20} />
            <span>Kirish</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
