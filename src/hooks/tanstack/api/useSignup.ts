import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ISignupData } from "@/interfaces/interfaces";
import { signupUser } from "@/services/authService"; // ✅ Import API function

export const useSignup = (initialData: ISignupData) => {
  const [formData, setFormData] = useState<ISignupData>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const mutation = useMutation({
    mutationFn: async () => {
      setIsLoading(true);
      return signupUser(formData); // ✅ Use function from `authService.ts`
    },
    onSuccess: () => {
      toast.success("User registered successfully!");
      setFormData(initialData);
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || "Signup failed. Please try again.");
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  return { formData, setFormData, mutation, isLoading };
};
