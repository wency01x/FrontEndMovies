import axios from "axios";
import { ISignupData } from "@/interfaces/interfaces";

const API_URL = import.meta.env.VITE_API_URL;

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
  