import {Button} from "@/components/ui/button";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {clientService} from "@/services/client.service";
import {IClientResp} from "@/types/client.interface";
import {AgGridReact} from "ag-grid-react";
import {colorSchemeDarkWarm, colorSchemeLightWarm, themeQuartz} from "ag-grid-community";
import ButtonPrimay from "@/components/atoms/Button";

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
    const filterParams = {
        comparator: (filterLocalDateAtMidnight: any, cellValue: any) => {
            const dateAsString = cellValue;
            if (dateAsString == null) return -1;
            const dateParts = dateAsString.split("/");
            const cellDate = new Date(
                Number(dateParts[2]),
                Number(dateParts[1]) - 1,
                Number(dateParts[0]),
            );
            if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
                return 0;
            }
            if (cellDate < filterLocalDateAtMidnight) {
                return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
                return 1;
            }
            return 0;
        },
    };
    const [colDefs, setColDefs] = useState([
        { field: "fullName", headerName: "Nombres"},
        { field: "surname", headerName: "Apellidos" },
        { field: "email", headerName: "Correo" },
        { field: "descriptionTypeDocument", headerName: "Tipo de Documento" },
        { field: "numberDocument", headerName: "Número Documento" },
        { field: "descriptionGenero", headerName: "Género" },
        { field: "createUser", headerName: "Usuario",},
        { field: "createDate", headerName: "Fecha de Registro" ,
            filter: 'agDateColumnFilter',
            filterParams: filterParams,
            valueFormatter: (params:any) => {
                if (!params.value) return '';
                const date = new Date(params.value);
                return date.toLocaleDateString('es-ES', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                });
            }
        },
        {
            colId: "actions",
            headerName: "Actions",
            cellRenderer: ButtonPrimay,
        },
    ]);
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 150,
            filter: "agTextColumnFilter",
            suppressHeaderMenuButton: true,
            suppressHeaderContextMenu: true,
        };
    }, []);

    return (
        <div>
            <Button className="py-4 mb-4" onClick={routerNuevo}>Nuevo cliente</Button>

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
