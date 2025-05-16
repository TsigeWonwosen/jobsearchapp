import { useState } from "react";
import SearchForm from "../gitHubJobs/SearchForm";
import { AlignRight, X } from "lucide-react";

import styled from "styled-components";

function Nav() {
  const [open, setOpen] = useState(false);

  const hundleToggle = () => setOpen((prvState) => !prvState);

  const menuLinks = [
    { label: "Home", path: "/" },
    { label: "Jobs", path: "#" },
    { label: "Contact", path: "#" },
  ];
  return (
    <div className="h-[70px] w-full  relative border-b-[0.5px] border-gray-700 bg-[#000000] flex flex-col items-center flex-shrink-0 shadow-sm ">
      <Wrapper>
        <Logo>
          <h2 className="font-semibold text-[24px]">Jobs.</h2>
        </Logo>
        <div className="hidden md:flex w-full h-full justify-center items-center">
          <SearchForm />
        </div>
        <NavItems>
          {menuLinks.map((menu) => (
            <Items key={menu.label}>{menu.label}</Items>
          ))}
        </NavItems>
        <div className="flex md:hidden">
          {!open ? (
            <AlignRight
              onClick={hundleToggle}
              className="text-gray-300 font-[0.8rem]"
            />
          ) : (
            <X
              onClick={hundleToggle}
              className="text-gray-300 font-[0.8rem]"
            />
          )}
          {open && (
            <div className="z-10 absolute top-[74px] right-3 w-[160px] h-[170px] bg-[#252728] rounded-sm flex flex-col justify-center items-center gap-2">
              {menuLinks.map((menu) => (
                <li
                  key={menu.label}
                  className="hover:bg-[#4E5051]  w-[90%] h-auto text-center text-sm py-2 rounded-md font-semibold text-[#E5E7EB]  hover:text-gray-300 transition-all duration-200 shadow-xl border-b-[1px] border-gray-800"
                >
                  {menu.label}
                </li>
              ))}
            </div>
          )}
        </div>
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
      font-size: 0.99rem;
    }
  }
`;

export const NavItems = styled.ul`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Items = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
