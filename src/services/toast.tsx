import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export function ToastProvider() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}   
      newestOnTop={false}
      closeOnClick
      pauseOnHover
      draggable
      pauseOnFocusLoss
      theme="light"
    />
  );
}
