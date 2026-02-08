import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import CategorySection from '../components/CategorySection';
import PromoBanner from '../components/PromoBanner';
import BrandStoreSection from '../components/BrandStoreSection';
import SpecialOfferSection from '../components/SpecialOfferSection';

// Hot deals products
const hotDealsProducts = [
  {
    id: '1',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    viewCount: 1448,
    timerHours: 72,
  },
  {
    id: '2',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Apple Optom uz',
    viewCount: 1448,
    timerHours: 72,
  },
  {
    id: '3',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    viewCount: 1448,
    timerHours: 72,
  },
  {
    id: '4',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    viewCount: 1448,
    timerHours: 72,
  },
  {
    id: '5',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    viewCount: 1448,
    timerHours: 72,
  },
  {
    id: '6',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    viewCount: 1448,
    timerHours: 72,
  },
];

// Categories
const categoriesData = [
  {
    id: '1',
    name: 'Onalar va bolalar',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=200&h=200&fit=crop',
    count: 254,
  },
  {
    id: '2',
    name: 'Elektronika',
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=200&h=200&fit=crop',
    count: 1256,
  },
  {
    id: '3',
    name: 'Sport',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=200&h=200&fit=crop',
    count: 86,
  },
  {
    id: '4',
    name: 'Aksessuarlar',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop',
    count: 12258,
  },
  {
    id: '5',
    name: 'Smartfonlar',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop',
    count: 680,
  },
  {
    id: '6',
    name: 'Maishiy texnika',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop',
    count: 650,
  },
];

// New arrivals
const newArrivals = [
  {
    id: '7',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    viewCount: 1448,
    timerHours: 72,
  },
  {
    id: '8',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    viewCount: 1448,
    timerHours: 72,
  },
  {
    id: '9',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    viewCount: 1448,
    timerHours: 72,
  },
  {
    id: '10',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    viewCount: 1448,
    timerHours: 72,
  },
  {
    id: '11',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    viewCount: 1448,
    timerHours: 72,
  },
  {
    id: '12',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    discount: 40,
    storeName: 'Brand Store',
    viewCount: 1448,
    timerHours: 72,
  },
];

// Brand store products
const brandStoreProducts = [
  {
    id: '13',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    viewCount: 892,
  },
  {
    id: '14',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    viewCount: 1256,
  },
  {
    id: '15',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
    viewCount: 743,
  },
  {
    id: '16',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=400&fit=crop',
    viewCount: 1089,
  },
  {
    id: '17',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    viewCount: 567,
  },
  {
    id: '18',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    viewCount: 2341,
  },
  {
    id: '19',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
    viewCount: 456,
  },
  {
    id: '20',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    viewCount: 1678,
  },
];

const brandCategories = [
  'Smartfonlar',
  'Uy uchun',
  'Mikrofonlar',
  'iPad',
  'iWatch',
  'TV & Audio',
  "O'yin uchun",
  "G'iloflar",
  'Maishiy texnika',
  'Macbook',
];

// Special offer products
const specialOfferProducts = [
  {
    id: '21',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    viewCount: 1234,
  },
  {
    id: '22',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    viewCount: 987,
  },
  {
    id: '23',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
    viewCount: 2156,
  },
  {
    id: '24',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=400&fit=crop',
    viewCount: 654,
  },
  {
    id: '25',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    viewCount: 1876,
  },
  {
    id: '26',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    viewCount: 543,
  },
  {
    id: '27',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
    viewCount: 1345,
  },
  {
    id: '28',
    name: 'HAVIT HV-G92 Gamepad',
    price: 980000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    viewCount: 789,
  },
];

// Promo end date (23 days from now)
const promoEndDate = new Date();
promoEndDate.setDate(promoEndDate.getDate() + 23);

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProductSection title="Qaynoq chegirmalar" products={hotDealsProducts} />
      <CategorySection title="Kategoriyalar" categories={categoriesData} />
      <ProductSection title="Yangi qo'shilganlar" products={newArrivals} />
      <PromoBanner
        category="Aksessuarlar"
        title="Zamonaviy bozor, O'z ritmingni kash et!"
        image="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=400&fit=crop"
        endDate={promoEndDate}
        buttonText="Xarid qilish"
      />
      <BrandStoreSection
        title="Brand Storedan maxsus taklif"
        bannerTitle="O'sish va ish uchun"
        bannerSubtitle="Mavsumning so'nggi chegirmalari - foyda bilan xarid qiling"
        bannerImage="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
        products={brandStoreProducts}
        categories={brandCategories}
      />
      <SpecialOfferSection
        title="Maxsus takliflar"
        products={specialOfferProducts}
        phoneName="Phone 16 Pro"
        phoneSpecs="6.3 inch OLED Screen | Super Retina XDR display Dynamic Island | 1000 nits max brightness"
        phonePrice="$1500"
        phonePreorderDate="25th October"
        phoneImage="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=600&fit=crop"
        socialHandle="@usersocialname"
      />
    </>
  );
};

export default HomePage;
