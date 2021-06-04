import React from "react";

import styled from "styled-components";

const CardsSection = props => {
  return (
    <SectionWrapper>
      <SectionTitleWrapper>
        <SectionTitle>{props.sectionTitle}</SectionTitle>
      </SectionTitleWrapper>
      <CardsDiv>{props.children}</CardsDiv>
    </SectionWrapper>
  );
};

export default CardsSection;

const CardsDiv = styled.div`
  padding-top: 1.5em;
  display: flex;
  gap: 1.5em;
  flex-wrap: wrap;
  justify-content: center;
`;

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
