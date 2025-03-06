import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/api';
interface SignupResponse {
    success?: boolean;
    message?: string;
    [key: string]: any; // Allow indexing with a string
  }

export const signup = async (
  username: string, 
  email: string, 
  phoneNumber: string, 
  fullName: string, 
  password: string, 
  confirmPassword: string
) => {
  try {
    const response = await axios.post(`${API_URL}/register/`, {
      username,
      email,
      phoneNumber,
      fullName,
      password,
      password2: confirmPassword, // Make sure API expects 'password2'
    });

    console.log("Signup API Response:", response.data); // Debugging

    return response.data; // Return success message or data
  } catch (error: any) {
    console.error("Signup API Error:", error.response || error); // Log full error

    // Ensure a structured error response
    const errorData = error.response?.data || { error: "Signup failed. Please try again." };

    throw typeof errorData === "object" ? errorData : { error: errorData };
  }
};
