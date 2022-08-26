import {toast} from 'react-toastify'

const BASE_URL_LOGIN = 'https://frontend-test-backend.tritronik.com/Auth/login';


const notifError = () => {
    toast.error('Invalid Username / Password !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}
const notifSuccess = () => {
    toast.success('Login Success !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}



export {BASE_URL_LOGIN, notifError, notifSuccess}