import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import Login from "./pages/Login";
import Layout from "./components/layout/Index";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Login />} />
          <Route index element={<Login />} />
          <Route path="todo-list" element={<TodoList />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
