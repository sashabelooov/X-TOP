import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  LayoutGrid,
  Smartphone,
  Laptop,
  Tv,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Shirt,
  Home,
  Dumbbell,
  Baby,
  Sparkles,
  LogOut,
  ChevronDown,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Navigation.css';

interface Category {
  name: string;
  slug: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { name: 'Elektronika', slug: 'elektronika', icon: <Laptop size={20} /> },
  { name: 'Smartfonlar', slug: 'smartfonlar', icon: <Smartphone size={20} /> },
  { name: 'TV va Audio', slug: 'tv-audio', icon: <Tv size={20} /> },
  { name: 'Quloqchinlar', slug: 'quloqchinlar', icon: <Headphones size={20} /> },
  { name: 'Soatlar', slug: 'soatlar', icon: <Watch size={20} /> },
  { name: 'Kameralar', slug: 'kameralar', icon: <Camera size={20} /> },
  { name: "O'yinlar", slug: 'oyinlar', icon: <Gamepad2 size={20} /> },
  { name: 'Kiyimlar', slug: 'kiyimlar', icon: <Shirt size={20} /> },
  { name: 'Uy-ro\'zg\'or', slug: 'uy-rozgor', icon: <Home size={20} /> },
  { name: 'Sport', slug: 'sport', icon: <Dumbbell size={20} /> },
  { name: 'Bolalar uchun', slug: 'bolalar-uchun', icon: <Baby size={20} /> },
  { name: 'Aksessuarlar', slug: 'aksessuarlar', icon: <Sparkles size={20} /> },
];

const Navigation = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="logo">
            <span className="logo-x">X</span>
            <span className="logo-top">top</span>
          </Link>
          <div className="catalog-wrapper" ref={dropdownRef}>
            <button
              className={`catalog-btn ${isDropdownOpen ? 'active' : ''}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <LayoutGrid size={20} />
              <span>Katalog</span>
            </button>
            {isDropdownOpen && (
              <div className="catalog-dropdown">
                <div className="catalog-dropdown-grid">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/category/${category.slug}`}
                      className="catalog-dropdown-item"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="catalog-dropdown-icon">{category.icon}</span>
                      <span className="catalog-dropdown-name">{category.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
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

          {isAuthenticated && user ? (
            <div className="user-menu-wrapper" ref={userMenuRef}>
              <button
                className="nav-action-btn user-btn"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <User size={20} />
                <span className="user-email">{user.email}</span>
                <ChevronDown size={16} className={`chevron ${isUserMenuOpen ? 'open' : ''}`} />
              </button>
              {isUserMenuOpen && (
                <div className="user-dropdown">
                  <div className="user-dropdown-header">
                    <span className="user-name">{user.full_name || 'Foydalanuvchi'}</span>
                    <span className="user-email-small">{user.email}</span>
                  </div>
                  <div className="user-dropdown-divider" />
                  <button className="user-dropdown-item logout" onClick={handleLogout}>
                    <LogOut size={18} />
                    <span>Chiqish</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="nav-action-btn login-btn">
              <User size={20} />
              <span>Kirish</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
