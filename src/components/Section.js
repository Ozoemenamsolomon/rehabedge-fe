import React from "react";
import styled from "styled-components";

const Section = ({ children }) => {
  return (
    <SectionWrapper>
      <SectionTitleWrapper>
        <SectionTitle>Recent</SectionTitle>
      </SectionTitleWrapper>

      {children}
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
  font-size: x-large;
`;
