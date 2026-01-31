import { Flame, Sparkles, Hash } from 'lucide-react';
import './Categories.css';

interface Category {
  id: string;
  name: string;
  icon?: React.ReactNode;
  isHighlighted?: boolean;
  highlightColor?: string;
}

const categories: Category[] = [
  { id: '1', name: 'Qaynoq chegirmalar', icon: <Flame size={16} />, isHighlighted: true, highlightColor: '#ef4444' },
  { id: '2', name: 'Yangi mahsulotlar', icon: <Sparkles size={16} />, isHighlighted: true, highlightColor: '#22c55e' },
  { id: '3', name: 'Yangi mahsulotlar', icon: <Hash size={16} /> },
  { id: '4', name: 'Aksessuarlar' },
  { id: '5', name: 'Maishiy texnika' },
  { id: '6', name: 'Elektronika' },
  { id: '7', name: 'Onalar va bolalar' },
  { id: '8', name: 'Sport kiyimlari' },
];

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-container">
        {categories.map((category) => (
          <a
            key={category.id}
            href="#"
            className={`category-item ${category.isHighlighted ? 'highlighted' : ''}`}
            style={category.isHighlighted ? { color: category.highlightColor } : {}}
          >
            {category.icon && <span className="category-icon">{category.icon}</span>}
            <span>{category.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Categories;
