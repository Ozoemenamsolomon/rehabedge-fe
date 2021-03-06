import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import HamburgerMenu from "./HamburgerMenu";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Header = props => {
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
              <NavLink
                id={props.page === "Featured Articles" ? "active" : ""}
                to="/categories/featured-articles"
                alt="Featured Article"
              >
                FEATURED ARTICLE
              </NavLink>
            </li>
            <li>
              <NavLink
                id={props.page === "Spotlight" ? "active" : ""}
                to="/categories/spotlight"
                alt="Category:Featured Article"
              >
                SPOTLIGHT
              </NavLink>
            </li>
            <li data-hasdropdown="true">
              <NavLink
                id={props.page === "People" ? "active" : ""}
                to="/categories/people"
                alt="Category:People"
              >
                PEOPLE <span className="material-icons">arrow_drop_down</span>
              </NavLink>
              <Dropdown>
                <li>
                  <NavLink
                    id={props.page === "Clinician Insight" ? "active" : ""}
                    to="/categories/clinician-insight"
                    alt="Category:People"
                  >
                    CLINICIAN INSIGHT
                  </NavLink>
                </li>
              </Dropdown>
            </li>
            <li>
              <NavLink
                id={props.page === "Magazine" ? "active" : ""}
                to="/categories/magazine"
                alt="Category:Magazine"
              >
                MAGAZINE
              </NavLink>
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
    visibility: visible;
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
const NavOptionsWrapper = styled.nav`
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
  & [data-hasdropdown="true"]:hover > ul {
    visibility: visible;
  }
  & [data-hasdropdown="true"]:hover span.material-icons {
    transform: rotate(180deg);
  }
  @media (max-width: 900px) {
    height: 100vh;
    top: 0;
    right: -100%;
    display: flex;
    flex-direction: column;
    visibility: hidden;
    background-color: #2f4293;
    z-index: -1;
    position: fixed;
    justify-content: center;
    width: 70%;
    text-align: center;
    transition: all 0.5s ease-in;
  }
`;
const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  padding: 1em 0.5em;
  position: relative;
  &::after {
    content: "";
    width: 90%;
    height: 6%;
    background-color: #fff;
    position: absolute;
    bottom: 20%;
    transition: transform 0.1s ease-in-out;
    transform: scalex(0);
    transform-origin: center;
  }
  & > span.material-icons {
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 900px) {
    & > span.material-icons {
      display: none;
    }
    &#active::after {
      height: 65%;
      mix-blend-mode: overlay;
    }
  }

  &#active::after {
    transform: scale(1);
  }
  &:hover::after,
  &:active::after {
    transform: scale(1);
  }
  @media (min-width: 900px) {
    & {
      margin-left: 0.2em;
    }
  }
`;
const Dropdown = styled.ul`
  transform: translate(-15%, -24%);
  position: absolute;
  background-color: #2f4293;
  visibility: hidden;
  box-shadow: 0px 12px 12px -5.9px #00000075;
  @media (max-width: 900px) {
    & {
      transform: translate(0%, 0%);
      position: revert;
      box-shadow: none;
      visibility: visible;
    }
  }
`;

/*
  height: 100%;
  background: #2f4293;
  padding: 9em 1em 1em 1em;
  width: 80%;


*/
