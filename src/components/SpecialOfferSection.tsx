import { useState, useRef } from 'react';
import { Facebook, Instagram, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import type { ProductCardProps } from './ProductCard';
import './SpecialOfferSection.css';

interface PhoneBanner {
  id: number;
  phoneName: string;
  phoneSpecs: string;
  phonePrice: string;
  phonePreorderDate: string;
  phoneImage: string;
  socialHandle: string;
}

interface SpecialOfferSectionProps {
  title: string;
  products: ProductCardProps[];
  phoneBanners?: PhoneBanner[];
  phoneName?: string;
  phoneSpecs?: string;
  phonePrice?: string;
  phonePreorderDate?: string;
  phoneImage?: string;
  socialHandle?: string;
}

const SpecialOfferSection = ({
  title,
  products,
  phoneBanners,
  phoneName,
  phoneSpecs,
  phonePrice,
  phonePreorderDate,
  phoneImage,
  socialHandle,
}: SpecialOfferSectionProps) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const productsContainerRef = useRef<HTMLDivElement>(null);

  const scrollProducts = (direction: 'left' | 'right') => {
    if (productsContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left'
        ? productsContainerRef.current.scrollLeft - scrollAmount
        : productsContainerRef.current.scrollLeft + scrollAmount;
      productsContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  // Default banner data if phoneBanners not provided
  const defaultBanners: PhoneBanner[] = phoneBanners || [
    {
      id: 1,
      phoneName: phoneName || 'Phone 16 Pro',
      phoneSpecs: phoneSpecs || '6.3 inch OLED Screen | Super Retina XDR display | 1000 nits brightness',
      phonePrice: phonePrice || '$1500',
      phonePreorderDate: phonePreorderDate || '25th October',
      phoneImage: phoneImage || 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=600&fit=crop',
      socialHandle: socialHandle || '@weareverticals',
    },
  ];

  const currentBanner = defaultBanners[currentBannerIndex];

  const navigateBanner = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentBannerIndex(currentBannerIndex === 0 ? defaultBanners.length - 1 : currentBannerIndex - 1);
    } else {
      setCurrentBannerIndex(currentBannerIndex === defaultBanners.length - 1 ? 0 : currentBannerIndex + 1);
    }
  };

  return (
    <section className="special-offer-section">
      <div className="special-offer-container">
        <h2 className="section-title">{title}</h2>
        <div className="special-offer-content">
          <div className="special-offer-products-wrapper">
            <button
              className="products-scroll-btn products-scroll-left"
              onClick={() => scrollProducts('left')}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="special-offer-products" ref={productsContainerRef}>
              {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} {...product} variant="compact" />
              ))}
            </div>
            <button
              className="products-scroll-btn products-scroll-right"
              onClick={() => scrollProducts('right')}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="phone-promo-banner">
            {defaultBanners.length > 1 && (
              <button
                className="banner-nav-btn banner-nav-left"
                onClick={() => navigateBanner('left')}
              >
                <ChevronLeft size={20} />
              </button>
            )}
            <div className="phone-promo-header">
              <div className="social-icons">
                <Facebook size={14} />
                <Instagram size={14} />
                <Linkedin size={14} />
              </div>
              <span className="social-handle">{currentBanner.socialHandle}</span>
            </div>
            <div className="phone-promo-content">
              <span className="premium-label">Premium 3D Phone Mockup Included with PSD</span>
              <h3 className="phone-name">{currentBanner.phoneName}</h3>
              <p className="phone-specs">{currentBanner.phoneSpecs}</p>
              <div className="phone-price-tag">
                <span className="price-label">Price</span>
                <span className="price-value">{currentBanner.phonePrice}</span>
              </div>
              <p className="preorder-text">
                Pre-order starting<br />
                from <span className="preorder-date">{currentBanner.phonePreorderDate}</span> →
              </p>
            </div>
            <div className="phone-promo-image">
              <img src={currentBanner.phoneImage} alt={currentBanner.phoneName} />
            </div>
            {defaultBanners.length > 1 && (
              <>
                <button
                  className="banner-nav-btn banner-nav-right"
                  onClick={() => navigateBanner('right')}
                >
                  <ChevronRight size={20} />
                </button>
                <div className="banner-carousel-dots">
                  {defaultBanners.map((_, index) => (
                    <button
                      key={index}
                      className={`banner-carousel-dot ${currentBannerIndex === index ? 'active' : ''}`}
                      onClick={() => setCurrentBannerIndex(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;
