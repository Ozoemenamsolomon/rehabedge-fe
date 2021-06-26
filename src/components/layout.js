import * as React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./Footer";
// import "./layout.css";
import GlobalStyle from "./theme/globalStyle";

const Layout = ({ children, page }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <GlobalStyle />
      <Header page={page} />

      <main
        style={{
          marginTop: `7rem`,
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
