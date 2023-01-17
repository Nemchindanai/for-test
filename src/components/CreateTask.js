import { useState, useEffect } from "react";
import { useAppContext } from "../context/state";
// import DatePicker from "react-datepicker";
// import TimePicker from "react-time-picker";
import axios from "axios";
import env from "../config";

import "react-datepicker/dist/react-datepicker.css";
const NewTask = ({ onCloseAdd }) => {
  //   const [date, setDate] = useState(new Date());
  //   const [time, setTime] = useState("10:00");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [validate_error, setValidateError] = useState({
    name: false,
    description: false,
  });

  const { Modal } = useAppContext();
  const { setModalSuccess } = Modal();

  useEffect(() => {
    if (name) {
      setValidateError({ ...validate_error, name: false });
    }
  }, [name]);

  useEffect(() => {
    if (description) {
      setValidateError({ ...validate_error, description: false });
    }
  }, [description]);

  const onSubmit = () => {
    if (!name || !description) {
      if (!description) {
        setValidateError({ ...validate_error, description: true });
      }
      if (!name) {
        setValidateError({ ...validate_error, name: true });
      }
    } else {
      axios
        .post(
          env.api + "todos",
          { title: name, description: description },
          {
            headers: {
              Authorization: env.access_token,
            },
          }
        )
        .then((res) => {
          if (res.status == 200) {
            setModalSuccess(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="absolute h-screen flex  z-50">
        <div
          className="w-[20%] h-full bg-blue-800 opacity-20 "
          onClick={(event) => {
            onCloseAdd(false);
          }}
        />
        <div className="w-screen h-full  bg-white">
          <div className="grid gap-y-4 p-4">
            <div className="font-bold">NEW TASK</div>
            <div>
              <div className="text-[12px] text-gray-400 ">Name</div>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className={
                  validate_error.name
                    ? "border border-red-500 w-full rounded-md focus:outline-none focus:border-b-1 focus:red-b-blue-500"
                    : "border w-full rounded-md focus:outline-none focus:border-b-1 focus:border-b-blue-500"
                }
              />
              {validate_error.name && (
                <div className="text-red-500">is required</div>
              )}
            </div>
            <div>
              <div className="text-[12px] text-gray-400 ">Description</div>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                rows="4"
                className={
                  validate_error.description
                    ? "border border-red-500 w-full rounded-md focus:outline-none focus:border-b-1 focus:red-b-blue-500"
                    : "border w-full rounded-md focus:outline-none focus:border-b-1 focus:border-b-blue-500"
                }
              />
              {validate_error.description && (
                <div className="text-red-500">is required</div>
              )}
            </div>
            {/* <div>
              <div className="text-[12px] text-gray-400">Date</div>
              <DatePicker
                className="border w-full "
                selected={date}
                onChange={(date) => setDate(date)}
              />
            </div>
            <div>
              <div className="text-[12px] text-gray-400">Time</div>
              <TimePicker className="w-full " onChange={setTime} value={time} />
            </div> */}

            <div className="pt-10">
              <button
                onClick={onSubmit}
                type="submit"
                className="w-[80px] cursor-pointer text-white rounded-xl bg-gradient-to-tr from-blue-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTask;
