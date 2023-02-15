import { toast } from 'react-toastify';

export const handleError = (errorString: any) => {
    const error = JSON.parse(errorString.message);
    if (error?.errors?.forEach) {
        error?.errors?.forEach((error: any) => toast.error(error.message, { autoClose: 5000 }));
    } else if (error.message) {
        toast.error(error.message, { autoClose: 5000 });
    } else if (error.error) {
        toast.error(error.error, { autoClose: 5000 });
    } else {
        toast.error('Something went wrong', { autoClose: 5000 });
    }
    return error;
};
