import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import { HomePage, CategoryPage, ProductDetailPage, LoginPage, RegisterPage, ForgotPasswordPage, ResetPasswordPage } from './pages';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Public Routes with Header/Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Route>

        {/* Auth Routes without Header/Footer */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </div>
  );
}

export default App;
