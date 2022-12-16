import React from "react";
import { deleteTodo, toggleTodo } from "../redux/modules/todoList";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Todo = ({ todo }) => {
  const dispatch = useDispatch(); // hook 을 안에서 쓸 수 있게끔 우회시켜주는 녀석

  return (
    <div>
      <div>{todo.title}</div>
      <div>{todo.content}</div>
      <Link to={`/todo-detail/${todo.id}`}>
        <span style={{ cursor: "pointer" }}>{todo.title} 로 이동</span>
      </Link>
      <button
        onClick={() => {
          dispatch(toggleTodo(todo.id));
        }}
      >
        Done/Todo
      </button>
      <button
        onClick={() => {
          dispatch(deleteTodo(todo.id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
