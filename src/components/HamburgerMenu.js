import React from "react";
import styled from "styled-components";

const HamburgerMenu = ({ size, colour }) => {
  return (
    <Menu>
      <Line></Line>
      <ButtonName>Menu button</ButtonName>
    </Menu>
  );
};

export default HamburgerMenu;
const Menu = styled.button`
  --menu-size: 3em;
  --displacement: -180%;
  --animation-duration: 0.5s;
  --bg-color: #2f4293;
  --fg-color: #fff;
  background: var(--bg-color);
  width: var(--menu-size);
  height: var(--menu-size);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 35%;
  overflow: hidden;
  position: relative;
`;

const Line = styled.div`
  background-color: var(--fg-color);
  width: 75%;
  height: 10%;
  border-radius: calc(var(--menu-size) / 20);
  position: relative;
  display: flex;
  transition: all var(--animation-duration) ease-in;
  &::before {
    position: absolute;
    top: var(--displacement);
    content: "";
    background-color: var(--fg-color);
    width: 100%;
    height: 100%;
    border-radius: calc(var(--menu-size) / 20);
    transition: all var(--animation-duration) ease-in;
  }
  &::after {
    position: absolute;
    bottom: var(--displacement);
    content: "";
    background-color: var(--fg-color);
    width: 100%;
    height: 100%;
    border-radius: calc(var(--menu-size) / 20);
    transition: all var(--animation-duration) ease-in;
  }

  ${Menu}:focus & {
    background-color: transparent;
    transform: translatey(500%);
  }
  ${Menu}:focus &::before {
    transform: translatey(-500%) rotate(315deg);
    top: 0%;
  }
  ${Menu}:focus &::after {
    bottom: 0%;
    transform: translatey(-500%) rotate(-315deg);
  }
`;
const ButtonName = styled.span`
  position: absolute;
  z-index: -2;
`;
/*display: none;
 color: aliceblue;
  content-visibility: hidden; */
