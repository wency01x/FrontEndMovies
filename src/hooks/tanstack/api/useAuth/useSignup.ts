import { useState } from "react";
import { ISignupData } from "@/interfaces/interfaces";
import { useAuthSignupMutation } from "@/hooks/tanstack/api/mutations/authSignupMutations"; 

export const useSignup = (initialData: ISignupData) => {
  const [formData, setFormData] = useState<ISignupData>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const mutation = useAuthSignupMutation(formData, setFormData, setIsLoading);

  return { formData, setFormData, mutation, isLoading };
};
