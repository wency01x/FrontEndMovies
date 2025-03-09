import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            if (config.headers) {
                config.headers.Authorization = `Token ${token}`;
            }
        }
        return config;
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                console.warn("Unauthorized! Redirecting to login...");
                localStorage.removeItem("accessToken");
                localStorage.clear()
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);


export default axiosInstance;