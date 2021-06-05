/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
// import "./layout.css";
import styled from "styled-components";
import GlobalStyle from "./theme/globalStyle";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main
        style={{
          marginTop: `7rem`,
        }}
      >
        {children}
      </main>
      <MyFooter>
        <FooterWrapper>
          <p>© {new Date().getFullYear()}, RehabEdge. All Rights Reserved.</p>
          <p>
            Design and Developed by
            {` `}
            <FooterLink
              target="blank"
              rel=" noopener"
              href="https://www.solozo.page"
            >
              Solozo
            </FooterLink>
          </p>
        </FooterWrapper>
      </MyFooter>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const MyFooter = styled.footer`
  margin-top: 2.5rem;
  background: #2f4293;
  color: #fff;
`;
const FooterWrapper = styled.div`
  margin: 0 auto;
  max-width: 90%;
  padding: 1rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    & {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media (max-width: 600px) {
    & {
      font-size: smaller;
    }
  }
`;
const FooterLink = styled.a`
  color: #fff;
`;
