import { useLoading } from "@/context/LoadingContext";
import { Loader2 } from "lucide-react"; // ícono opcional
import React from "react";

const GlobalLoader = () => {
    const { loading } = useLoading();

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3">
                <Loader2 className="animate-spin h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Cargando...</span>
            </div>
        </div>
    );
};

export default GlobalLoader;
