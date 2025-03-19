import axios from "axios";
import { IRefreshTokenResponse } from "@/interfaces/interfaces";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor: Attach Access Token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Token ${token}`, // Attach token
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle Expired Tokens & Errors
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("No refresh token available");

        // Explicitly define response type
        const { data } = await axios.post<IRefreshTokenResponse>(`${API_BASE_URL}/auth/refresh/`, {
          refresh: refreshToken,
        });

        // Save new tokens
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);

        // Retry the failed request with the new token
        originalRequest.headers.Authorization = `Token ${data.access}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed, logging out...");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.clear();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
