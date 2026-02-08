import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialAuth from '../components/SocialAuth';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Kirish muvaffaqiyatsiz bo\'ldi');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <Link to="/" className="back-to-home">
                <ArrowLeft size={20} />
                <span>Bosh sahifaga qaytish</span>
            </Link>
            <div className="auth-container">
                <h1 className="auth-title">Xush kelibsiz!</h1>
                <p className="auth-subtitle">Hisobingizga kirish uchun ma'lumotlaringizni kiriting</p>

                {error && <div className="auth-error">{error}</div>}

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            placeholder="example@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Parol</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div className="form-actions">
                        <label className="form-checkbox">
                            <input type="checkbox" />
                            <span>Eslab qolish</span>
                        </label>
                        <Link to="/forgot-password" className="form-link">Parolni unutdingizmi?</Link>
                    </div>

                    <button type="submit" className="auth-submit-btn" disabled={isLoading}>
                        {isLoading ? 'Kirish...' : 'Kirish'}
                    </button>
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
