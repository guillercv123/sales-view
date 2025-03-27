
import React from "react"
import { Outlet } from "react-router-dom"
import { AppSidebar } from "@/components/atoms/sidebar"
import {SidebarProvider} from "@/components/ui/sidebar";
import { Header } from "../atoms/header";

const FullLayout = () => {
    const [open, setOpen] = React.useState(true)
    return (
        <SidebarProvider open={open} onOpenChange={setOpen}>
        <div className="flex h-screen w-full overflow-hidden dark:bg-darkgray">
            {/* Sidebar */}
            <aside className="border-r border-border dark:bg-darkgray">
                <AppSidebar />
            </aside>

            {/* Main */}
            <div className="flex flex-col flex-1 h-full overflow-hidden">
                <header className="sticky top-0 z-50 w-full border-b dark:bg-darkgray">
                    <Header />
                </header>
                <main className="flex-1 overflow-y-auto bg-lightgray dark:bg-dark">
                    <div className="container py-6">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
        </SidebarProvider>
    )
}

export default FullLayout
