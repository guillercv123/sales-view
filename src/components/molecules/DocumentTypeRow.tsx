import {TableCell, TableRow} from "@/components/ui/table";
import {Switch} from "@/components/ui/switch";
import React from "react";
import {IDocumentType} from "@/types/document-type.interface";



interface DocumentTypeRowProps {
    data: IDocumentType;
    onToggle: (id: number, value: boolean) => void;
}
export const DocumentTypeRow: React.FC<DocumentTypeRowProps> = ({ data, onToggle }) => {
    return (
        <TableRow key={data.id}>
            <TableCell>{data.description}</TableCell>
            <TableCell className="text-right">
                <Switch
                    checked={data.active}
                    onCheckedChange={(checked) => onToggle(data.id, checked)}
                    id={`doc-type-${data.id}`}
                />
            </TableCell>
        </TableRow>
    );
};
