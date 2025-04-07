import { toast } from "sonner";

type ToastType = "success" | "error" | "info" | "warning";

/**
 * Muestra un toast usando sonner con tipo, mensaje y duración.
 * @param type - Tipo de mensaje ('success' | 'error' | 'info' | 'warning')
 * @param message - Mensaje principal
 * @param timer - Duración del toast en milisegundos (default: 3000)
 */
export const showToast = (type: ToastType, message: string, timer: number = 3000) => {
    const options = {
        duration: timer,
        dismissible: true,
    };

    switch (type) {
        case "success":
            toast.success(message, options);
            break;
        case "error":
            toast.error(message, options);
            break;
        case "info":
            toast.info(message, options);
            break;
        case "warning":
            toast.warning(message, options);
            break;
        default:
            toast(message, options);
    }
};
