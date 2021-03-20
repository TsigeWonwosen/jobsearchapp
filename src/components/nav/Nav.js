import React from 'react';
import styled from 'styled-components';

function Nav() {
  return (
    <Wrapper>
      <Logo>
        <h2>Jobs.</h2>
      </Logo>
      <Title>GitHub Jobs ...</Title>
      <NavItems>
        <Items>Home</Items>
        <Items>Jobs</Items>
        <Items>Contact</Items>
      </NavItems>
    </Wrapper>
  );
}

export default Nav;

export const Wrapper = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 60px;
  width: 100vw;
  background-color: #2d2d2d;
  color: #ffffff;
  box-shadow: 0 4px 1rem 4px rgba(0, 0, 0, 0.2);
  border-top: 3px solid #f48029;
`;

export const Title = styled.h1`
  font-size: 1rem;
  letter-spacing: 2px;
  font-family: sans-serif;
  color: #f2f2f3;
`;

export const Logo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    max-width: 20%;
    & h2 {
      font-size: 0.9rem;
    }
  }
`;

export const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Items = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  margin-left: 1rem;
  cursor: pointer;
`;
