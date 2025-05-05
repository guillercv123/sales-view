import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import React, {useEffect, useRef, useState} from "react";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {IDocumentType} from "@/types/document-type.interface";
import {DocumentTypeRow} from "@/components/molecules/DocumentTypeRow";
import {documentTypeService} from "@/services/document-type.service";
const mockData: IDocumentType[] = [
    { id: 1, description: "DNI", active: true },
    { id: 2, description: "RUC", active: false },
];


const DocumentTypeForm  = () => {
    const didFetch = useRef(false);
    const [items, setItems] = React.useState<IDocumentType[]>(mockData);
    const handleToggle = (id: number, value: boolean) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, active: value } : item
            )
        );
    };
    const getListDocumentType = async () => {

            const {resp} = await documentTypeService.findAll();
            setItems(resp);

    };

    useEffect(() => {
        if (didFetch.current) return;
        didFetch.current = true;
        getListDocumentType();
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Tipo de documento</CardTitle>
                <CardDescription>
                    Define y administra los tipos de documentos oficiales utilizados como DNI, RUC, pasaporte, entre otros.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Descripción</TableHead>
                            <TableHead className="text-right">Estado</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.map((item) => (
                            <DocumentTypeRow
                                key={item.id}
                                data={item}
                                onToggle={handleToggle}
                            />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default DocumentTypeForm;
