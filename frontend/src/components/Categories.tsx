import { Link } from 'react-router-dom';
import { Flame, Sparkles, Hash } from 'lucide-react';
import './Categories.css';

interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: React.ReactNode;
  isHighlighted?: boolean;
  highlightColor?: string;
}

const categories: Category[] = [
  { id: '1', name: 'Qaynoq chegirmalar', slug: 'qaynoq-chegirmalar', icon: <Flame size={16} />, isHighlighted: true, highlightColor: '#ef4444' },
  { id: '2', name: 'Yangi mahsulotlar', slug: 'yangi-mahsulotlar', icon: <Sparkles size={16} />, isHighlighted: true, highlightColor: '#22c55e' },
  { id: '3', name: 'Yangi mahsulotlar', slug: 'yangi-mahsulotlar-2', icon: <Hash size={16} /> },
  { id: '4', name: 'Aksessuarlar', slug: 'aksessuarlar' },
  { id: '5', name: 'Maishiy texnika', slug: 'maishiy-texnika' },
  { id: '6', name: 'Elektronika', slug: 'elektronika' },
  { id: '7', name: 'Onalar va bolalar', slug: 'onalar-va-bolalar' },
  { id: '8', name: 'Sport kiyimlari', slug: 'sport-kiyimlari' },
];

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-container">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.slug}`}
            className={`category-item ${category.isHighlighted ? 'highlighted' : ''}`}
            style={category.isHighlighted ? { color: category.highlightColor } : {}}
          >
            {category.icon && <span className="category-icon">{category.icon}</span>}
            <span>{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
