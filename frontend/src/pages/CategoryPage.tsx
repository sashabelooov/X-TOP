import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronDown,
  LayoutGrid,
  List,
  Heart,
  Clock,
  Star,
  Laptop,
  Headphones,
  Tv,
  Watch,
  Speaker,
  Camera,
  Gamepad2,
  Smartphone,
  ChevronLeft,
} from 'lucide-react';
import './CategoryPage.css';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
  storeName?: string;
  rating?: number;
  reviewCount?: number;
  timerHours?: number;
}

interface FilterCategory {
  name: string;
  count: number;
  checked: boolean;
}

interface SubCategory {
  name: string;
  icon: React.ReactNode;
}

const subCategories: SubCategory[] = [
  { name: 'Noutbuklar', icon: <Laptop size={32} /> },
  { name: 'Audio', icon: <Headphones size={32} /> },
  { name: 'TV', icon: <Tv size={32} /> },
  { name: 'iPad & iWatch', icon: <Watch size={32} /> },
  { name: 'Kalonkalar', icon: <Speaker size={32} /> },
  { name: 'Kamera', icon: <Camera size={32} /> },
  { name: 'Playstation', icon: <Gamepad2 size={32} /> },
  { name: 'Smartfonlar', icon: <Smartphone size={32} /> },
];

const initialFilterCategories: FilterCategory[] = [
  { name: 'Kompyuter', count: 11, checked: true },
  { name: 'Audio', count: 52, checked: false },
  { name: 'Klaviatura', count: 80, checked: false },
  { name: 'Sichqoncha', count: 26, checked: false },
  { name: 'Quloqchinlar', count: 26, checked: false },
  { name: 'TV', count: 98, checked: false },
  { name: 'Smarthome', count: 6, checked: false },
  { name: 'I watch', count: 13, checked: false },
];

const priceRanges = [
  { label: "0 - 500 000 so'm", value: '0-500000' },
  { label: "500 000 - 1 000 000 so'm", value: '500000-1000000' },
  { label: "1 000 000 - 2 000 000 so'm", value: '1000000-2000000' },
  { label: "2 000 000 - 10 000 000 so'm", value: '2000000-10000000' },
];

const colors = [
  { name: 'Ko\'k', color: '#3b82f6' },
  { name: 'Qora', color: '#1f2937' },
  { name: 'Kulrang', color: '#6b7280' },
  { name: 'Oq', color: '#f3f4f6' },
  { name: 'Yashil', color: '#10b981' },
  { name: 'Yashil ochiq', color: '#22c55e' },
];

