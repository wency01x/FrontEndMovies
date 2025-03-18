import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IAuthUser } from "@/interfaces/interfaces";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "@/services/authServices/authLogin"; // ✅ Import service function

export const useLogin = (setAuthUser: (auth: IAuthUser) => void) => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating,] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const mutation = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      setIsAnimating(true);
      return loginUser(email, password); // ✅ Use the function from `authService.ts`
    },
    onSuccess: (data) => {
      if (data.user) {
        localStorage.setItem("accessToken", data.token || "");
        localStorage.setItem("authUser", JSON.stringify(data.user));
        toast.success("Login successful!");
        setAuthUser(data.user);
        navigate("/movies");
      } else {
        toast.error(data.message || "Invalid login credentials");
      }
    },
    onError: (error: any) => {
      console.error("Login failed", error);
      toast.error(error.response?.data?.error || "An error occurred during login.");
    },
    onSettled: () => {
      setIsAnimating(false);
      setIsLoading(false);
    },
  });

  return { mutation, isAnimating, isLoading: mutation.isPending };
};
