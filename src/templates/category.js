import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageWrapper from "../components/PageWrapper";
import CardsSection from "../components/CardsSection";
import Card from "../components/Card";

const category = () => {
  return (
    <Layout>
      <PageWrapper>
        <Seo title="Home" />
        <CardsSection sectionTitle="I want the category title dynamic!">
          <Card
            title="How to be a man"
            readtime={12}
            excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
            date="april 16, 2020"
            imageurl=""
          ></Card>
          <Card
            title="How to be a woman"
            readtime={3}
            excerpt="jhdfgh15"
            date="april 16, 2020"
            imageurl=""
          ></Card>
          <Card></Card>
          <Card
            title="How to be a man"
            readtime={4}
            excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
            date="april 16, 2020"
            imageurl=""
          ></Card>
          <Card></Card>
          <Card></Card>
        </CardsSection>
      </PageWrapper>
      {/*
       <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}<p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
      /> */}
    </Layout>
  );
};

export default category;