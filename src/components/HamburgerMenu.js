import React from "react";
import styled from "styled-components";

const HamburgerMenu = ({ size, colour }) => {
  return (
    <Menu>
      <div class="line"></div>
    </Menu>
  );
};

export default HamburgerMenu;
const Menu = styled.button`
  $menu-size: 500px;
  $displacement: -180%;
  $animation-duration: 0.5s;
  $bg-color: radial-gradient(
    circle,
    rgba(0, 119, 161, 1) 0%,
    rgba(0, 36, 84, 1) 100%
  );
  $fg-color: #fff;
  background: var($bg-color);
  width: var($menu-size);
  height: var($menu-size);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 35%;
  overflow: hidden;
`;
