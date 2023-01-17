import { useAppContext } from "../context/state";
import { useEffect } from "react";

export const ModalSuccess = () => {
  const { Modal } = useAppContext();
  const { success, setModalSuccess } = Modal();
  useEffect(() => {
    console.log("success in modal com", success);
  }, [success]);

  return (
    <>
      {success && (
        <div className="relative">
          <div className="z-30 w-[30%] bg-white rounded-xl center-screen shadow ">
            <div className=" rounded-md w-full p-2 grid gap-y-2">
              <div className="text-center"> Create</div>
              <hr />
              Successfully.
              <div className="flex gap-2 justify-end">
                <button
                  className="bg-blue-400 px-2 rounded-md"
                  onClick={() => {
                    setModalSuccess(false);
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
          <div className="absolute h-screen w-full bg-black opacity-40 z-10"></div>
        </div>
      )}
    </>
  );
};

export const ModalConfrimDelete = (props, { onClickDelete }) => {
  const onDelete = async () => {
    await fetch(process.env.API + "?kid=" + props.data.key_id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status == 200) {
          window.location.reload(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="relative">
        <div className="z-20 w-[30%] center-screen shadow">
          <div className=" rounded-md bg-white w-full p-2 grid gap-y-2">
            <div className="text-center"> Delete URL</div>
            <hr />
            Are you sure to delete?
            <div>URL : {props.data.url}</div>
            <div className="flex gap-2 justify-end">
              <button
                onClick={(event) => props.onClickDelete(false, "", "")}
                className="bg-red-400  px-2 rounded-md"
              >
                Cancel
              </button>
              <button
                className="bg-blue-400 px-2 rounded-md"
                onClick={onDelete}
              >
                OK
              </button>
            </div>
          </div>
        </div>
        <div className="absolute h-screen w-full bg-black opacity-40 z-10"></div>
      </div>
    </>
  );
};
