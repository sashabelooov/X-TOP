import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import Footer from './components/Footer';
import { HomePage, CategoryPage, ProductDetailPage } from './pages';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Categories />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
