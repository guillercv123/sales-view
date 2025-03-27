import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "@/components/pages/LoginPage"
import RegisterPage from "@/components/pages/RegisterPage"
import ResetPasswordPage from "@/components/pages/ResetPasswordPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/resetPassword" element={<ResetPasswordPage />} />
            </Routes>
        </BrowserRouter>
    )
}