const brands = [
  { name: 'Apple', count: 26 },
  { name: 'Samsung', count: 26 },
  { name: 'Dell', count: 26 },
  { name: 'Huawei', count: 26 },
  { name: 'Redmi', count: 26 },
];

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    rating: 4.7,
    reviewCount: 1448,
    timerHours: 72,
  },
  {
    id: '2',
    name: 'RGB Gaming Keyboard',
    price: 750000,
    originalPrice: 950000,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Apple Optom uz',
    rating: 4.7,
    reviewCount: 1448,
    timerHours: 72,
  },
  {
    id: '3',
    name: 'Canon EOS Camera',
    price: 4500000,
    originalPrice: 5200000,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    discount: 15,
    storeName: 'Brand Store',
    rating: 4.9,
    reviewCount: 892,
    timerHours: 48,
  },
  {
    id: '4',
    name: 'Gaming Monitor 27"',
    price: 2800000,
    originalPrice: 3500000,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop',
    discount: 20,
    storeName: 'Brand Store',
    rating: 4.6,
    reviewCount: 567,
    timerHours: 72,
  },
  {
    id: '5',
    name: 'Wireless Headphones',
    price: 650000,
    originalPrice: 850000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    discount: 25,
    storeName: 'Audio Store',
    rating: 4.8,
    reviewCount: 2341,
    timerHours: 24,
  },
  {
    id: '6',
    name: 'Smart Watch Pro',
    price: 1200000,
    originalPrice: 1500000,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
    discount: 20,
    storeName: 'Brand Store',
    rating: 4.5,
    reviewCount: 1890,
    timerHours: 72,
  },
  {
    id: '7',
    name: 'PlayStation 5 Console',
    price: 8500000,
    originalPrice: 9500000,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
    discount: 10,
    storeName: 'Game Store',
    rating: 4.9,
    reviewCount: 3456,
    timerHours: 96,
  },
  {
    id: '8',
    name: 'Wireless Earbuds',
    price: 450000,
    originalPrice: 600000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    discount: 25,
    storeName: 'Apple Optom uz',
    rating: 4.7,
    reviewCount: 1567,
    timerHours: 48,
  },
  {
    id: '9',
    name: 'USB-C Hub Adapter',
    price: 180000,
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    discount: 30,
    storeName: 'Tech Store',
    rating: 4.4,
    reviewCount: 789,
    timerHours: 72,
  },
  {
    id: '10',
    name: 'Mechanical Keyboard',
    price: 890000,
    originalPrice: 1100000,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    discount: 20,
    storeName: 'Brand Store',
    rating: 4.6,
    reviewCount: 1234,
    timerHours: 36,
  },
  {
    id: '11',
    name: 'Portable SSD 1TB',
    price: 1100000,
    originalPrice: 1400000,
    image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=400&fit=crop',
    discount: 22,
    storeName: 'Tech Store',
    rating: 4.8,
    reviewCount: 2100,
    timerHours: 72,
  },
  {
    id: '12',
    name: 'Webcam HD 1080p',
    price: 320000,
    originalPrice: 420000,
    image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&h=400&fit=crop',
    discount: 25,
    storeName: 'Brand Store',
    rating: 4.3,
    reviewCount: 567,
    timerHours: 48,
  },
  {
    id: '13',
    name: 'Gaming Mouse RGB',
    price: 280000,
    originalPrice: 380000,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    discount: 26,
    storeName: 'Game Store',
    rating: 4.5,
    reviewCount: 1890,
    timerHours: 24,
  },
  {
    id: '14',
    name: 'Laptop Stand Aluminum',
    price: 150000,
    originalPrice: 200000,
    image: 'https://images.unsplash.com/photo-1527443060795-0402a18106c2?w=400&h=400&fit=crop',
    discount: 25,
    storeName: 'Tech Store',
    rating: 4.6,
    reviewCount: 456,
    timerHours: 72,
  },
  {
    id: '15',
    name: 'Bluetooth Speaker',
    price: 520000,
    originalPrice: 680000,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    discount: 24,
    storeName: 'Audio Store',
    rating: 4.7,
    reviewCount: 1345,
    timerHours: 48,
  },
  {
    id: '16',
    name: 'Wireless Charger Pad',
    price: 180000,
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400&h=400&fit=crop',
    discount: 28,
    storeName: 'Tech Store',
    rating: 4.4,
    reviewCount: 678,
    timerHours: 36,
  },
  {
    id: '17',
    name: 'Smart TV 55 inch',
    price: 5200000,
    originalPrice: 6500000,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    discount: 20,
    storeName: 'Brand Store',
    rating: 4.8,
    reviewCount: 1234,
    timerHours: 72,
  },
  {
    id: '18',
    name: 'Tablet 10 inch',
    price: 2400000,
    originalPrice: 3000000,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    discount: 20,
    storeName: 'Apple Optom uz',
    rating: 4.7,
    reviewCount: 890,
    timerHours: 48,
  },
  {
    id: '19',
    name: 'Drone with Camera',
    price: 3800000,
    originalPrice: 4500000,
    image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400&h=400&fit=crop',
    discount: 16,
    storeName: 'Tech Store',
    rating: 4.6,
    reviewCount: 567,
    timerHours: 96,
  },
  {
    id: '20',
    name: 'VR Headset',
    price: 4200000,
    originalPrice: 5000000,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=400&fit=crop',
    discount: 16,
    storeName: 'Game Store',
    rating: 4.5,
    reviewCount: 345,
    timerHours: 72,
  },
];

const brandStoreProducts: Product[] = [
  {
    id: '101',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
  },
  {
    id: '102',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
  },
  {
    id: '103',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
  },
  {
    id: '104',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=400&fit=crop',
  },
  {
    id: '105',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
  },
  {
    id: '106',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
  },
  {
    id: '107',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
  },
  {
    id: '108',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
  },
];

