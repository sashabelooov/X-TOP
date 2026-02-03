import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './PromoBanner.css';

interface PromoSlide {
  id: number;
  category: string;
  title: string;
  image: string;
  gradient: string;
}

interface PromoBannerProps {
  category: string;
  title: string;
  subtitle?: string;
  image: string;
  endDate: Date;
  buttonText: string;
}

const promoSlides: PromoSlide[] = [
  {
    id: 1,
    category: 'Aksessuarlar',
    title: "Zamonaviy bozor, O'z ritmingni kash et!",
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=400&fit=crop',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a5f 100%)',
  },
  {
    id: 2,
    category: 'Elektronika',
    title: "Eng so'nggi texnologiyalar bilan tanishing!",
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #312e81 100%)',
  },
  {
    id: 3,
    category: 'Smartfonlar',
    title: "Premium smartfonlar - ajoyib narxlarda!",
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop',
    gradient: 'linear-gradient(135deg, #4338ca 0%, #7c3aed 50%, #a855f7 100%)',
  },
];

const PromoBanner = ({ endDate, buttonText }: PromoBannerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const navigateSlide = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentSlide(currentSlide === 0 ? promoSlides.length - 1 : currentSlide - 1);
    } else {
      setCurrentSlide(currentSlide === promoSlides.length - 1 ? 0 : currentSlide + 1);
    }
  };

  const slide = promoSlides[currentSlide];

  return (
    <section className="promo-banner">
      <div className="promo-banner-container" style={{ background: slide.gradient }}>
        <button
          className="promo-nav-btn promo-nav-left"
          onClick={() => navigateSlide('left')}
        >
          <ChevronLeft size={24} />
        </button>
        <div className="promo-content">
          <span className="promo-category">{slide.category}</span>
          <h2 className="promo-title">{slide.title}</h2>
          <div className="promo-countdown">
            <div className="countdown-item">
              <span className="countdown-value">{formatNumber(timeLeft.days)}</span>
              <span className="countdown-label">Kun</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{formatNumber(timeLeft.hours)}</span>
              <span className="countdown-label">Soat</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{formatNumber(timeLeft.minutes)}</span>
              <span className="countdown-label">Daqiqa</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{formatNumber(timeLeft.seconds)}</span>
              <span className="countdown-label">Soniya</span>
            </div>
          </div>
          <button className="promo-btn">{buttonText}</button>
        </div>
        <div className="promo-image">
          <img src={slide.image} alt={slide.title} />
        </div>
        <button
          className="promo-nav-btn promo-nav-right"
          onClick={() => navigateSlide('right')}
        >
          <ChevronRight size={24} />
        </button>
        <div className="promo-dots">
          {promoSlides.map((_, index) => (
            <button
              key={index}
              className={`promo-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
