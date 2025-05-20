import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchForm from "../gitHubJobs/SearchForm";
import { AlignRight, X } from "lucide-react";

import styled from "styled-components";

function Nav() {
  const [open, setOpen] = useState(false);

  const hundleToggle = () => setOpen((prvState) => !prvState);

  const location = useLocation();

  const menuLinks = [
    { label: "Home", path: "/" },
    { label: "Jobs", path: "/jobs" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <div className="h-[60px] w-full  relative border-b-[0.5px] border-gray-700 bg-[#000000] flex flex-col items-center flex-shrink-0 shadow-sm ">
      <Wrapper>
        <Logo>
          <Link to="/">
            <h2 className="font-semibold text-[24px]">Jobs.</h2>
          </Link>
        </Logo>
        <div className="hidden md:flex w-full h-full justify-center items-center">
          <SearchForm />
        </div>
        <NavItems>
          {menuLinks.map((menu) => (
            <Link
              to={menu.path}
              key={menu.label}
            >
              <Items $isActive={location.pathname === menu.path}>
                {menu.label}
              </Items>
            </Link>
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
            <div className="z-100 absolute top-[70px] right-4 w-[160px] h-auto bg-[#252728] rounded-sm flex flex-col justify-center items-center gap-2 py-5 ">
              {menuLinks.map((menu) => (
                <Link
                  to={menu.path}
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  <li
                    key={menu.label}
                    to={menu.path}
                    className={`hover:border-blue-600  w-[50%] h-auto text-center text-sm py-2 font-semibold text-[#E5E7EB]  hover:text-blue-500 transition-all duration-200 shadow-xl border-b-[1px] border-gray-700 mx-auto ${
                      location.pathname === menu.path
                        ? "border-blue-600 text-blue-500"
                        : ""
                    }`}
                  >
                    {menu.label}
                  </li>
                </Link>
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
  z-index: 50;
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
      font-size: 1.2rem;
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
  border-bottom: ${({ $isActive }) =>
    $isActive ? "2px solid #1D4ED8" : "none"};
  padding-bottom: 3px;
  color: ${({ $isActive }) => ($isActive ? "#1d4ed8" : "")};
  cursor: pointer;
`;
