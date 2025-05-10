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
    setSelectedLocation("");
    setSelectedType("");
  };

  return (
    <FomContainer onSubmit={handleSubmit}>
      <SearchLocation>
        <Input
          id="label"
          value={location}
          onChange={(e) => setSelectedLocation(e.target.value)}
          placeholder="Search Location"
        />
        <section className="absolute top-1/2 left-3  -translate-y-1/2">
          <MapPin />
        </section>
      </SearchLocation>

      <FormSelect
        value={type}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">Jobs Type </option>
        <option value="contract">Contract</option>
        <option value="full time">Full Time</option>
        <option value="remote">Remote</option>
      </FormSelect>
      <Button type="submit"> Search</Button>
    </FomContainer>
  );
}

export const FomContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  gap: 1rem;
  margin: 1rem auto;
  @media (max-width: 900px) {
    width: 100%;
    overflow: hidden;
  }
`;

export const FormSelect = styled.select`
  padding: 8px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background-color: white;
  font-size: 16px;
  color: white;
  width: 100%;
  max-width: 250px;
  background-color: #383838;

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
  color: #c4c8cc;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 90%;
  max-width: 300px;
  height: auto;
  border: 1px solid #c4c8cc;
  border-radius: 4px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 0.6rem;
  padding-left: 3rem;
  color: #c4c8cc;
  background: #2d2d2d;
  width: 90%;
  font-size: 1rem;
  outline: none;
  @media (max-width: 900px) {
    padding: 0.4rem 0.5;
    margin-bottom: 0rem;
  }
`;

export const Select = styled.select`
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  color: #f2f2f2;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #2d2d2d;
  background-size: 0.65em auto, 100%;

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
  padding: 0;
  margin: 0;
  width: 100px;
  padding: 0.4rem 0.5rem;
  font-size: 1rem;
  letter-spacing: 1px;
  text-align: center;
  border-radius: 5px;
  border: 2px solid rgba(59, 153, 252, 0.7);
  color: white;
  outline: none;
  cursor: pointer;
`;