const CategoryPage = () => {
  const [filterCategories, setFilterCategories] = useState(initialFilterCategories);
  const [selectedPriceRange, setSelectedPriceRange] = useState('500000-1000000');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(2);
  const [sortBy, setSortBy] = useState('featured');
  const [showCount, setShowCount] = useState(16);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const totalPages = 6;

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('uz-UZ').format(value) + " so'm";
  };

  const handleCategoryChange = (index: number) => {
    const updated = [...filterCategories];
    updated[index].checked = !updated[index].checked;
    setFilterCategories(updated);
  };

  const handleColorToggle = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < count ? '#f59e0b' : 'none'}
        color={i < count ? '#f59e0b' : '#d1d5db'}
      />
    ));
  };

  const renderPagination = () => {
    const pages = [];

    pages.push(
      <button
        key="prev"
        className="pagination-btn pagination-arrow"
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={18} />
      </button>
    );

    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-btn ${currentPage === i ? 'active' : ''}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    if (totalPages > 4) {
      pages.push(
        <span key="dots" className="pagination-dots">
          ...
        </span>
      );
    }

    if (totalPages > 3) {
      pages.push(
        <button
          key={totalPages}
          className={`pagination-btn ${currentPage === totalPages ? 'active' : ''}`}
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    pages.push(
      <button
        key="next"
        className="pagination-btn pagination-arrow"
        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={18} />
      </button>
    );

    return pages;
  };

  return (
    <div className="category-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <Link to="/" className="breadcrumb-link">Asosiy</Link>
          <ChevronRight size={16} />
          <Link to="/category" className="breadcrumb-link">Kategoriya</Link>
          <ChevronRight size={16} />
          <span className="breadcrumb-current">Elektronika</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="category-hero">
        <div className="category-hero-container">
          <div className="category-hero-content">
            <p className="hero-subtitle">Find the right keyboard for you</p>
            <h1 className="hero-title">
              Keyboards That Have<br />You Covered.
            </h1>
            <p className="hero-sale-label">Now on Sale</p>
            <p className="hero-discount">45% Flat</p>
          </div>
          <div className="category-hero-image">
            <div className="keyboard-mockup">
              <div className="keyboard-screen">
                <p className="screen-text">Total design freedom<br />for everyone.</p>
              </div>
              <div className="keyboard-keys"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Categories */}
      <div className="sub-categories">
        <div className="sub-categories-container">
          {subCategories.map((cat, index) => (
            <a href="#" key={index} className="sub-category-item">
              <div className="sub-category-icon">{cat.icon}</div>
              <span className="sub-category-name">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="category-main">
        <div className="category-main-container">
          {/* Mobile Filter Toggle */}
          <button
            className="mobile-filter-toggle"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            Filtrlash
            <ChevronDown size={18} className={isMobileFilterOpen ? 'rotated' : ''} />
          </button>

          {/* Filter Sidebar */}
          <aside className={`filter-sidebar ${isMobileFilterOpen ? 'open' : ''}`}>
            {/* Category Filter */}
            <div className="filter-section">
              <h3 className="filter-title">Filtrlash</h3>
              <div className="filter-options">
                {filterCategories.map((cat, index) => (
                  <label key={index} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={cat.checked}
                      onChange={() => handleCategoryChange(index)}
                    />
                    <span className="checkbox-custom"></span>
                    <span className="filter-label">{cat.name}</span>
                    <span className="filter-count">{cat.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="filter-section">
              <h3 className="filter-title">Narx bo'yicha</h3>
              <div className="filter-options">
                {priceRanges.map((range) => (
                  <label key={range.value} className="filter-radio">
                    <input
                      type="radio"
                      name="priceRange"
                      value={range.value}
                      checked={selectedPriceRange === range.value}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                    />
                    <span className="radio-custom"></span>
                    <span className="filter-label">{range.label}</span>
                  </label>
                ))}
              </div>
              <div className="price-inputs">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="price-input"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="price-input"
                />
              </div>
              <button className="filter-apply-btn">Chiqarish</button>
            </div>

            {/* Color Filter */}
            <div className="filter-section">
              <h3 className="filter-title">Rangi bo'yicha</h3>
              <div className="color-options">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    className={`color-btn ${selectedColors.includes(c.name) ? 'selected' : ''}`}
                    style={{ backgroundColor: c.color }}
                    onClick={() => handleColorToggle(c.name)}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="filter-section">
              <h3 className="filter-title">Brendi bo'yicha</h3>
              <div className="brand-search">
                <input type="text" placeholder="Brendni topish" className="brand-search-input" />
              </div>
              <div className="filter-options">
                {brands.map((brand) => (
                  <label key={brand.name} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand.name)}
                      onChange={() => handleBrandToggle(brand.name)}
                    />
                    <span className="checkbox-custom"></span>
                    <span className="filter-label">{brand.name}</span>
                    <span className="filter-count">{brand.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="filter-section">
              <h3 className="filter-title">Reyting bo'yicha</h3>
              <div className="rating-options">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="rating-option">
                    <input
                      type="radio"
                      name="rating"
                      checked={selectedRating === rating}
                      onChange={() => setSelectedRating(rating)}
                    />
                    <div className="rating-stars">{renderStars(rating)}</div>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Content */}
          <div className="products-content">
            {/* Toolbar */}
            <div className="products-toolbar">
              <div className="toolbar-left">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <LayoutGrid size={18} />
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={18} />
                </button>
                <div className="show-selector">
                  <span>Show: {showCount}</span>
                  <ChevronDown size={16} />
                  <select
                    value={showCount}
                    onChange={(e) => setShowCount(Number(e.target.value))}
                    className="show-select"
                  >
                    <option value={8}>8</option>
                    <option value={16}>16</option>
                    <option value={24}>24</option>
                    <option value={32}>32</option>
                  </select>
                </div>
              </div>
              <div className="toolbar-right">
                <div className="sort-dropdown">
                  <button
                    className="sort-btn"
                    onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                  >
                    Sort by: {sortBy === 'featured' ? 'Featured' : sortBy}
                    <ChevronDown size={16} />
                  </button>
                  {isSortDropdownOpen && (
                    <div className="sort-options">
                      <button onClick={() => { setSortBy('featured'); setIsSortDropdownOpen(false); }}>
                        Yangi qo'shilganlar
                      </button>
                      <button onClick={() => { setSortBy('rating'); setIsSortDropdownOpen(false); }}>
                        Yuqori reyting
                      </button>
                      <button onClick={() => { setSortBy('price-low'); setIsSortDropdownOpen(false); }}>
                        Chegirmadagilar
                      </button>
                      <button onClick={() => { setSortBy('price-high'); setIsSortDropdownOpen(false); }}>
                        Katta narx
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`products-grid ${viewMode}`}>
              {sampleProducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                  <div className="product-image-container">
                    {product.discount && (
                      <span className="product-badge discount">-{product.discount}%</span>
                    )}
                    <img src={product.image} alt={product.name} className="product-image" />
                    <button className="wishlist-btn" onClick={(e) => e.preventDefault()}>
                      <Heart size={18} />
                    </button>
                    {product.timerHours && (
                      <div className="product-timer">
                        <Clock size={12} />
                        <span>{product.timerHours} soat</span>
                      </div>
                    )}
                  </div>
                  <div className="product-info">
                    {product.storeName && (
                      <div className="product-store">
                        <span className="store-icon">🏪</span>
                        <span className="store-name">{product.storeName}</span>
                      </div>
                    )}
                    <h3 className="product-name">{product.name}</h3>
                    {product.originalPrice && (
                      <span className="product-original-price">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                    <span className="product-price">{formatPrice(product.price)}</span>
                    {product.rating && (
                      <div className="product-rating">
                        <Star size={14} fill="#f59e0b" color="#f59e0b" />
                        <span className="rating-value">{product.rating}</span>
                        {product.reviewCount && (
                          <span className="review-count">({product.reviewCount} sharhlar)</span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination">{renderPagination()}</div>
          </div>
        </div>
      </div>

      {/* Brand Store Section */}
      <section className="brand-store-section">
        <div className="brand-store-container">
          <h2 className="brand-store-title">Brand Storedan maxsus taklif</h2>
          <div className="brand-store-content">
            <div className="brand-store-grid">
              {brandStoreProducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="brand-product-card">
                  <div className="brand-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="brand-product-info">
                    <h4 className="brand-product-name">{product.name}</h4>
                    {product.originalPrice && (
                      <span className="brand-product-original">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                    <span className="brand-product-price">{formatPrice(product.price)}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="brand-store-promo">
              <div className="promo-social">
                <span>@usersocialname</span>
              </div>
              <div className="promo-phone">
                <p className="promo-label">Premium 3D Phone Mockup Included with PRO</p>
                <h3 className="promo-title">Phone 16 Pro</h3>
                <p className="promo-specs">
                  6.3 inch OLED Screen | Super Retina XDR display<br />
                  Dynamic Island | 1000 nits max brightness
                </p>
                <div className="promo-price-tag">Price $1500</div>
                <p className="promo-preorder">
                  Pre-order starting<br />
                  from <span className="promo-date">25th October</span>
                </p>
              </div>
              <div className="promo-phone-image">
                <img
                  src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=500&fit=crop"
                  alt="Phone 16 Pro"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
