const API_BASE_URL = 'https://supergenual-reece-unreprobative.ngrok-free.dev/api/v1/user_auth/auth';

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    access: string;
    refresh: string;
}

interface RegisterRequest {
    email: string;
    password: string;
    full_name?: string;
}

interface RegisterResponse {
    id: number;
    email: string;
    full_name: string;
    is_active: boolean;
    email_verified: boolean;
}

interface ForgotPasswordRequest {
    email: string;
}

interface ResetPasswordRequest {
    email: string;
    code: string;
    new_password: string;
}

interface VerifyEmailRequest {
    email: string;
    code: string;
}

export interface UserProfile {
    id: number;
    email: string;
    full_name: string;
    is_active: boolean;
    email_verified: boolean;
}

interface ApiError {
    detail?: string;
    message?: string;
    [key: string]: unknown;
}

const getHeaders = (includeAuth = false): HeadersInit => {
    const token = localStorage.getItem('access_token');
    return {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
        ...(includeAuth && token && { Authorization: `Bearer ${token}` }),
    };
};

const handleResponse = async <T>(response: Response): Promise<T> => {
    if (!response.ok) {
        const error: ApiError = await response.json().catch(() => ({}));
        throw new Error(error.detail || error.message || 'Xatolik yuz berdi');
    }
    return response.json();
};

export const authApi = {
    login: async (data: LoginRequest): Promise<LoginResponse> => {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(data),
        });
        return handleResponse<LoginResponse>(response);
    },

    register: async (data: RegisterRequest): Promise<RegisterResponse> => {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(data),
        });
        return handleResponse<RegisterResponse>(response);
    },

    forgotPassword: async (data: ForgotPasswordRequest): Promise<void> => {
        const response = await fetch(`${API_BASE_URL}/forgot-password`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(data),
        });
        return handleResponse<void>(response);
    },

    resetPassword: async (data: ResetPasswordRequest): Promise<void> => {
        const response = await fetch(`${API_BASE_URL}/reset-password`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(data),
        });
        return handleResponse<void>(response);
    },

    verifyEmail: async (data: VerifyEmailRequest): Promise<void> => {
        const response = await fetch(`${API_BASE_URL}/verify-email`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(data),
        });
        return handleResponse<void>(response);
    },

    refreshToken: async (refresh: string): Promise<{ access: string }> => {
        const response = await fetch(`${API_BASE_URL}/refresh`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({ refresh }),
        });
        return handleResponse<{ access: string }>(response);
    },

    getProfile: async (): Promise<UserProfile> => {
        const response = await fetch(`${API_BASE_URL}/me`, {
            method: 'GET',
            headers: getHeaders(true),
        });
        return handleResponse<UserProfile>(response);
    },
};

export type { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse };
