import { useMutation } from "@tanstack/react-query";
import { adminLogin } from "../api/authApi";

export const useAdminLogin = () => {
    return useMutation({
        mutationFn: async (credentials) => await adminLogin(credentials),
        onSuccess: (data) => {
            console.log("Login successful:", data);
            localStorage.setItem("user", JSON.stringify(data?.user));  
            localStorage.setItem("token", data?.token);
        },
        onError: (error) => {
            console.error("Login failed:", error.message);
        }
    });
};
