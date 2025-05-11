import styled from "styled-components";
import SearchForm from "../gitHubJobs/SearchForm";

function Nav() {
  return (
    <div className="h-[70px] w-full  border-b-[0.5px] border-gray-700 bg-[#000000] flex flex-col items-center flex-shrink-0 shadow-sm ">
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
  max-width: 1280px;
  width: 100%;
  height: 100%;
  color: #ffffff;
  background-color: transparent;
`;

export const Logo = styled.section`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background: transparent;

  @media (max-width: 600px) {
    max-width: 20%;
    & h2 {
      font-size: 0.9rem;
    }
  }
`;

export const NavItems = styled.ul`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Items = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
