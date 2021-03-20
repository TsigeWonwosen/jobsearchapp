import React from 'react';
import styled from 'styled-components';

export default function SideBar() {
  return (
    <Wrapper>
      <NavItems>
        <Items>Home</Items>
        <Items>Jobs</Items>
        <Items>Contact</Items>
      </NavItems>
    </Wrapper>
  );
}

export const Wrapper = styled.nav`
  position: fixed;
  top: 50;
  left: 0;
  bottom: 0;
  right: left;
  width: 200px;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-left;
  padding: 0 2rem 4rem;
  box-sizing: border-box;
  background-color: #2d2d2d;
  color: #ffffff;
  box-shadow: 2px 0 10px 1px rgba(0, 0, 0, 0.2);
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-left;
`;

export const Items = styled.li`
  display: flex;
  align-items: left;
  padding: 4px 10px;
  margin-bottom: 1rem;

  text-align: left;
  cursor: pointer;
`;
