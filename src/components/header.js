import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import HamburgerMenu from "./HamburgerMenu";

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
        maxWidth: `96%`,
        padding: `1rem 0rem`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
          RehabEdge
        </Link>
      </h1>
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
