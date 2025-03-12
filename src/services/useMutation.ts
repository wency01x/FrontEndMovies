import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignupData {
  username: string;
  email: string;
  phoneNumber: string;
  fullName: string;
  password: string;
}


export const useSignup = (initialData: SignupData) => {
  const [formData, setFormData] = useState<SignupData>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const mutation = useMutation({
    mutationFn: async () => {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/register/`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      alert("User registered successfully!");
      setFormData(initialData);
      
    },
    onError: (error: any) => {
      alert(error.response?.data?.error || "Signup failed. Please try again.");
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  return { formData, setFormData, mutation, isLoading };
};
