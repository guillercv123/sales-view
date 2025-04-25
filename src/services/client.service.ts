import axios from "@/lib/axios";
import {IClienteReq} from "@/types/client.interface";

export const clientService = {
    createClient: async (form: IClienteReq) => {
        const response = await axios.post("/client/", form);
        return response.data;
    },
}

