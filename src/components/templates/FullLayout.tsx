import React from "react"
import {AppSidebar}  from "@/components/atoms/sidebar"
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "../ui/breadcrumb";
import {Outlet, useLocation} from "react-router";

const routeTitles = {
    'panel': 'Panel',
    'cliente': 'Clientes',
    'models': 'Modelos',
    'settings': 'Configuración',

};
const getBreadcrumbData = (pathname:any) => {

    const segments = pathname.split('/').filter((segment:any) => segment !== '');


    if (segments.length === 0) {
        return [{
            label: 'Home',
            path: '/',
            isLast: true
        }];
    }

    // Construye el array de breadcrumb
    const breadcrumbs = [];
    let currentPath = '';

    // Agrega la ruta Home
    breadcrumbs.push({
        label: 'Home',
        path: '/',
        isLast: false
    });

    // Construye cada parte del breadcrumb
    segments.forEach((segment:any, index:any) => {
        currentPath += `/${segment}`;
        const isLast = index === segments.length - 1;

        // Usa el título mapeado o capitaliza el segmento
        // @ts-ignore
        const label = routeTitles[segment] ||
            segment.charAt(0).toUpperCase() + segment.slice(1);

        breadcrumbs.push({
            label,
            path: currentPath,
            isLast
        });
    });

    return breadcrumbs;
};

const FullLayout = () => {
    const location = useLocation();
    const breadcrumbs = getBreadcrumbData(location.pathname);
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {breadcrumbs.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
                                        <BreadcrumbItem className="hidden md:block">
                                            {item.isLast ? (
                                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                            ) : (
                                                <BreadcrumbLink href={item.path}>{item.label}</BreadcrumbLink>
                                            )}
                                        </BreadcrumbItem>
                                    </React.Fragment>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                        <Outlet />
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default FullLayout
