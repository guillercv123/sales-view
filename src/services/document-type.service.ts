import axios from "@/lib/axios";

export const documentTypeService = {

    findAll:async() => {
        const response = await axios.get( "/type-document/");
        return response.data;
    },
    create: async (form:any) => {
        const response = await axios.post("/type-document/",form);
        return response.data;
    },
    update:async(form:any) => {
        const response = await axios.put("/type-document/",form);
        return response.data;
    },
    desactivar:async(form:any)  => {
        const response = await axios.patch("/type-document/eliminar/",form);
        return response.data;
    }
}
