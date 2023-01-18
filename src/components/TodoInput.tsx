import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todoList";

const TodoInput = (): React.ReactElement => {
  const dispatch = useDispatch();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  return (
    <TodoInputContainer>
      <input ref={titleRef} placeholder="Title" />
      <input ref={contentRef} placeholder="Content" />
      <button
        onClick={() => {
          dispatch(addTodo(titleRef.current, contentRef.current));
        }}
      >
        Add
      </button>
    </TodoInputContainer>
  );
};

const TodoInputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

export default TodoInput;
