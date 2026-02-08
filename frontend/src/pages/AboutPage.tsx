import { Users, Target, Award, TrendingUp, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './AboutPage.css';

const stats = [
  { number: '50,000+', label: 'Mijozlar' },
  { number: '10,000+', label: 'Mahsulotlar' },
  { number: '500+', label: 'Brendlar' },
  { number: '99%', label: 'Mijozlar mamnuniyati' },
];

const values = [
  {
    icon: Users,
    title: 'Mijozlarga yo\'naltirilganlik',
    description: 'Mijozlarimiz doimo birinchi o\'rinda turadi. Ularning ehtiyojlarini qondirish bizning asosiy maqsadimiz.',
  },
  {
    icon: Target,
    title: 'Sifat kafolati',
    description: 'Faqat sifatli va original mahsulotlarni taklif qilamiz. Har bir mahsulot sinchkovlik bilan tekshirilgan.',
  },
  {
    icon: Award,
    title: 'Ishonchlilik',
    description: 'Ko\'p yillik tajriba va minglab mamnun mijozlar bizning ishonchliligimizning kafolati.',
  },
  {
    icon: TrendingUp,
    title: 'Innovatsiya',
    description: 'Doimiy ravishda yangilanib, eng so\'nggi texnologiyalar va trendlarni kuzatib boramiz.',
  },
];

const team = [
  {
    name: 'Aziz Karimov',
    position: 'Asoschi va CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Malika Rahimova',
    position: 'Marketing direktori',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Bobur Toshmatov',
    position: 'Texnik direktor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Dilnoza Usmonova',
    position: 'Mijozlar bilan ishlash',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
  },
];

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="about-hero-title">Biz haqimizda</h1>
          <p className="about-hero-subtitle">
            X-TOP - O'zbekistondagi eng ishonchli onlayn do'kon. 2020-yildan beri minglab
            mijozlarga sifatli mahsulotlar va ajoyib xizmat ko'rsatib kelmoqdamiz.
          </p>
        </section>

        {/* Stats Section */}
        <section className="about-stats-section">
          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="about-stat-card">
                <div className="about-stat-number">{stat.number}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story-section">
          <div className="about-story-content">
            <div className="about-story-text">
              <h2 className="section-title">Bizning tariximiz</h2>
              <p>
                X-TOP 2020-yilda kichik bir g'oya sifatida boshlangan. Biz O'zbekiston bozoriga
                sifatli mahsulotlarni qulay narxlarda yetkazib berish maqsadini qo'ydik.
              </p>
              <p>
                Bugungi kunda biz minglab mahsulotlar va yuzlab brendlar bilan ishlaymiz.
                Bizning jamoamiz har kuni mijozlarimizga eng yaxshi xizmat ko'rsatish uchun
                mehnat qiladi.
              </p>
              <p>
                Biz shunchaki do'kon emas - biz sizning ishonchli hamkoringizmiz. Har bir
                xarid, har bir mijoz biz uchun muhim.
              </p>
            </div>
            <div className="about-story-image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Bizning jamoa"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values-section">
          <h2 className="section-title">Bizning qadriyatlarimiz</h2>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <div key={index} className="about-value-card">
                <div className="about-value-icon">
                  <value.icon size={28} />
                </div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team-section">
          <h2 className="section-title">Bizning jamoa</h2>
          <div className="about-team-grid">
            {team.map((member, index) => (
              <div key={index} className="about-team-card">
                <div className="about-team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="about-team-name">{member.name}</h3>
                <p className="about-team-position">{member.position}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="about-contact-section">
          <h2 className="section-title">Biz bilan bog'laning</h2>
          <div className="about-contact-grid">
            <div className="about-contact-card">
              <div className="about-contact-icon">
                <MapPin size={24} />
              </div>
              <h3 className="about-contact-title">Manzil</h3>
              <p className="about-contact-text">
                Toshkent shahri, Chilonzor tumani,<br />
                Bunyodkor ko'chasi, 12-uy
              </p>
            </div>
            <div className="about-contact-card">
              <div className="about-contact-icon">
                <Phone size={24} />
              </div>
              <h3 className="about-contact-title">Telefon</h3>
              <p className="about-contact-text">
                +998 90 123 45 67<br />
                +998 71 234 56 78
              </p>
            </div>
            <div className="about-contact-card">
              <div className="about-contact-icon">
                <Mail size={24} />
              </div>
              <h3 className="about-contact-title">Email</h3>
              <p className="about-contact-text">
                info@x-top.uz<br />
                support@x-top.uz
              </p>
            </div>
            <div className="about-contact-card">
              <div className="about-contact-icon">
                <Clock size={24} />
              </div>
              <h3 className="about-contact-title">Ish vaqti</h3>
              <p className="about-contact-text">
                Dushanba - Shanba: 9:00 - 20:00<br />
                Yakshanba: 10:00 - 18:00
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
