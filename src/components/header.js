import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
// import HamburgerMenu from "./HamburgerMenu";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

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
    <MyHeader data-active={scrolled}>
      <HeaderWrapper>
        <Link
          to="/"
          style={
            {
              // color: `white`,
              // textDecoration: `none`,
            }
          }
        >
          <StaticImage
            src="../images/rehabedge-icon.png"
            width={211.65354331}
            quality={95}
            placeholder="tracedSVG"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="RehabEdge Logo | Home"
          />
        </Link>
      </HeaderWrapper>
    </MyHeader>
  );
};
/*
        <HamburgerMenu ></HamburgerMenu>

*/
Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

const MyHeader = styled.header`
  background: #2f4293;
  margin-bottom: 1.45rem;
  position: fixed;
  min-width: 100%;
  top: 0;
  z-index: 2;

  &[data-active="true"] {
    -webkit-box-shadow: 0px 5px 7px 0px rgb(0 0 0 / 40%);
    box-shadow: 0px 5px 7px 0px rgb(0 0 0 / 40%);
  }
`;
// style={{ }}   box-shadow: 0 2px 8px rgba(152,168,188,.2);

const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 90%;
  padding: 1rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
