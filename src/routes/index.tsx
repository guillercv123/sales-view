import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "@/components/pages/LoginPage"
import RegisterPage from "@/components/pages/RegisterPage"
import React from "react"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    )
}
