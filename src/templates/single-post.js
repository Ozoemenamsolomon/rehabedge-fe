import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import styled from "styled-components";
import Seo from "../components/seo";

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
      <Seo
        title={data.allStrapiArticle.nodes[0].Titel}
        description={data.allStrapiArticle.nodes[0].Excerpt}
        meta={[
          <meta
            property="og:title"
            content={data.allStrapiArticle.nodes[0].Titel}
          />,
          <meta
            property="og:description"
            content={data.allStrapiArticle.nodes[0].Excerpt}
          />,
          <meta property="og:type" content="article" />,
          <meta
            property="og:url"
            content={`https://www.rehabedge.ng/posts/${data.allStrapiArticle.nodes[0].Slug}`}
          />,
          <meta
            property="og:image"
            content={data.allStrapiArticle.nodes[0].Images.url}
          />,

          <meta name="twitter:card" content="summary" />,
          <meta
            name="twitter:title"
            content={data.allStrapiArticle.nodes[0].Titel}
          />,
          <meta
            name="twitter:description"
            content={data.allStrapiArticle.nodes[0].Excerpt}
          />,
          <meta
            name="twitter:image"
            content={data.allStrapiArticle.nodes[0].Images.url}
          />,
        ]}
      />
      <PageWrapper>
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
  text-align: justify;
  overflow-wrap: break-word;
  & * {
    margin: revert;
    padding: revert;
    box-sizing: revert;
  }
  & h1 {
    /* display: none; */
  }

  & h2 {
    padding-bottom: 0.2em;
    border-bottom: 4px solid #2f4293;
  }
  & blockquote {
    border-left: 4px solid #2f4293;
    padding-left: 1em;
  }
  & img {
    max-width: 90%;
  }
`;
