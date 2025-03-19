import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ISignupData } from "@/interfaces/interfaces";
import { signupUser } from "@/services/SignupServices"; // ✅ Import API function
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

export const useAuthSignupMutation = (
  initialData: ISignupData,
  setFormData: (data: ISignupData) => void,
  setIsLoading: (loading: boolean) => void
) => {
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  return useMutation({
    mutationFn: async () => {
      setIsLoading(true);
      return signupUser(initialData);
    },
    onSuccess: () => {
      toast.success("User registered successfully!");
      setFormData(initialData);
      navigate("/login"); // ✅ Redirect to login page
    },
    onError: (error: any) => {
      const errorData = error.response?.data;

      // Check if the error is due to an existing email
      if (errorData.email && errorData.email.includes("user with this email already exists.")) {
        toast.error("A user with this email already exists. Please use a different email.");
      } else {
        toast.error(errorData?.error || "Signup failed. Please try again.");
      }
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });
};