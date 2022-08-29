import { toast } from "react-toastify";
const BASE_URL = "https://frontend-test-backend.tritronik.com/";
const BASE_URL_LOGIN = "https://frontend-test-backend.tritronik.com/Auth/login";

const notifError = () => {
  toast.error("Invalid Username / Password !", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
const notifSuccess = () => {
  toast.success("Login Success !", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const notifAdd = (item) => {
  toast.success(`project ${item} has successfully added !`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export { notifAdd, notifError, notifSuccess, BASE_URL_LOGIN, BASE_URL };
