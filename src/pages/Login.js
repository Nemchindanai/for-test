import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error_msg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("access_token")) {
      navigate("/todo-list");
    }
  }, []);

  const onSubmit = async () => {
    axios
      .post("https://candidate.neversitup.com/todo/users/auth", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(1);
        if (res.status === 200) {
          const token = res.data.token;
          window.localStorage.setItem("access_token", token);
          navigate("/todo-list");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(err.response.data.message);
      });
  };

  return (
    <>
      <div className="w-[250px] bg-[#B3E3F8] rounded-md">
        <div className="text-[28px] text-center text-white">LOGIN</div>

        <div className="grid p-2 gap-4">
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full text-[14px] focus:outline-none focus:rounded-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-[14px] focus:outline-none focus:rounded-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm"
          />
          {error_msg && <div className="text-red-800">* {error_msg}</div>}

          <button
            onClick={onSubmit}
            disabled={username && password ? false : true}
            className={
              username && password
                ? `bg-[#85BEF9] rounded-xl cursor-pointer text-white`
                : `bg-gray-300 text-gray-400 cursor-no-drop  rounded-xl`
            }
          >
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
