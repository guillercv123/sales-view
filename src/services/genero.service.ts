import axios from "@/lib/axios";

export const GeneroService =  {

    findAll:async() => {
        const response = await axios.get("/genero/");
        return response.data;
    },
    create: async (form:any) => {
        const response = await axios.post("/genero/",form);
        return response.data;
    },
    update:async(form:any) => {
        const response = await axios.put("/genero/",form);
        return response.data;
    },
    desactivar:async(form:any)  => {
        const response = await axios.patch("/genero/eliminar/",form);
        return response.data;
    }
}
