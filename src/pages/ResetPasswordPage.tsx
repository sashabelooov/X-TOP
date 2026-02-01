import { Link } from 'react-router-dom';
import './Auth.css';

const ResetPasswordPage = () => {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Yangi parol</h1>
                <p className="auth-subtitle">Yangi parolingizni yarating</p>

                <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Yangi parol</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="confirm-password">Parolni tasdiqlang</label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="form-input"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="auth-submit-btn">Parolni o'zgartirish</button>
                </form>

                <div className="auth-footer">
                    <Link to="/login" className="form-link">Kirish sahifasiga qaytish</Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
