import axios from "@/lib/axios";
import { LoginInterface } from "@/types/login.interface";

export const authService = {
    loginUser: async (form: LoginInterface) => {
        const { data } = await axios.post("/login/", form);
        return data;
    },

    sendResetCode: async (email: string) => {
        const { data } = await axios.post("/auth/send-reset-code", { email });
        return data;
    },

    validateResetCode: async (email: string, code: string) => {
        const { data } = await axios.post("/auth/validate-reset-code", { email, code });
        return data;
    },
};
