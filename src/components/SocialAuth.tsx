import '../pages/Auth.css';

const SocialAuth = () => {
    return (
        <div className="social-auth">
            {/* Google */}
            <button className="social-btn google" title="Continue with Google">
                <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="social-icon"
                />
            </button>

            {/* Instagram */}
            <button className="social-btn" title="Continue with Instagram">
                <img
                    src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                    alt="Instagram"
                    className="social-icon"
                />
            </button>

            {/* Facebook */}
            <button className="social-btn" title="Continue with Facebook">
                <img
                    src="https://www.svgrepo.com/show/448224/facebook.svg"
                    alt="Facebook"
                    className="social-icon"
                />
            </button>
        </div>
    );
};

export default SocialAuth;
