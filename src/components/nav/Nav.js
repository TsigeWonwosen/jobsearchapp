import styled from "styled-components";
import SearchForm from "../gitHubJobs/SearchForm";

function Nav() {
  return (
    <div className="w-full  border-b border-gray-400">
      <Wrapper>
        <Logo>
          <h2 className="font-semibold text-[24px]">Jobs.</h2>
        </Logo>
        <SearchForm />
        <NavItems>
          <Items>Home</Items>
          <Items>Jobs</Items>
          <Items>Contact</Items>
        </NavItems>
      </Wrapper>
    </div>
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
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 70px;
  width: 100vw;
  max-width: 1280px;
  background-color: #252728;
  color: #ffffff;
  box-shadow: 0 4px 1rem 4px rgba(0, 0, 0, 0.2);
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
