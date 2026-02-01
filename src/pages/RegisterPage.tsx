import { Link } from 'react-router-dom';
import SocialAuth from '../components/SocialAuth';
import { ArrowLeft } from 'lucide-react';
import './Auth.css';

const RegisterPage = () => {
    return (
        <div className="auth-page">
            <Link to="/" className="back-to-home">
                <ArrowLeft size={20} />
                <span>Bosh sahifaga qaytish</span>
            </Link>
            <div className="auth-container">
                <h1 className="auth-title">Ro'yxatdan o'tish</h1>
                <p className="auth-subtitle">Yangi hisob yaratish uchun ma'lumotlarni to'ldiring</p>

                <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">To'liq ism</label>
                        <input
                            type="text"
                            id="name"
                            className="form-input"
                            placeholder="Ism Familiya"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            placeholder="example@mail.com"
                            required
                        />
                        {/* Note for User: Gmail confirmation logic would ideally go here after submission or via a modal */}
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

                    <button type="submit" className="auth-submit-btn">Ro'yxatdan o'tish</button>
                </form>

                <div className="auth-divider">Yoki</div>

                <SocialAuth />

                <div className="auth-footer">
                    Hisobingiz bormi?
                    <Link to="/login" className="form-link">Kirish</Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
