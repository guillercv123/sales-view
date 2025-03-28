import axios from "axios";
import { loadingManager } from "./loadingManager";
import {showToast} from "@/utils/alert";
import {TOAST_TYPES} from "@/constants/alerts";
const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
instance.interceptors.request.use(
    (config) => {
        loadingManager.set(true);
        return config;
    },
    (error) => {
        loadingManager.set(false);
        return Promise.reject(new Error(error))
    }
);

instance.interceptors.response.use(
    (response) => {
        loadingManager.set(false);
        return response;
    },
    (error) => {
        loadingManager.set(false);
        return Promise.reject(new Error(error.response?.data?.error))
    }
);


export default instance;
