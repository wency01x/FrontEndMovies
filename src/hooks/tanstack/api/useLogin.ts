import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoginMutation } from "@/hooks/tanstack/api/mutations/authLoginMutations";
import { IAuthUser } from "@/interfaces/interfaces";

export const useLogin = (setAuthUser: (auth: IAuthUser) => void) => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const mutation = useLoginMutation(setAuthUser, navigate);

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    setIsAnimating(true);
    await mutation.mutateAsync({ email, password });
    setIsAnimating(false);
  };

  return { handleLogin, isAnimating, isLoading: mutation.isPending };
};