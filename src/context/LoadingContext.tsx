import React, {createContext, useContext, useEffect, useState} from "react";
import {loadingManager} from "@/lib/loadingManager";

const LoadingContext = createContext({
    loading: false,
    setLoading: (value: boolean) => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadingManager.register(setLoading);
    }, []);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};
