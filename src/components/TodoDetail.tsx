import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../redux/config/configStore";

const TodoDetail = () => {
  const todos = useSelector((state: RootState) => state.todoList);

  const param = useParams();

  console.log(param);

  const todo = todos.find((todo) => todo.id === param.ipppp);

  const navigate = useNavigate();

  return (
    <div>
      <div>{todo?.title}</div>
      <div>{todo?.content}</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Main 으로..
      </button>
    </div>
  );
};

export default TodoDetail;
