import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageWrapper from "../components/PageWrapper";
import styled from "styled-components";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export const query = graphql`
  {
    allStrapiAboutUs {
      nodes {
        AboutContent
        id
      }
    }
  }
`;

const about = ({ data }) => {
  const aboutRichText = data.allStrapiAboutUs.nodes[0];
  return (
    <Layout>
      <PageWrapper>
        <Seo title="Home" />
        <AboutTitle>About</AboutTitle>
        <PostContent>
          <ReactMarkdown
            remarkPlugins={[gfm]}
            rehypePlugins={[rehypeRaw]}
            children={aboutRichText.AboutContent}
          />
        </PostContent>
      </PageWrapper>
    </Layout>
  );
};

export default about;

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
  & p {
    font-size: x-large;
    @media (max-width) {
      font-size: unset;
    }
  }
`;

const AboutTitle = styled.h2`
  font-size: xxx-large;
  @media (max-width) {
    font-size: unset;
  }
`;
