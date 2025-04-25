export interface IPersistence{
    createUser: string;
    createDate: string| Date;
    updateUser?: string;
    updateDate?: string;
    deleteUser?: String;
    deleteDate?: string;
}
