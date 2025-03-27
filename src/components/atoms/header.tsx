import { SidebarTrigger } from "@/components/ui/sidebar"
import React from "react"

export function Header() {
    return (
        <div className="flex items-center justify-between px-4 py-3">
            <SidebarTrigger>
                <div></div>
            </SidebarTrigger>
            <h1 className="text-xl font-semibold">Mi Panel</h1>
        </div>
    )
}
