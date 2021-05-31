import React from "react";
import styled from "styled-components";

const PageWrapper = ({ children }) => {
  return <TheDiv>{children}</TheDiv>;
};

export default PageWrapper;

const TheDiv = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-height: 80vh;
  padding: 0 1.0875rem 1.45rem;
  display: flex;
  flex-direction: column;
`;
