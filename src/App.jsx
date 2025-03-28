import './App.css'
import router from "./routes"
import { RouterProvider } from "react-router";
import {Toaster} from "sonner";
import {ThemeToggle} from "@/components/molecules/ThemeToggle.js";

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Toaster position="top-right" richColors />
            <ThemeToggle />
        </>
    );
}

export default App;
