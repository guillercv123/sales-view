import axios from "axios";
import { loadingManager } from "./loadingManager";
import {showToast} from "@/utils/alert";
const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
instance.interceptors.request.use(
    (config) => {
        loadingManager.set(true); // muestra el loading
        return config;
    },
    (error) => {
        loadingManager.set(false);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        loadingManager.set(false); // oculta el loading
        return response;
    },
    (error) => {
        loadingManager.set(false);
        showToast("error", error.response?.data?.error || "Error de conexión");
        return Promise.reject(error);
    }
);


export default instance;
