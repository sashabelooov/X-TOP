import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { authApi } from '../api/authApi';
import './Auth.css';

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const emailFromUrl = searchParams.get('email') || '';

    const [email, setEmail] = useState(emailFromUrl);
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Parollar mos kelmayapti');
            return;
        }

        if (password.length < 8) {
            setError('Parol kamida 8 ta belgidan iborat bo\'lishi kerak');
            return;
        }

        if (code.length !== 6) {
            setError('Kod 6 ta raqamdan iborat bo\'lishi kerak');
            return;
        }

        setIsLoading(true);

        try {
            await authApi.resetPassword({ email, code, new_password: password });
            setSuccess('Parol muvaffaqiyatli o\'zgartirildi!');
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Xatolik yuz berdi');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Yangi parol</h1>
                <p className="auth-subtitle">Emailingizga yuborilgan kodni va yangi parolni kiriting</p>

                {error && <div className="auth-error">{error}</div>}
                {success && <div className="auth-success">{success}</div>}

                <form className="auth-form" onSubmit={handleSubmit}>
                    {!emailFromUrl && (
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
                    )}

                    <div className="form-group">
                        <label className="form-label" htmlFor="code">Tasdiqlash kodi</label>
                        <input
                            type="text"
                            id="code"
                            className="form-input"
                            placeholder="123456"
                            value={code}
                            onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                            required
                            maxLength={6}
                            disabled={isLoading}
                        />
                        <span className="form-hint">Emailingizga yuborilgan 6 xonali kod</span>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Yangi parol</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={8}
                            disabled={isLoading}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="confirm-password">Parolni tasdiqlang</label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="form-input"
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            minLength={8}
                            disabled={isLoading}
                        />
                    </div>

                    <button type="submit" className="auth-submit-btn" disabled={isLoading}>
                        {isLoading ? 'O\'zgartirilmoqda...' : 'Parolni o\'zgartirish'}
                    </button>
                </form>

                <div className="auth-footer">
                    <Link to="/login" className="form-link">Kirish sahifasiga qaytish</Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
