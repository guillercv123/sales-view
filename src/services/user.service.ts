import axios from "@/lib/axios";
import {IUser} from "@/types/user.interface";

export const userService = {
    createUser: async (form: IUser) => {
        const response = await axios.post("/users/", form);
        return response.data;
    },
    resetUserPassword : async (email: string, password: string) => {
        const response = await axios.post("/users/reset-password", {email, password});
        return response.data;
    }
}