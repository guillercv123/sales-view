import {IPersistence} from "@/types/persistence.interface";

export interface IClienteReq extends IPersistence{
    fullName: string;
    surname: string;
    email: string;
    numberDocument: string;
    idTypeDocument: number;
    idGenero: number;
    phone: string;
}

export interface IClientResp extends IPersistence{
    id: number;
    fullName: string;
    surname: string;
    email: string;
    phone: string;
    descriptionTypeDocument: string;
    descriptionGenero: string;
}
