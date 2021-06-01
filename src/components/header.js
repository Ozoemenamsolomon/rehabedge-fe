import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import HamburgerMenu from "./HamburgerMenu";
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
        <Logo>
          <Link to="/">
            <StaticImage
              src="../images/rehabedge-icon.png"
              width={211.65354331}
              loading="eager"
              quality={95}
              placeholder="tracedSVG"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="RehabEdge Logo | Home"
            />
          </Link>
        </Logo>
        <NavOptionsWrapper>
          <NavOptions>
            <Link to="/category">
              <li>FEATURED ARTICLE</li>
            </Link>
            <Link to="/category">
              <li>SPOTLIGHT</li>
            </Link>
            <Link to="/category">
              <li>PEOPLE</li>
            </Link>
            <Link to="/category">
              <li>MAGAZINE</li>
            </Link>
            <Link to="/about">
              <li>ABOUT US</li>
            </Link>
          </NavOptions>
          <HamburgerMenu></HamburgerMenu>
        </NavOptionsWrapper>
      </HeaderWrapper>
    </MyHeader>
  );
};
/*

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

const Logo = styled.div`
  width: 16em;
  @media (max-width: 600px) {
    width: 9em;
  }
`;
const NavOptionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

/*
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.658);
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: ;
  justify-content: flex-end;


*/
const NavOptions = styled.ul`
  display: flex;
  gap: 1em;
  @media (max-width: 900px) {
    display: none;
  }
`;

/*
  height: 100%;
  background: #2f4293;
  padding: 9em 1em 1em 1em;
  width: 80%;


*/
