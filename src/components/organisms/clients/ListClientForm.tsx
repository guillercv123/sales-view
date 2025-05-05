import {Button} from "@/components/ui/button";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {clientService} from "@/services/client.service";
import {IClientResp} from "@/types/client.interface";
import {AgGridReact} from "ag-grid-react";
import {colorSchemeDarkWarm, colorSchemeLightWarm, themeQuartz} from "ag-grid-community";
import ButtonPrimay from "@/components/atoms/Button";
import {UserPlus} from "lucide-react";

const themeLightWarm = themeQuartz.withPart(colorSchemeLightWarm);
const themeDarkWarm = themeQuartz.withPart(colorSchemeDarkWarm);
const ListClientForm= () => {
    const navigate = useNavigate();
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark') ||
                localStorage.getItem('theme') === 'dark');
        };

        checkTheme();
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    checkTheme();
                }
            });
        });
        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);
    const [clients, setClients] = useState<IClientResp[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const didFetch = useRef(false);
    const routerNuevo = ()=> {
        navigate('/panel/nuevoCliente');
    }
    const getListClients = async () => {
        setLoading(true);
        setError(null);
        try {
            const {resp} = await clientService.listClient();
            setClients(resp);
        } catch (err: any) {
            console.error(err);
            setError("No se pudieron cargar los clientes.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (didFetch.current) return;
        didFetch.current = true;
        getListClients();
    }, []);
    const [colDefs, setColDefs] = useState([
        { field: "descriptionTypeDocument", headerName: "Tipo de Documento"},
        { field: "numberDocument", headerName: "Número Documento" },
        { field: "fullName", headerName: "Nombres"},
        { field: "surname", headerName: "Apellidos" },
        { field: "email", headerName: "Correo" },
        { field: "descriptionGenero", headerName: "Género" },
        {
            colId: "actions",
            headerName: "",
            filter: false,
            sortable: false,
            cellRenderer: ButtonPrimay,
        },
    ]);
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 150,
            floatingFilter: false,
            filter: "agTextColumnFilter",
            suppressHeaderMenuButton: true,
            suppressHeaderContextMenu: true,
        };
    }, []);

    return (
        <div>
            <div className={"flex justify-between"}>
                <div className={"text-2xl py-4"}>
                    <h2 className={"font-normal"}>Lista de clientes</h2>
                </div>
                <Button className="mt-5" onClick={routerNuevo}><UserPlus />Nuevo</Button>
            </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
            <div  className={isDark ? "ag-theme-quartz-dark" : "ag-theme-quartz"} style={{ height: 350, width: '100%' }}>
                    <AgGridReact
                        theme={isDark ? themeDarkWarm : themeLightWarm}
                        loading={loading}
                        rowData={clients}
                        // @ts-ignore
                        columnDefs={colDefs}
                        defaultColDef={defaultColDef}
                    />
                </div>
        </div>
    )
}

export default ListClientForm;
