import { Link } from 'react-router-dom';
import './Auth.css';

const ForgotPasswordPage = () => {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Parolni unutdingizmi?</h1>
                <p className="auth-subtitle">Email manzilingizni kiriting va biz sizga parolni tiklash uchun havola yuboramiz</p>

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

                    <button type="submit" className="auth-submit-btn">Yuborish</button>
                </form>

                <div className="auth-footer">
                    <Link to="/login" className="form-link">Ortga qaytish</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
