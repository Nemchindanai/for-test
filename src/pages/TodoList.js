import ListTask from "../components/ListTask";
import env from "../config";
import axios from "axios";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [todo_list, setToDoList] = useState([]);

  useEffect(() => {
    axios
      .get(env.api + "todos", {
        headers: {
          Authorization: env.access_token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setToDoList(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="p-4">
        {todo_list.map((item, index) => (
          <ListTask data={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
