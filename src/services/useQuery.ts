import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { AuthUser, LoginResponse } from "../interfaces/interfaces";



export const useLogin = (setAuthUser: (auth: AuthUser) => void) => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const mutation = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
        setIsAnimating(true);
      const response = await axios.post<LoginResponse>(
        `${import.meta.env.VITE_API_URL}/api/login/`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data.user) {
        localStorage.setItem("accessToken", data.token || "");
        localStorage.setItem("authUser", JSON.stringify(data.user));
        setAuthUser(data.user);
        navigate("/movies");
      } else {
        alert(data.message || "Invalid login credentials");
        setIsAnimating(false);
      }
    },
    onError: (error: any) => {
      console.error("Login failed", error);
      alert("An error occurred during login.");
      setIsAnimating(false);
    },
  });

  return {mutation, isAnimating};
};
