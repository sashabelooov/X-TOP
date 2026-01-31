import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronLeft,
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Heart,
  Clock,
} from 'lucide-react';
import './ProductDetailPage.css';

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

interface ColorOption {
  name: string;
  color: string;
}

const productImages = [
  'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?w=600&h=600&fit=crop',
];

const colorOptions: ColorOption[] = [
  { name: 'Oq', color: '#ffffff' },
  { name: 'Yashil', color: '#166534' },
  { name: "Ko'k", color: '#1e3a5f' },
];

const sizeOptions = ['Small', 'Medium', 'Large'];

const similarProducts: Product[] = [
  {
    id: '101',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    rating: 4.7,
    reviewCount: 1448,
    timerHours: 72,
  },
  {
    id: '102',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Apple',
    rating: 4.7,
    reviewCount: 1448,
    timerHours: 72,
  },
  {
    id: '103',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    rating: 4.7,
    reviewCount: 1448,
    timerHours: 72,
  },
  {
    id: '104',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    rating: 4.7,
    reviewCount: 1448,
    timerHours: 72,
  },
  {
    id: '105',
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
    id: '106',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    rating: 4.7,
    reviewCount: 1448,
    timerHours: 72,
  },
];

const brandStoreProducts: Product[] = [
  {
    id: '201',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
  },
  {
    id: '202',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
  },
  {
    id: '203',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
  },
  {
    id: '204',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=400&fit=crop',
  },
  {
    id: '205',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
  },
  {
    id: '206',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
  },
  {
    id: '207',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
  },
  {
    id: '208',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
  },
];

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);
  const similarScrollRef = useRef<HTMLDivElement>(null);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('uz-UZ').format(value);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const scrollSimilar = (direction: 'left' | 'right') => {
    if (similarScrollRef.current) {
      const scrollAmount = 300;
      similarScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <Link to="/" className="breadcrumb-link">Asosiy</Link>
          <ChevronRight size={16} />
          <Link to="/category" className="breadcrumb-link">Gadjetlar</Link>
          <ChevronRight size={16} />
          <span className="breadcrumb-current">Havic HV G-92 Gamepad</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="product-section">
        <div className="product-section-container">
          {/* Product Gallery */}
          <div className="product-gallery">
            <div className="gallery-thumbnails">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={img} alt={`Product view ${index + 1}`} />
                </button>
              ))}
            </div>
            <div className="gallery-main">
              <img src={productImages[selectedImage]} alt="Product main view" />
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1 className="product-title">Havic HV G-92 Gamepad</h1>

            <div className="product-rating">
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <span className="rating-value">4.7</span>
              <span className="rating-count">(1448 sharhlar)</span>
            </div>

            <div className="product-price-row">
              <span className="product-price">{formatPrice(760000)}</span>
              <span className="product-original-price">{formatPrice(960000)}</span>
              <span className="product-discount">-40%</span>
            </div>

            <p className="product-description">
              PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy
              bubble free install & mess free removal Pressure sensitive.
            </p>

            <div className="product-divider"></div>

            {/* Color Selector */}
            <div className="product-option">
              <label className="option-label">Rangini tanlang</label>
              <div className="color-options">
                {colorOptions.map((color, index) => (
                  <button
                    key={color.name}
                    className={`color-btn ${selectedColor === index ? 'selected' : ''}`}
                    style={{ backgroundColor: color.color }}
                    onClick={() => setSelectedColor(index)}
                    title={color.name}
                  >
                    {selectedColor === index && (
                      <span className="color-check">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="product-option">
              <label className="option-label">O'lchamini tanlang</label>
              <div className="size-options">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="product-actions">
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus size={18} />
                </button>
                <span className="quantity-value">{quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus size={18} />
                </button>
              </div>
              <button className="add-to-cart-btn">
                <ShoppingCart size={20} />
                <span>Savatga qo'shish</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="product-description-section">
        <div className="description-container">
          <h2 className="description-title">Mahsulot haqida ma'lumot</h2>
          <p className="description-text">
            The Apple iPhone 15 Pro Max features the groundbreaking A17 Pro chip, a customizable Action button, and a powerful iPhone camera system. Forged in titanium, it boasts
            a strong and light aerospace-grade titanium design with a textured matte-glass back. iPhone 15 Pro is the first iPhone to feature an aerospace-grade titanium design, using
            the same alloy that spacecraft use for missions to Mars. Titanium has one of the best strength-to-weight ratios of any metal, making these our lightest Pro models ever.
            You'll notice the difference the moment you pick one up.
          </p>

          <div className="description-image">
            <img
              src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=500&fit=crop"
              alt="Product showcase"
            />
          </div>

          <ul className="description-list">
            <li>
              To activate your phone, a Best Buy associate will need to see two pieces of government identification. This includes one piece of photo identification like a Provincial ID, Driver's License,
              Citizenship Card, or Passport.
            </li>
            <li>
              Carrier activation is subject to a credit check and approval. Depending on the results of this credit check, the carrier may require that you pay a security deposit or meet additional credit
              requirements.
            </li>
          </ul>
        </div>
      </section>

      {/* Similar Products */}
      <section className="similar-products-section">
        <div className="similar-products-container">
          <div className="section-header">
            <h2 className="section-title">O'xshash mahsulotlar</h2>
            <div className="section-nav">
              <button className="nav-arrow" onClick={() => scrollSimilar('left')}>
                <ChevronLeft size={20} />
              </button>
              <button className="nav-arrow" onClick={() => scrollSimilar('right')}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="similar-products-scroll" ref={similarScrollRef}>
            <div className="similar-products-row">
              {similarProducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="similar-product-card">
                  <div className="similar-product-image">
                    {product.discount && (
                      <span className="product-badge">-{product.discount}%</span>
                    )}
                    <img src={product.image} alt={product.name} />
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
                  <div className="similar-product-info">
                    {product.storeName && (
                      <div className="product-store">
                        <span className="store-icon">🏪</span>
                        <span className="store-name">{product.storeName}</span>
                      </div>
                    )}
                    <h3 className="similar-product-name">{product.name}</h3>
                    {product.originalPrice && (
                      <span className="similar-product-original">
                        {formatPrice(product.originalPrice)} so'm
                      </span>
                    )}
                    <span className="similar-product-price">{formatPrice(product.price)} so'm</span>
                    {product.rating && (
                      <div className="similar-product-rating">
                        <Star size={14} fill="#f59e0b" color="#f59e0b" />
                        <span className="rating-value">{product.rating}</span>
                        {product.reviewCount && (
                          <span className="rating-count">({product.reviewCount} sharhlar)</span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                        {formatPrice(product.originalPrice)} so'm
                      </span>
                    )}
                    <span className="brand-product-price">{formatPrice(product.price)} so'm</span>
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

export default ProductDetailPage;
