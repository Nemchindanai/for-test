import CreateTask from "../CreateTask";
import { useState } from "react";
import logout from "../../assets/img/logout.svg";

const Footer = () => {
  const [visible_add, setVisibleAdd] = useState(false);

  const onCloseAdd = (e) => {
    setVisibleAdd(e);
  };

  const onLogout = () => {
    localStorage.removeItem("access_token");
    window.location.reload(false);
  };

  return (
    <>
      {visible_add && <CreateTask onCloseAdd={onCloseAdd} />}

      <div className="inset-x-0 m-auto max-w-lg bottom-0 fixed">
        <div className="flex justify-center  mb-5 gap-4">
          <div
            onClick={() => {
              setVisibleAdd(true);
            }}
            className="text-white text-[25px] bg-gradient-to-r from-blue-500  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            +
          </div>

          <div
            onClick={onLogout}
            className="text-white text-[25px] bg-gradient-to-r from-blue-500  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={logout} className="w-5 h-5 text-white" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
