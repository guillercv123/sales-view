// routes.tsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BlankLayout from "@/components/templates/BlankLayout";
import LoginPage from "@/components/pages/LoginPage";
import RegisterPage from "@/components/pages/RegisterPage";
import ResetPasswordPage from "@/components/pages/ResetPasswordPage";
import FullLayout from "@/components/templates/FullLayout";
import ClientePage from "@/components/pages/ClientePage";
import Dashboard from "@/components/pages/DashboardPage";

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
            { path: "cliente", element: <ClientePage /> },
        ],
    },
]);

export default router;
