import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import styled from "styled-components";

export const query = graphql`
  query($slug: String) {
    allStrapiArticle(filter: { Slug: { eq: $slug } }) {
      nodes {
        id
        Read_duration
        Slug
        Titel
        Content
        Excerpt
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
      <div
        id="TitleImage"
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
      <PageWrapper>
        <PostContent>
          <ReactMarkdown
            remarkPlugins={[gfm]}
            rehypePlugins={[rehypeRaw]}
            children={data.allStrapiArticle.nodes[0].Content}
          />
        </PostContent>
      </PageWrapper>
    </Layout>
  );
};

export default SinglePost;

const PostContent = styled.div`
  & * {
    margin: revert;
    padding: revert;
    box-sizing: revert;
  }
  & h1 {
    display: none;
  }

  & h2 {
    padding-bottom: 0.2em;
    border-bottom: 0.2px solid #2f4293;
  }
`;
