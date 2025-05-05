import React from "react";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {GeneroForm} from "@/components/organisms/settings/General/GeneroForm";
import DocumentTypeForm from "@/components/organisms/settings/General/DocumentTypeForm";

const tabsConfig = [
    { value: 'documentType', label: 'Tipo de Documento', Component: DocumentTypeForm },
    { value: 'gender', label: 'Genero', Component: GeneroForm },
];

const GeneralPage = ()=>{
    const gridCols = `grid-cols-${tabsConfig.length}`;
    return (
        <Tabs defaultValue={tabsConfig[0].value} className="w-full">
            <TabsList className={`grid w-full ${gridCols}`}>
                {
                    tabsConfig.map(({value, label}) => (
                        <TabsTrigger  key={value} value={value}>{label}</TabsTrigger>
                    ))}
            </TabsList>
            {tabsConfig.map(({ value, Component }) => (
                <TabsContent key={value} value={value}>
                    <Component />
                </TabsContent>
            ))}
        </Tabs>
    )
}

export default GeneralPage;
