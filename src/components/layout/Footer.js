import CreateTask from "../CreateTask";
import { useState } from "react";
const Footer = () => {
  const [visible_add, setVisibleAdd] = useState(false);

  const onCloseAdd = (e) => {
    setVisibleAdd(e);
  };

  return (
    <>
      {visible_add && <CreateTask onCloseAdd={onCloseAdd} />}

      <div className="inset-x-0 m-auto max-w-lg bottom-0 fixed">
        <div className="flex justify-center  mb-5 ">
          <div
            onClick={() => {
              setVisibleAdd(true);
            }}
            className="text-white text-[25px] bg-gradient-to-r from-blue-500  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            +
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
