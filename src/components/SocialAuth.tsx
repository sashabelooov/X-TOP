import { Facebook, Instagram } from 'lucide-react';
/* 
   Using an Apple SVG icon mock since lucide-react might not have a perfect brand match or we prefer consistency.
   Using a clear SVG for Apple.
*/
const AppleIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.02 3.65-.95 1.86.11 3.01.99 3.68 1.95-2.91 1.7-2.3 5.48.51 6.64-.67 1.88-1.57 3.39-2.92 4.59zM12.03 7.25c-.25-2.19 1.62-4.04 3.38-4.25.16 2.06-1.92 3.8-3.38 4.25z" />
    </svg>
);

const SocialAuth = () => {
    return (
        <div className="social-auth">
            {/* Apple */}
            <button className="social-btn" title="Continue with Apple">
                <AppleIcon />
            </button>

            {/* Instagram */}
            <button className="social-btn" title="Continue with Instagram">
                <Instagram size={22} color="#E1306C" />
            </button>

            {/* Google */}
            <button className="social-btn" title="Continue with Google">
                <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="social-icon"
                />
            </button>

            {/* Facebook */}
            <button className="social-btn" title="Continue with Facebook">
                <Facebook size={22} color="#1877F2" />
            </button>
        </div>
    );
};

export default SocialAuth;
