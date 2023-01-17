import { ConvertDate, ConvertTime } from "../util/method";
import axios from "axios";
import { api, access_token } from "../config";
import { useState } from "react";
import UpdateTask from "./UpdateTask";

const List = (props) => {
  const [edit, setEdit] = useState({ data: {}, status: false });

  const onCloseUpdate = (e) => {
    setEdit({ data: {}, status: e });
  };

  const onClose = (e) => {
    axios
      .delete(api + "todos/" + e, {
        headers: {
          Authorization: access_token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onEdit = (e) => {
    setEdit({ data: e, status: true });
  };

  return (
    <>
      {edit.status && (
        <UpdateTask onCloseUpdate={onCloseUpdate} data={edit.data} />
      )}

      <div
        className="flex gap-2 mb-3 shadow-md rounded-md p-1 bg-white cursor-pointer"
        onClick={() => onEdit(props.data)}
      >
        <div className="grow">
          <div>{props.data.title}</div>
          <div className="text-[10px]">{props.data.description}</div>
        </div>
        <div className="flex-none w-10 text-end ">
          <div className="text-[14px] font-bold">
            {ConvertDate(props.data.createdAt)}
          </div>
          <div className="text-[12px] text-gray-400">
            {ConvertTime(props.data.createdAt)}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div
          className="  cursor-pointer  -mt-[68px] -mr-1"
          onClick={() => onClose(props.data._id)}
        >
          <span className="bg-red-500 px-[5px] rounded-full text-white text-[12px]">
            x
          </span>
        </div>
      </div>
    </>
  );
};

export default List;
