import { Heart, Clock, Star } from 'lucide-react';
import './ProductCard.css';

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
  isNew?: boolean;
  storeName?: string;
  storeIcon?: string;
  rating?: number;
  reviewCount?: number;
  timerHours?: number;
  variant?: 'default' | 'compact';
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  discount,
  storeName,
  rating,
  reviewCount,
  timerHours,
  variant = 'default',
}: ProductCardProps) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('uz-UZ').format(value) + " so'm";
  };

  return (
    <div className={`product-card ${variant}`}>
      <div className="product-image-container">
        {discount && <span className="product-badge discount">-{discount}%</span>}
        <img src={image} alt={name} className="product-image" />
        <button className="wishlist-btn">
          <Heart size={18} />
        </button>
        {timerHours && (
          <div className="product-timer">
            <Clock size={12} />
            <span>{timerHours} soat</span>
          </div>
        )}
      </div>
      <div className="product-info">
        {storeName && (
          <div className="product-store">
            <span className="store-icon">🏪</span>
            <span className="store-name">{storeName}</span>
          </div>
        )}
        <h3 className="product-name">{name}</h3>
        {originalPrice && (
          <span className="product-original-price">{formatPrice(originalPrice)}</span>
        )}
        <span className="product-price">{formatPrice(price)}</span>
        {rating && (
          <div className="product-rating">
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            <span className="rating-value">{rating}</span>
            {reviewCount && <span className="review-count">({reviewCount} sharhlar)</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
