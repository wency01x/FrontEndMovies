import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoginMutation } from "@/hooks/tanstack/api/mutations/authLoginMutations";
import { IAuthUser } from "@/interfaces/interfaces";

export const useLogin = (setAuthUser: (auth: IAuthUser) => void) => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const mutation = useLoginMutation(setAuthUser, navigate);

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    try {
      const result = await mutation.mutateAsync({ email, password });

      // Only trigger the animation if login is successful
      if (result?.user) {
        setIsAnimating(true);
      }
    } catch (error: any) {
      console.error("Login error:", error);
      navigate("/login"); // Redirect to login on failure
    }
  };

  return { handleLogin, isAnimating, isLoading: mutation.isPending };
};
