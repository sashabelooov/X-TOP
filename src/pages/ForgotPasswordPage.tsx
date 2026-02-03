import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authApi } from '../api/authApi';
import './Auth.css';

const ForgotPasswordPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsLoading(true);

        try {
            await authApi.forgotPassword({ email });
            setSuccess('Parolni tiklash kodi emailingizga yuborildi');
            setTimeout(() => navigate(`/reset-password?email=${encodeURIComponent(email)}`), 2000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Xatolik yuz berdi');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Parolni unutdingizmi?</h1>
                <p className="auth-subtitle">Email manzilingizni kiriting va biz sizga parolni tiklash uchun kod yuboramiz</p>

                {error && <div className="auth-error">{error}</div>}
                {success && <div className="auth-success">{success}</div>}

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

                    <button type="submit" className="auth-submit-btn" disabled={isLoading}>
                        {isLoading ? 'Yuborilmoqda...' : 'Yuborish'}
                    </button>
                </form>

                <div className="auth-footer">
                    <Link to="/login" className="form-link">Ortga qaytish</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
