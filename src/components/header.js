import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import HamburgerMenu from "./HamburgerMenu";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle }) => {
  // determined if page has scrolled and if the view is on mobile
  const [scrolled, setScrolled] = useState(false);

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <header
      data-active={scrolled}
      style={{
        background: `#2f4293`,
        marginBottom: `1.45rem`,
        position: `fixed`,
        minWidth: `100%`,
        top: 0,
        zIndex: 2,
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
            alt="RehabEdge Logo | Home"
          />
        </Link>
        <HamburgerMenu></HamburgerMenu>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
