import React from "react";
import { MapPin } from "lucide-react";
import styled from "styled-components";
import { useAppContext } from "../../context/useAppContext";

export default function SearchForm() {
  const [location, setSelectedLocation] = React.useState("");
  const [type, setSelectedType] = React.useState("");

  const { setLocation, setType } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(location);
    setType(type);
    // setSelectedLocation("");
    // setSelectedType("");
  };

  return (
    <FomContainer onSubmit={handleSubmit}>
      <SearchAndSelectWrapper>
        <SearchLocation>
          <Input
            id="label"
            value={location}
            onChange={(e) => setSelectedLocation(e.target.value)}
            placeholder="Search Location"
          />
          <section className="absolute h-auto top-1/2 left-3  -translate-y-1/2 text-gray-200 bg-transparent">
            <MapPin
              size={"18px"}
              className="bg-transparent"
            />
          </section>
        </SearchLocation>

        <FormSelect
          value={type}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All </option>
          <option value="contract">Contract</option>
          <option value="full time">Full Time</option>
          <option value="remote">Remote</option>
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
  height: auto;
  font-size: 14px;
  gap: 0.5rem;
  margin: 1rem auto;
  @media (max-width: 900px) {
    width: 100%;
    overflow: hidden;
  }
`;

export const SearchAndSelectWrapper = styled.div`
  display: flex;
`;
export const FormSelect = styled.select`
  padding: 8px 16px;
  border: 1px solid gray;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  color: white;
  font-size: 14px;
  letter-spacing: 1px;
  width: 100%;
  max-width: 250px;
  background-color: #383838;
  background-color: #333334;

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
  width: 100%;
  min-width: 300px;
  max-width: 350px;
  height: auto;
  background-color: #333334;
  border: 1px solid gray;
  border-right: none;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 8px 1rem;
  padding-left: 3rem;
  color: #c4c8cc;
  width: 100%;
  font-size: 14px;
  outline: none;
  background: transparent;
  @media (max-width: 900px) {
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
  padding: 6px 1.4em;
  width: 100%;
  max-width: 100px;
  /* border: 1px solid gray; */
  /* box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #333334;
  background-size: 0.65em auto, 100%; */

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
  padding: 5px 1rem;
  font-size: 15px;
  letter-spacing: 1px;
  text-align: center;
  border-radius: 50px;
  border: 2px solid gray;
  color: white;
  outline: none;
  cursor: pointer;
`;
