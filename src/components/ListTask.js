import { ConvertDate, ConvertTime } from "../util/method";

const List = (props) => {
  return (
    <>
      <div className="flex gap-2 mb-2 shadow-md rounded-md p-1 bg-white">
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
    </>
  );
};

export default List;
