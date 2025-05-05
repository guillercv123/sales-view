// routes.tsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BlankLayout from "@/components/templates/BlankLayout";
import LoginPage from "@/components/pages/LoginPage";
import RegisterPage from "@/components/pages/RegisterPage";
import ResetPasswordPage from "@/components/pages/ResetPasswordPage";
import FullLayout from "@/components/templates/FullLayout";
import ClientsPage from "@/components/pages/clients/ClientsPage";
import NewClientPage from "@/components/pages/clients/NewClientPage";
import SettingPage from "@/components/pages/settings/SettingPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BlankLayout />,
        children: [
            { index: true, element: <LoginPage /> }, // default route
            { path: "register", element: <RegisterPage /> },
            { path: "resetPassword", element: <ResetPasswordPage /> },
        ],
    },
    {
        path: "/panel",
        element: <FullLayout />,
        children: [
         //   { index: true, element: <Dashboard /> }
            { path: "clients", element: <ClientsPage /> },
            { path: "nuevoCliente", element: <NewClientPage /> },
            { path: "general", element: <SettingPage /> },
        ],
    },
]);

export default router;
