import axios from "axios";
import { ISignupData,   ILoginResponse } from "@/interfaces/interfaces";

const API_URL = import.meta.env.VITE_API_URL;

// Login API function
export const loginUser = async (email: string, password: string): Promise<ILoginResponse> => {
  const response = await axios.post<ILoginResponse>(
    `${API_URL}/api/login/`,
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return response.data;
};

// Signup API function
export const signupUser = async (signupData: ISignupData) => {
  const response = await axios.post(
    `${API_URL}/api/register/`,
    signupData,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
};
