import { CreditCard, Shield, Clock, CheckCircle } from 'lucide-react';
import './PaymentPage.css';

const PaymeLogo = () => (
  <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="28" fontSize="24" fontWeight="bold" fill="#00CCCC">Pay</text>
    <text x="42" y="28" fontSize="24" fontWeight="bold" fill="#1E3A5F">me</text>
  </svg>
);

const ClickLogo = () => (
  <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="20" r="12" fill="#00A1E4"/>
    <circle cx="16" cy="20" r="6" fill="white"/>
    <text x="35" y="28" fontSize="22" fontWeight="bold" fill="#00A1E4">CLICK</text>
  </svg>
);

const UzumLogo = () => (
  <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="20" r="12" fill="#7C3AED"/>
    <text x="35" y="28" fontSize="22" fontWeight="bold" fill="#7C3AED">uzum</text>
  </svg>
);

const PaynetLogo = () => (
  <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="20" r="8" fill="#8BC34A"/>
    <text x="24" y="28" fontSize="22" fontWeight="bold" fill="#333">PAYNET</text>
    <text x="108" y="22" fontSize="10" fill="#666">TM</text>
  </svg>
);

const paymentMethods = [
  {
    id: 'payme',
    name: 'Payme',
    Logo: PaymeLogo,
    description: "O'zbekistonning eng mashhur to'lov tizimi",
  },
  {
    id: 'click',
    name: 'Click',
    Logo: ClickLogo,
    description: "Tez va qulay onlayn to'lovlar",
  },
  {
    id: 'uzum',
    name: 'Uzum',
    Logo: UzumLogo,
    description: "Uzum bank orqali to'lovlar",
  },
  {
    id: 'paynet',
    name: 'Paynet',
    Logo: PaynetLogo,
    description: "Paynet orqali xavfsiz to'lovlar",
  },
];

const features = [
  {
    icon: Shield,
    title: 'Xavfsiz to\'lovlar',
    description: 'Barcha to\'lovlar SSL shifrlash bilan himoyalangan',
  },
  {
    icon: Clock,
    title: 'Tezkor qayta ishlash',
    description: 'To\'lovlar bir necha soniya ichida amalga oshiriladi',
  },
  {
    icon: CheckCircle,
    title: 'Kafolatlangan xizmat',
    description: '24/7 texnik yordam va to\'lov kafolati',
  },
  {
    icon: CreditCard,
    title: 'Ko\'p usullar',
    description: 'Turli to\'lov usullari mavjud',
  },
];

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <div className="payment-container">
        {/* Hero Section */}
        <section className="payment-hero">
          <h1 className="payment-hero-title">To'lov shaklini tanlang</h1>
          <p className="payment-hero-subtitle">
            Xavfsiz va qulay to'lov usullaridan foydalaning
          </p>
        </section>

        {/* Payment Methods */}
        <section className="payment-methods-section">
          <div className="payment-methods-grid">
            {paymentMethods.map((method) => (
              <div key={method.id} className="payment-method-card">
                <div className="payment-method-logo">
                  <method.Logo />
                </div>
                <h3 className="payment-method-name">{method.name}</h3>
                <p className="payment-method-description">{method.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="payment-features-section">
          <h2 className="section-title">Nima uchun bizni tanlash kerak?</h2>
          <div className="payment-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="payment-feature-card">
                <div className="payment-feature-icon">
                  <feature.icon size={32} />
                </div>
                <h3 className="payment-feature-title">{feature.title}</h3>
                <p className="payment-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="payment-steps-section">
          <h2 className="section-title">Qanday ishlaydi?</h2>
          <div className="payment-steps">
            <div className="payment-step">
              <div className="payment-step-number">1</div>
              <h3 className="payment-step-title">Mahsulotni tanlang</h3>
              <p className="payment-step-description">
                O'zingizga yoqqan mahsulotni savatga qo'shing
              </p>
            </div>
            <div className="payment-step">
              <div className="payment-step-number">2</div>
              <h3 className="payment-step-title">To'lov usulini tanlang</h3>
              <p className="payment-step-description">
                Qulay to'lov usulini tanlang
              </p>
            </div>
            <div className="payment-step">
              <div className="payment-step-number">3</div>
              <h3 className="payment-step-title">To'lovni amalga oshiring</h3>
              <p className="payment-step-description">
                To'lovni tasdiqlang va buyurtmangizni kuting
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="payment-faq-section">
          <h2 className="section-title">Ko'p so'raladigan savollar</h2>
          <div className="payment-faq-list">
            <div className="payment-faq-item">
              <h3 className="payment-faq-question">To'lov xavfsizmi?</h3>
              <p className="payment-faq-answer">
                Ha, barcha to'lovlar SSL shifrlash bilan himoyalangan va sizning ma'lumotlaringiz xavfsiz saqlanadi.
              </p>
            </div>
            <div className="payment-faq-item">
              <h3 className="payment-faq-question">Qancha vaqt ichida to'lov qayta ishlanadi?</h3>
              <p className="payment-faq-answer">
                To'lovlar odatda bir necha soniya ichida qayta ishlanadi. Ba'zi hollarda 24 soatgacha vaqt ketishi mumkin.
              </p>
            </div>
            <div className="payment-faq-item">
              <h3 className="payment-faq-question">To'lovni qaytarish mumkinmi?</h3>
              <p className="payment-faq-answer">
                Ha, buyurtmani bekor qilganingizda to'lov 3-5 ish kuni ichida qaytariladi.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentPage;
