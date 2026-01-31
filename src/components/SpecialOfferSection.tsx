import { Facebook, Instagram, Linkedin } from 'lucide-react';
import ProductCard from './ProductCard';
import type { ProductCardProps } from './ProductCard';
import './SpecialOfferSection.css';

interface SpecialOfferSectionProps {
  title: string;
  products: ProductCardProps[];
  phoneName: string;
  phoneSpecs: string;
  phonePrice: string;
  phonePreorderDate: string;
  phoneImage: string;
  socialHandle: string;
}

const SpecialOfferSection = ({
  title,
  products,
  phoneName,
  phoneSpecs,
  phonePrice,
  phonePreorderDate,
  phoneImage,
  socialHandle,
}: SpecialOfferSectionProps) => {
  return (
    <section className="special-offer-section">
      <div className="special-offer-container">
        <h2 className="section-title">{title}</h2>
        <div className="special-offer-content">
          <div className="special-offer-products">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} {...product} variant="compact" />
            ))}
          </div>
          <div className="phone-promo-banner">
            <div className="phone-promo-header">
              <div className="social-icons">
                <Facebook size={14} />
                <Instagram size={14} />
                <Linkedin size={14} />
              </div>
              <span className="social-handle">{socialHandle}</span>
            </div>
            <div className="phone-promo-content">
              <span className="premium-label">Premium 3D Phone Mockup Included with PSD</span>
              <h3 className="phone-name">{phoneName}</h3>
              <p className="phone-specs">{phoneSpecs}</p>
              <div className="phone-price-tag">
                <span className="price-label">Price</span>
                <span className="price-value">{phonePrice}</span>
              </div>
              <p className="preorder-text">
                Pre-order starting<br />
                from <span className="preorder-date">{phonePreorderDate}</span> →
              </p>
            </div>
            <div className="phone-promo-image">
              <img src={phoneImage} alt={phoneName} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;
