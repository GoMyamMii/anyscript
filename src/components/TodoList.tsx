import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Todo from "./Todo";
import { RootState } from "../redux/config/configStore";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todoList);

  const todoItems = todos.filter((todo) => !todo.isDone);
  const doneItems = todos.filter((todo) => todo.isDone);

  return (
    <TodoListContainer>
      <div>
        <p>Todo</p>
        {todoItems.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
      <div>
        <p>Done</p>
        {doneItems.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </TodoListContainer>
  );
};

const TodoListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export default TodoList;
