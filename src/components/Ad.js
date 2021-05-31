import React from "react";
import styled from "styled-components";

const Ad = props => {
  return (
    <AdWrapper>
      {props.children}
      <span></span>
    </AdWrapper>
  );
};

export default Ad;

const AdWrapper = styled.div`
  height: 8.8em;
  background-color: black;
  align-self: center;
  width: clamp(50%, 71em, 100%);
  display: grid;
  place-content: center;
  color: #fff;
`;
