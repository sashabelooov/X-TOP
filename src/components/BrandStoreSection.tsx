import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import type { ProductCardProps } from './ProductCard';
import './BrandStoreSection.css';

interface BrandStoreSectionProps {
  title: string;
  bannerTitle: string;
  bannerSubtitle: string;
  bannerImage: string;
  products: ProductCardProps[];
  categories: string[];
}

const BrandStoreSection = ({
  title,
  bannerTitle,
  bannerSubtitle,
  bannerImage,
  products,
  categories,
}: BrandStoreSectionProps) => {
  return (
    <section className="brand-store-section">
      <div className="brand-store-container">
        <h2 className="section-title">{title}</h2>
        <div className="brand-store-content">
          <div className="brand-store-left">
            <div className="brand-banner">
              <div className="brand-banner-content">
                <h3 className="banner-title">{bannerTitle}</h3>
                <p className="banner-subtitle">{bannerSubtitle}</p>
                <button className="banner-btn">Xarid qilish</button>
              </div>
              <div className="brand-banner-image">
                <img src={bannerImage} alt={bannerTitle} />
              </div>
            </div>
            <div className="brand-categories">
              {categories.map((category, index) => (
                <a href="#" key={index} className="brand-category-link">
                  <ChevronRight size={14} />
                  <span>{category}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="brand-store-products">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} {...product} variant="compact" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStoreSection;
