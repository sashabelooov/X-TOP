import { useState, useEffect } from 'react';
import './PromoBanner.css';

interface PromoBannerProps {
  category: string;
  title: string;
  subtitle?: string;
  image: string;
  endDate: Date;
  buttonText: string;
}

const PromoBanner = ({ category, title, image, endDate, buttonText }: PromoBannerProps) => {
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

  return (
    <section className="promo-banner">
      <div className="promo-banner-container">
        <div className="promo-content">
          <span className="promo-category">{category}</span>
          <h2 className="promo-title">{title}</h2>
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
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
