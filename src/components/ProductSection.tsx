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
          <div className="section-nav">
            <button className="nav-arrow" onClick={() => scroll('left')}>
              <ChevronLeft size={20} />
            </button>
            <button className="nav-arrow" onClick={() => scroll('right')}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="products-scroll" ref={scrollRef}>
          <div className="products-row">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
