import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialAuth from '../components/SocialAuth';
import { ArrowLeft } from 'lucide-react';
import { authApi } from '../api/authApi';
import './Auth.css';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState<'register' | 'verify'>('register');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otpCode, setOtpCode] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsLoading(true);

        if (password.length < 8) {
            setError('Parol kamida 8 ta belgidan iborat bo\'lishi kerak');
            setIsLoading(false);
            return;
        }

        try {
            await authApi.register({
                email,
                password,
                full_name: fullName || undefined,
            });
            setSuccess('Tasdiqlash kodi emailingizga yuborildi');
            setStep('verify');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ro\'yxatdan o\'tish muvaffaqiyatsiz bo\'ldi');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsLoading(true);

        if (otpCode.length !== 6) {
            setError('Kod 6 ta raqamdan iborat bo\'lishi kerak');
            setIsLoading(false);
            return;
        }

        try {
            await authApi.verifyEmail({ email, code: otpCode });
            setSuccess('Email muvaffaqiyatli tasdiqlandi!');
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Tasdiqlash muvaffaqiyatsiz bo\'ldi');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendCode = async () => {
        setError('');
        setIsLoading(true);
        try {
            await authApi.register({
                email,
                password,
                full_name: fullName || undefined,
            });
            setSuccess('Yangi kod emailingizga yuborildi');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Kodni yuborishda xatolik');
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
                {step === 'register' ? (
                    <>
                        <h1 className="auth-title">Ro'yxatdan o'tish</h1>
                        <p className="auth-subtitle">Yangi hisob yaratish uchun ma'lumotlarni to'ldiring</p>

                        {error && <div className="auth-error">{error}</div>}
                        {success && <div className="auth-success">{success}</div>}

                        <form className="auth-form" onSubmit={handleRegister}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">To'liq ism</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-input"
                                    placeholder="Ism Familiya"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    disabled={isLoading}
                                />
                            </div>

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
                                    minLength={8}
                                    disabled={isLoading}
                                />
                                <span className="form-hint">Kamida 8 ta belgi</span>
                            </div>

                            <button type="submit" className="auth-submit-btn" disabled={isLoading}>
                                {isLoading ? 'Yuborilmoqda...' : 'Ro\'yxatdan o\'tish'}
                            </button>
                        </form>

                        <div className="auth-divider">Yoki</div>

                        <SocialAuth />

                        <div className="auth-footer">
                            Hisobingiz bormi?
                            <Link to="/login" className="form-link">Kirish</Link>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="auth-title">Emailni tasdiqlash</h1>
                        <p className="auth-subtitle">
                            <strong>{email}</strong> manziliga yuborilgan 6 xonali kodni kiriting
                        </p>

                        {error && <div className="auth-error">{error}</div>}
                        {success && <div className="auth-success">{success}</div>}

                        <form className="auth-form" onSubmit={handleVerifyOtp}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="otp">Tasdiqlash kodi</label>
                                <input
                                    type="text"
                                    id="otp"
                                    className="form-input otp-input"
                                    placeholder="000000"
                                    value={otpCode}
                                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                    required
                                    maxLength={6}
                                    disabled={isLoading}
                                    autoComplete="one-time-code"
                                />
                            </div>

                            <button type="submit" className="auth-submit-btn" disabled={isLoading}>
                                {isLoading ? 'Tasdiqlanmoqda...' : 'Tasdiqlash'}
                            </button>
                        </form>

                        <div className="auth-footer">
                            <span>Kod kelmadimi? </span>
                            <button
                                type="button"
                                className="form-link resend-btn"
                                onClick={handleResendCode}
                                disabled={isLoading}
                            >
                                Qayta yuborish
                            </button>
                        </div>

                        <div className="auth-footer">
                            <button
                                type="button"
                                className="form-link"
                                onClick={() => setStep('register')}
                            >
                                Ortga qaytish
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default RegisterPage;
