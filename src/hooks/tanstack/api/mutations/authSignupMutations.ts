import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ISignupData } from "@/interfaces/interfaces";
import { signupUser } from "@/services/authServices/authSignup"; // ✅ Import API function

export const useAuthSignupMutation = (initialData: ISignupData, setFormData: (data: ISignupData) => void, setIsLoading: (loading: boolean) => void) => {
  return useMutation({
    mutationFn: async () => {
      setIsLoading(true);
      return signupUser(initialData);
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
};
