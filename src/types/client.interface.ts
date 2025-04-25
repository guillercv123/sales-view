import {IPersistence} from "@/types/persistence.interface";

export interface IClienteReq extends IPersistence{
    fullName: string;
    surname: string;
    email: string;
    idTypeDocument: number;
    idGenero: number;
    phone: string;
}
