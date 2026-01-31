import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import './CategorySection.css';

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  count: number;
}

interface CategorySectionProps {
  title: string;
  categories: CategoryItem[];
}

const CategorySection = ({ title, categories }: CategorySectionProps) => {
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
    <section className="category-section">
      <div className="category-section-container">
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
        <div className="categories-scroll" ref={scrollRef}>
          <div className="categories-row">
            {categories.map((category) => (
              <a href="#" key={category.id} className="category-card">
                <div className="category-image-wrapper">
                  <span className="category-count">{category.count}</span>
                  <div className="category-image-circle">
                    <img src={category.image} alt={category.name} />
                  </div>
                </div>
                <span className="category-name">{category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
