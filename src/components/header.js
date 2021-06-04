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
          <HamburgerMenu></HamburgerMenu>
          <NavOptions>
            <li>
              <Link to="/category">FEATURED ARTICLE</Link>
            </li>
            <li>
              <Link to="/category">SPOTLIGHT</Link>
            </li>
            <li>
              <Link to="/category">PEOPLE</Link>
            </li>
            <li>
              <Link to="/category">MAGAZINE</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
          </NavOptions>
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
  & #menu:checked ~ ul {
    right: 0;
  }
`;
// style={{ }}   box-shadow: 0 2px 8px rgba(152,168,188,.2);

// & [type="checkbox"] {
//   right: 0;
// }
const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 90%;
  padding: 1rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  @media (max-width: 600px) {
    max-width: 9em;
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
  & li {
    list-style: none;
  }
  & a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 0.2em 0.2em;
    margin-left: 0.6em;
  }
  & a:hover,
  & a:active {
    background-color: white;
    color: #2f4293;
  }
  @media (max-width: 900px) {
    height: 100vh;
    top: 0;
    right: -100%;
    display: flex;
    flex-direction: column;
    background-color: #2f4293;
    z-index: -1;
    position: fixed;
    justify-content: center;
    width: 80%;
    transition: all 0.5s ease-in;
  }
`;

/*
  height: 100%;
  background: #2f4293;
  padding: 9em 1em 1em 1em;
  width: 80%;


*/
