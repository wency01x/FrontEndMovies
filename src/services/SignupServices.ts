import { ISignupData } from "@/interfaces/interfaces";
import axiosInstance from "@/middleware/Axios-Interceptor";

const API_URL = import.meta.env.VITE_API_URL;

// Signup API function
export const signupUser = async (data: ISignupData) => {
    return axiosInstance.post('/register/', {
      email: data.email,
      username: data.username,
      password: data.password,
      fullName: data.fullName,
    });
  };


  