import React from "react";
import styled from "styled-components";

const FeaturedCard = props => {
  return <FeaturedWrapper>{props.children}</FeaturedWrapper>;
};

export default FeaturedCard;

const FeaturedWrapper = styled.div`
  min-height: 30em;
  background-color: green;
`;
