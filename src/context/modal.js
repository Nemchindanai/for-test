import { useState } from "react";

const Modal = () => {
  const [success, setSuccess] = useState(false);

  const setModalSuccess = (event) => {
    console.log("this is setModal");
    console.log("success1", success);
    console.log(event);
    setSuccess(event);

    // await setSuccess({ ...success, status: e });
    console.log("success", success);
  };

  return { success, setModalSuccess };
};

export default Modal;
