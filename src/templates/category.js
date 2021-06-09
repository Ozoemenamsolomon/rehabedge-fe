import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageWrapper from "../components/PageWrapper";
import CardsSection from "../components/CardsSection";
import Card from "../components/Card";
import { graphql } from "gatsby";

export const query = graphql`
  query MyQuery($slug: String) {
    allStrapiCategory(filter: { Slug: { eq: $slug } }) {
      nodes {
        Slug
        name
        id
        article {
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

const category = ({ data }) => {
  const categoryCards = data.allStrapiCategory.nodes[0].article;
  return (
    <Layout>
      <PageWrapper>
        <Seo title="Home" />
        <CardsSection sectionTitle={data.allStrapiCategory.nodes[0].name}>
          {
            categoryCards.map(categoryCard => {
              return (
                <Card
                  key={categoryCard.id}
                  title={categoryCard.Titel}
                  readtime={categoryCard.Read_duration}
                  excerpt={categoryCard.Excerpt}
                  date={categoryCard.Date}
                  imageurl={categoryCard.Images.formats.thumbnail.url}
                  imagealt={categoryCard.Images.alternativeText}
                  slug={categoryCard.Slug}
                  path={`/posts/${categoryCard.Slug}`}
                ></Card>
              );
            }) /***/
          }
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
