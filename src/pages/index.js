import * as React from "react";
import { graphql } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import CardsSection from "../components/CardsSection";
import FeaturedCardsSwiper from "../components/FeaturedCardsSwiper";
import Ad from "../components/Ad";
import NewsLetter from "../components/NewsLetter";
// import styled from "styled-components";

export const query = graphql`
  {
    allStrapiArticle(sort: { fields: Date, order: DESC }) {
      edges {
        node {
          id
          Titel
          Date(locale: "en-gb", formatString: "LL")
          Slug
          Read_duration
          Excerpt
          Images {
            alternativeText
            formats {
              thumbnail {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <PageWrapper>
        <Seo title="Home" />

        <FeaturedCardsSwiper></FeaturedCardsSwiper>
        <Ad>AD Belongs Here!</Ad>
        <CardsSection sectionTitle="Recent">
          {data.allStrapiArticle.edges.map(edge => {
            return (
              <Card
                key={edge.node.id}
                title={edge.node.Titel}
                readtime={edge.node.Read_duration}
                excerpt={edge.node.Excerpt}
                date={edge.node.Date}
                imageurl={edge.node.Images.formats.thumbnail.url}
                imagealt={edge.node.Images.alternativeText}
                slug={edge.node.Slug}
                path={`/posts/${edge.node.Slug}`}
              ></Card>
            );
          })}
        </CardsSection>
        <NewsLetter></NewsLetter>
      </PageWrapper>
    </Layout>
  );
};

export default IndexPage;
