import { toast } from 'react-toastify';
import { useLogin } from '@/hooks/tanstack/api/useAuth/useLogin';
import { IAuthUser } from '@/interfaces/interfaces';
import { useState } from 'react';

export const useLoginHandler = (setAuthUser: (auth: IAuthUser) => void) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Use the useLogin hook
  const { handleLogin, isAnimating, isLoading } = useLogin(setAuthUser);

  // Check if the fields are empty
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!isFormValid) {
      toast.error("Please fill in all fields.");
      return;
    }

    handleLogin({ email, password });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
    isFormValid,
    isAnimating,
    isLoading,
  };
};
