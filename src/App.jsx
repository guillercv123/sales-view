import './App.css'
import router from "./routes"
import { RouterProvider } from "react-router";
import {Toaster} from "sonner";

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Toaster position="top-right" richColors />
        </>
    );
}

export default App;
