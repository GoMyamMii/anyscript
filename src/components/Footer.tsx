import React from "react";

import styled from "styled-components";

const Footer = () => {
  return <CustomFooter>발</CustomFooter>;
};

const CustomFooter = styled.footer`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
`;

export default Footer;
