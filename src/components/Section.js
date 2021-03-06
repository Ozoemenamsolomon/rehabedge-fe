import React from "react";
import styled from "styled-components";

const Section = props => {
  return (
    <SectionWrapper>
      <SectionTitleWrapper>
        <SectionTitle>{props.title}</SectionTitle>
      </SectionTitleWrapper>
      <div>{props.children}</div>
    </SectionWrapper>
  );
};

export default Section;

const SectionWrapper = styled.section`
  padding-top: 2.5em;
`;

const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const SectionTitle = styled.h3`
  text-transform: uppercase;
  font-size: xx-large;
  font-weight: bold;
`;
