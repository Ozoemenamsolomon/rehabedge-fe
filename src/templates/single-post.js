import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
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
              margin: `3em 0`,
            }}
            src={data.allStrapiArticle.nodes[0].Images.url}
            alt=""
          />
        </div>
        <ReactMarkdown
          remarkPlugins={[gfm]}
          rehypePlugins={[rehypeRaw]}
          children={data.allStrapiArticle.nodes[0].Content}
        />
      </PageWrapper>
    </Layout>
  );
};

export default SinglePost;
