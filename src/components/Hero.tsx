import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-main">
          <div className="hero-banner">
            <div className="hero-content">
              <h1 className="hero-title">
                Qulay narxlar barchasi
                <br />
                X top bilan
              </h1>
              <button className="hero-btn">KUNLIK QAYNOQ CHEGIRMALAR</button>
            </div>
            <div className="hero-logo">
              <span className="hero-logo-x">X</span>
              <span className="hero-logo-top">top</span>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=400&fit=crop"
                alt="PlayStation 5"
                className="ps5-image"
              />
            </div>
            <button className="hero-shop-btn">KO'P XARID, QULAY SHAROIT</button>
          </div>
        </div>

        <div className="hero-sidebar">
          <div className="sidebar-card women-collection">
            <div className="card-content">
              <h3 className="card-title">Ayollar kolleksiyasi</h3>
              <p className="card-description">Featured woman collections that give you another vibe.</p>
            </div>
            <div className="card-image">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&h=300&fit=crop"
                alt="Women Collection"
              />
            </div>
          </div>

          <div className="sidebar-bottom">
            <div className="sidebar-card speakers">
              <div className="card-content">
                <h3 className="card-title">Kalonkalar</h3>
                <p className="card-description">O'zingiz uchun qulaylikni yarating</p>
              </div>
              <div className="card-image small">
                <img
                  src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop"
                  alt="Speakers"
                />
              </div>
            </div>

            <div className="sidebar-card perfume">
              <div className="card-content">
                <h3 className="card-title">Parfyumlar</h3>
                <p className="card-description">GUCCI INTENSE OUD EDP</p>
              </div>
              <div className="card-image small">
                <img
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop"
                  alt="Perfumes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
