import { useMutation } from "@tanstack/react-query";
import { IAuthUser } from "@/interfaces/interfaces";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "@/services/authServices/authLogin"; // Import the service function

export const useLoginMutation = (setAuthUser: (auth: IAuthUser) => void, navigate: any) => {
  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      return loginUser(email, password); // Call the service function
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
  });

};