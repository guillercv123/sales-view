import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

type ToastType = 'success' | 'error' | 'info' | 'warning';

export const showToast = (type: ToastType, message: string, timer: number = 3000) => {
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: type,
        title: message,
        showConfirmButton: false,
        timer,
        timerProgressBar: true,
        customClass: {
            popup: 'rounded-xl shadow-md text-sm',
        }
    });
};
