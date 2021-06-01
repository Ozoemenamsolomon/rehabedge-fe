import React from "react";

import Card from "../components/Card";
import styled from "styled-components";
import Section from "./Section";

const CardsSection = ({ sectionTitle }) => {
  return (
    <Section title={sectionTitle}>
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
    </Section>
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
