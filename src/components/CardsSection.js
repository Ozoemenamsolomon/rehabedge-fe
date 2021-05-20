import React from "react";

import Card from "../components/Card";
import styled from "styled-components";

const CardsSection = () => {
  return (
    <CardsWrapper>
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
    </CardsWrapper>
  );
};

export default CardsSection;

const CardsWrapper = styled.section`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;
`;
