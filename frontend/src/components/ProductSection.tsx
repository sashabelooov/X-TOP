import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import ProductCard from './ProductCard';
import type { ProductCardProps } from './ProductCard';
import './ProductSection.css';

interface ProductSectionProps {
  title: string;
  products: ProductCardProps[];
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="product-section">
      <div className="product-section-container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="products-scroll-wrapper">
          <button className="nav-arrow nav-arrow-left" onClick={() => scroll('left')}>
            <ChevronLeft size={20} />
          </button>
          <div className="products-scroll" ref={scrollRef}>
            <div className="products-row">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
          <button className="nav-arrow nav-arrow-right" onClick={() => scroll('right')}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
