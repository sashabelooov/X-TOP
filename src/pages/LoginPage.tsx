import { Link } from 'react-router-dom';
import SocialAuth from '../components/SocialAuth';
import { ArrowLeft } from 'lucide-react';
import './Auth.css';

const LoginPage = () => {
    return (
        <div className="auth-page">
            <Link to="/" className="back-to-home">
                <ArrowLeft size={20} />
                <span>Bosh sahifaga qaytish</span>
            </Link>
            <div className="auth-container">
                <h1 className="auth-title">Xush kelibsiz!</h1>
                <p className="auth-subtitle">Hisobingizga kirish uchun ma'lumotlaringizni kiriting</p>

                <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            placeholder="example@mail.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Parol</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="form-actions">
                        <label className="form-checkbox">
                            <input type="checkbox" />
                            <span>Eslab qolish</span>
                        </label>
                        <Link to="/forgot-password" className="form-link">Parolni unutdingizmi?</Link>
                    </div>

                    <button type="submit" className="auth-submit-btn">Kirish</button>
                </form>

                <div className="auth-divider">Yoki</div>

                <SocialAuth />

                <div className="auth-footer">
                    Hisobingiz yo'qmi?
                    <Link to="/register" className="form-link">Ro'yxatdan o'tish</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
