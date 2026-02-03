import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  shopButtonText: string;
  image: string;
  gradient: string;
}

interface SidebarSlide {
  id: number;
  image: string;
}

const mainBannerSlides: BannerSlide[] = [
  {
    id: 1,
    title: 'Qulay narxlar barchasi',
    subtitle: 'X top bilan',
    buttonText: 'KUNLIK QAYNOQ CHEGIRMALAR',
    shopButtonText: "KO'P XARID, QULAY SHAROIT",
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=400&fit=crop',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
  },
  {
    id: 2,
    title: 'Eng yaxshi takliflar',
    subtitle: 'Faqat bugun',
    buttonText: 'MAXSUS CHEGIRMALAR',
    shopButtonText: 'HOZIROQ XARID QILING',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=400&fit=crop',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 50%, #1e1b4b 100%)',
  },
  {
    id: 3,
    title: 'Yangi kolleksiya',
    subtitle: 'Elektron gadjetlar',
    buttonText: 'YANGILIKLAR',
    shopButtonText: "KO'PROQ TANLANG",
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop',
    gradient: 'linear-gradient(135deg, #4338ca 0%, #7c3aed 50%, #a855f7 100%)',
  },
];

const womenSlides: SidebarSlide[] = [
  { id: 1, image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&h=300&fit=crop' },
  { id: 2, image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop' },
  { id: 3, image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=300&h=300&fit=crop' },
];

const speakerSlides: SidebarSlide[] = [
  { id: 1, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop' },
  { id: 2, image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=200&h=200&fit=crop' },
  { id: 3, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop' },
];

const perfumeSlides: SidebarSlide[] = [
  { id: 1, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop' },
  { id: 2, image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200&h=200&fit=crop' },
  { id: 3, image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=200&h=200&fit=crop' },
];

const Hero = () => {
  const [mainSlide, setMainSlide] = useState(0);
  const [womenSlide, setWomenSlide] = useState(0);
  const [speakerSlide, setSpeakerSlide] = useState(0);
  const [perfumeSlide, setPerfumeSlide] = useState(0);

  const navigateSlide = (
    current: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
    total: number,
    direction: 'left' | 'right'
  ) => {
    if (direction === 'left') {
      setter(current === 0 ? total - 1 : current - 1);
    } else {
      setter(current === total - 1 ? 0 : current + 1);
    }
  };

  const currentBanner = mainBannerSlides[mainSlide];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-main">
          <div className="hero-banner" style={{ background: currentBanner.gradient }}>
            <button
              className="carousel-nav-btn carousel-nav-left"
              onClick={() => navigateSlide(mainSlide, setMainSlide, mainBannerSlides.length, 'left')}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="hero-content">
              <h1 className="hero-title">
                {currentBanner.title}
                <br />
                {currentBanner.subtitle}
              </h1>
              <button className="hero-btn">{currentBanner.buttonText}</button>
            </div>
            <div className="hero-logo">
              <span className="hero-logo-x">X</span>
              <span className="hero-logo-top">top</span>
            </div>
            <div className="hero-image">
              <img
                src={currentBanner.image}
                alt="Product"
                className="ps5-image"
              />
            </div>
            <button className="hero-shop-btn">{currentBanner.shopButtonText}</button>
            <button
              className="carousel-nav-btn carousel-nav-right"
              onClick={() => navigateSlide(mainSlide, setMainSlide, mainBannerSlides.length, 'right')}
            >
              <ChevronRight size={24} />
            </button>
            <div className="carousel-dots">
              {mainBannerSlides.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${mainSlide === index ? 'active' : ''}`}
                  onClick={() => setMainSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hero-sidebar">
          <div className="sidebar-card women-collection">
            <button
              className="sidebar-nav-btn sidebar-nav-left"
              onClick={() => navigateSlide(womenSlide, setWomenSlide, womenSlides.length, 'left')}
            >
              <ChevronLeft size={16} />
            </button>
            <div className="card-content">
              <h3 className="card-title">Ayollar kolleksiyasi</h3>
              <p className="card-description">Featured woman collections that give you another vibe.</p>
            </div>
            <div className="card-image">
              <img
                src={womenSlides[womenSlide].image}
                alt="Women Collection"
              />
            </div>
            <button
              className="sidebar-nav-btn sidebar-nav-right"
              onClick={() => navigateSlide(womenSlide, setWomenSlide, womenSlides.length, 'right')}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="sidebar-bottom">
            <div className="sidebar-card speakers">
              <button
                className="sidebar-nav-btn sidebar-nav-left"
                onClick={() => navigateSlide(speakerSlide, setSpeakerSlide, speakerSlides.length, 'left')}
              >
                <ChevronLeft size={14} />
              </button>
              <div className="card-content">
                <h3 className="card-title">Kalonkalar</h3>
                <p className="card-description">O'zingiz uchun qulaylikni yarating</p>
              </div>
              <div className="card-image small">
                <img
                  src={speakerSlides[speakerSlide].image}
                  alt="Speakers"
                />
              </div>
              <button
                className="sidebar-nav-btn sidebar-nav-right"
                onClick={() => navigateSlide(speakerSlide, setSpeakerSlide, speakerSlides.length, 'right')}
              >
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="sidebar-card perfume">
              <button
                className="sidebar-nav-btn sidebar-nav-left"
                onClick={() => navigateSlide(perfumeSlide, setPerfumeSlide, perfumeSlides.length, 'left')}
              >
                <ChevronLeft size={14} />
              </button>
              <div className="card-content">
                <h3 className="card-title">Parfyumlar</h3>
                <p className="card-description">GUCCI INTENSE OUD EDP</p>
              </div>
              <div className="card-image small">
                <img
                  src={perfumeSlides[perfumeSlide].image}
                  alt="Perfumes"
                />
              </div>
              <button
                className="sidebar-nav-btn sidebar-nav-right"
                onClick={() => navigateSlide(perfumeSlide, setPerfumeSlide, perfumeSlides.length, 'right')}
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
