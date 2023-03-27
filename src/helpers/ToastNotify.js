import toast from "react-hot-toast";

export const toastWarnNotify = (msg) =>
  toast.error(msg, {
    duration: 3000,
    position: "top-center",
    style: { color: "red" },
    icon: "😲",
  });

export const toastSuccessNotify = (msg) =>
  toast.success(msg, {
    duration: 3000,
    position: "top-center",
    style: { color: "green" },
  });

export const toastErrorNotify=(msg)=>toast.error(msg,{
    duration: 3000,
    position: "top-center",
}) 


//! <button onClick={toastWarnNotify}>merhaba</button>