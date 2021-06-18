import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <MyFooter>
      <FooterWrapper>
        {/* <div>
        </div> */}
        <p>© {new Date().getFullYear()}, RehabEdge. All Rights Reserved.</p>
        <ul
          style={{
            display: `flex`,
            gap: `2em`,
            listStyle: `none`,
            color: `#fff`,
            // marginTop: `1em`,
          }}
        >
          <li>
            <FooterLinkWithin to="/about" alt="About">
              ABOUT US
            </FooterLinkWithin>
          </li>
          <li
            style={{
              display: `flex`,
            }}
          >
            <p>SOCIALS:</p>
            <ul
              style={{
                display: `flex`,
                gap: `1em`,
                marginLeft: `1em`,
                listStyle: `none`,
                color: `#fff`,
              }}
            >
              <li>
                <FooterLink
                  aria-label="Facebook link"
                  target="blank"
                  rel=" noopener"
                  href="https://www.facebook.com/rehabedgemagazine/"
                >
                  <span class="material-icons">facebook</span>
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  aria-label="E-mail link"
                  href="mailto:info@rehabedge.ng"
                >
                  <span class="material-icons">email</span>
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  aria-label="Whatsapp link"
                  target="blank"
                  rel=" noopener"
                  href="https://wa.link/psw6a3"
                >
                  <span class="material-icons">chat</span>
                </FooterLink>
              </li>
            </ul>
          </li>
        </ul>
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
  );
};

export default Footer;

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
  align-items: flex-start;
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

/*
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

  &:hover::after,
  &:active::after {
    transform: scale(1);
  }
  @media (min-width: 900px) {
    & {
      margin-left: 0.2em;
    }
  }*/
const FooterLinkWithin = styled(Link)`
  color: #fff;
`;
const FooterLink = styled.a`
  color: #fff;
`;
