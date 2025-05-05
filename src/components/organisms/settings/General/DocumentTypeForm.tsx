import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import React, {useEffect, useState} from "react";
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

// Create a global state to persist data across tab changes
let documentTypesData: {
    items: IDocumentType[];
    isLoaded: boolean;
    isLoading: boolean;
} = {
    items: [],
    isLoaded: false,
    isLoading: false
};

const DocumentTypeForm = () => {
    const [localState, setLocalState] = useState(documentTypesData);

    const fetchData = async () => {
        if (documentTypesData.isLoading || documentTypesData.isLoaded) {
            return;
        }

        documentTypesData = { ...documentTypesData, isLoading: true };
        setLocalState({ ...documentTypesData });

        try {
            const { resp } = await documentTypeService.findAll();
            documentTypesData = {
                items: resp,
                isLoaded: true,
                isLoading: false
            };
            setLocalState({ ...documentTypesData });
        } catch (error) {
            console.error("Error fetching document types:", error);
            documentTypesData = { ...documentTypesData, isLoading: false };
            setLocalState({ ...documentTypesData });
        }
    };

    const handleToggle = (id: number, value: boolean) => {
        documentTypesData = {
            ...documentTypesData,
            items: documentTypesData.items.map(item =>
                item.id === id ? { ...item, active: value } : item
            )
        };
        setLocalState({ ...documentTypesData });
    };

    useEffect(() => {
        if (!documentTypesData.isLoaded && !documentTypesData.isLoading) {
            fetchData();
        }
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
                {localState.isLoading ? (
                    <div>Cargando tipos de documentos...</div>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Descripción</TableHead>
                                <TableHead className="text-right">Estado</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {localState.items.map((item) => (
                                <DocumentTypeRow
                                    key={item.id}
                                    data={item}
                                    onToggle={handleToggle}
                                />
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
        </Card>
    );
};

export default DocumentTypeForm;
