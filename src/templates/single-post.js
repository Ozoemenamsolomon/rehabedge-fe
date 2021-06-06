import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import PageWrapper from "../components/PageWrapper";

export const query = graphql`
  query($slug: String) {
    allStrapiArticle(filter: { Slug: { eq: $slug } }) {
      nodes {
        id
        Read_duration
        Slug
        Titel
        Content
        Images {
          url
        }
        Categories {
          name
          id
        }
      }
    }
  }
`;

const SinglePost = ({ data }) => {
  return (
    <Layout>
      <PageWrapper>
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <h1
            style={{
              textTransform: `uppercase`,
              textAlign: `center`,
              marginTop: `1em`,
            }}
          >
            {data.allStrapiArticle.nodes[0].Titel}
          </h1>
          <img
            style={{
              maxWidth: `85%`,
              marginTop: `3em`,
            }}
            src={data.allStrapiArticle.nodes[0].Images.url}
            alt=""
          />
        </div>
      </PageWrapper>
    </Layout>
  );
};

export default SinglePost;
