import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import './CategorySection.css';

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  count: number;
  slug?: string;
}

interface CategorySectionProps {
  title: string;
  categories: CategoryItem[];
}

const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/\s+/g, '-');
};

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
        </div>
        <div className="categories-scroll-wrapper">
          <button className="nav-arrow nav-arrow-left" onClick={() => scroll('left')}>
            <ChevronLeft size={20} />
          </button>
          <div className="categories-scroll" ref={scrollRef}>
            <div className="categories-row">
              {categories.map((category) => (
                <Link
                  to={`/category/${category.slug || generateSlug(category.name)}`}
                  key={category.id}
                  className="category-card"
                >
                  <div className="category-image-wrapper">
                    <span className="category-count">{category.count}</span>
                    <div className="category-image-circle">
                      <img src={category.image} alt={category.name} />
                    </div>
                  </div>
                  <span className="category-name">{category.name}</span>
                </Link>
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

export default CategorySection;
