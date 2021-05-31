import React from "react";

import Card from "../components/Card";
import styled from "styled-components";

const CardsSection = () => {
  return (
    <CardsWrapper>
      <SectionTitleWrapper>
        <SectionTitle>Recent</SectionTitle>
      </SectionTitleWrapper>
      <CardsDiv>
        <Card
          title="How to be a man"
          readtime="hjadg"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
          date="april 16, 2020"
          imageurl=""
        ></Card>
        <Card
          title="How to be a woman"
          readtime="hjadg"
          excerpt="jhdfgh15"
          date="april 16, 2020"
          imageurl=""
        ></Card>
        <Card></Card>
        <Card
          title="How to be a man"
          readtime="4"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
          date="april 16, 2020"
          imageurl=""
        ></Card>
        <Card></Card>
        <Card></Card>
        <Card
          title="How to be a man"
          readtime="4"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
          date="april 16, 2020"
          imageurl=""
        ></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card
          title="How to be a man"
          readtime="4"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
          date="april 16, 2020"
          imageurl=""
        ></Card>
        <Card></Card>
      </CardsDiv>
    </CardsWrapper>
  );
};

export default CardsSection;

const CardsWrapper = styled.section`
  padding-top: 2.5em;
`;

const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const SectionTitle = styled.h3`
  text-transform: uppercase;
`;
const CardsDiv = styled.div`
  padding-top: 1.5em;
  display: flex;
  gap: 1.5em;
  flex-wrap: wrap;
  justify-content: center;
`;
