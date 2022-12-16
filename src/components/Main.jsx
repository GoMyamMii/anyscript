import React from "react";
import styled from "styled-components";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Main = () => {
  return (
    <MainContainer>
      <TodoInput />
      <TodoList />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Main;
