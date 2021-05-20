import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import HamburgerMenu from "./HamburgerMenu";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2f4293`,
      marginBottom: `1.45rem`,
      position: `fixed`,
      minWidth: `100%`,
      top: 0,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `90%`,
        padding: `1rem 0rem`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <StaticImage
          src="../images/rehabedge-icon.png"
          width={211.65354331}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
        />
      </Link>
      <HamburgerMenu></HamburgerMenu>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
