import React from "react";

import styled from "styled-components";

const Header = () => {
  return <CustomHeader>머리</CustomHeader>;
};

const CustomHeader = styled.header`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
`;

export default Header;
