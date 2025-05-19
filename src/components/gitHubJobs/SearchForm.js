import { useState } from "react";
import { Search, X } from "lucide-react";
import styled from "styled-components";
import { useAppContext } from "../../context/useAppContext";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const [jobtype, setJobType] = useState("");
  const { updateFilters, setCurrentPage } = useAppContext();

  const handleSubmite = (e) => {
    e.preventDefault();
    updateFilters({ search, jobType: jobtype });
    setCurrentPage(1);
  };

  return (
    <FomContainer onSubmit={handleSubmite}>
      <SearchAndSelectWrapper>
        <SearchLocation>
          <Input
            id="label"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />

          <section className="absolute h-auto top-1/2 left-3  -translate-y-1/2 text-gray-200 bg-transparent">
            <Search
              size={"16px"}
              className="bg-transparent"
            />
          </section>
          {search && (
            <section className="absolute h-auto top-1/2 right-3  -translate-y-1/2 text-gray-200 bg-transparent">
              <X
                size={"14px"}
                className="bg-transparent"
                onClick={() => {
                  setSearch("");
                }}
              />
            </section>
          )}
        </SearchLocation>

        <FormSelect
          value={jobtype}
          name="jobtype"
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="">All </option>
          <option value="full-time">Full Time</option>
          <option value="part-time"> Part Time</option>
          <option value="contract">Contract</option>
          <option value="remote">Remote</option>
          <option
            name="internship"
            value="internship"
          >
            Internship
          </option>
        </FormSelect>
      </SearchAndSelectWrapper>

      <Button type="submit"> Search</Button>
    </FomContainer>
  );
}

export const FomContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  max-width: 600px;
  height: auto;
  font-size: 14px;
  gap: 0.5rem;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: 100%;
    max-width: auto;
    justify-content: flex-end;
    margin-left: auto;
  }
`;

export const SearchAndSelectWrapper = styled.div`
  display: flex;
  flex: 1;
`;
export const FormSelect = styled.select`
  padding: 7px 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #404040;
  color: white;
  font-size: 14px;
  width: auto;
  background-color: transparent;
  outline: none;
  &:focus {
    outline: none;
    box-shadow: none;
    border: 1px solid #404040 !important;
  }
  & option {
    background: #1f2937;
    color: #ecf0f1;
    border: none !important;
    border-radius: 0 !important;
  }
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const SearchLocation = styled.div`
  position: relative;
  color: gray;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 90%;
  min-width: 200px;
  height: auto;
  background-color: #333334;
  border: 1px solid #404040;
  border-right: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 7px 1rem;
  padding-left: 3rem;
  color: #e7e9c5;
  width: 100%;
  font-size: 14px;
  outline: none;
  background: inherit;
  &:focus,
  &:active {
    background-color: transparent !important;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px inherit inset !important;
    box-shadow: 0 0 0px 1000px inherit inset !important;
    -webkit-text-fill-color: #c4c8cc !important;
    transition: background-color 9999s ease-in-out 0s; /* Prevent flash */
    background-color: transparent !important;
  }
  @media (max-width: 768px) {
    padding: 0.4rem 0.5;
    margin-bottom: 0rem;
  }
`;

export const Select = styled.select`
  display: block;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  color: #f2f2f2;
  padding: 7px 1.4em;
  /* width: 40%; */
  max-width: 100px;
  background-color: red;

  &::-ms-expand {
    display: none;
  }
  &:hover {
    border-color: #888;
  }
  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #fff;
    outline: none;
  }
  & option {
    font-weight: normal;
  }
`;

export const Button = styled.button`
  width: auto;
  padding: 7px 10px;
  font-size: 15px;
  letter-spacing: 1px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #404040;
  color: white;
  outline: none;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 13.4px;
  }
`;
