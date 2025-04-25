import './App.css'
import router from "./routes"
import { RouterProvider } from "react-router";
import {Toaster} from "sonner";
 import {ThemeToggle} from "@/components/molecules/ThemeToggle.js";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

function App() {
    ModuleRegistry.registerModules([AllCommunityModule]);
    return (
        <>
            <RouterProvider router={router} />
            <ThemeToggle />
            <Toaster position="top-right" richColors />
        </>
    );
}

export default App;
