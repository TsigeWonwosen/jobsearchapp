import React from 'react';
import styled from 'styled-components';

export default function SearchForm({ setLocation, setType }) {
  const [location, setSelectedLocation] = React.useState('');
  const [type, setSelectedType] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(location);
    setType(type);
    setSelectedLocation('');
    setSelectedType('');
  };

  return (
    <FomContainer onSubmit={handleSubmit}>
      <FormGroup>
        <LabelStyle>
          <Label>Location</Label>
        </LabelStyle>
        <Input
          id="label"
          value={location}
          onChange={(e) => setSelectedLocation(e.target.value)}
          placeholder="Search all Location"
        />
      </FormGroup>
      <FormGroup>
        <LabelStyle>
          <Label>Jobs Type</Label>
        </LabelStyle>
        <Select value={type} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="">Select Type </option>
          <option value="contract">Contract</option>
          <option value="full time">Full Time</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button type="submit"> Search</Button>
      </ButtonContainer>
    </FomContainer>
  );
}

export const FomContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 1rem auto;
  padding: 2rem;
  border: 0.2px solid #c4c8cc;
  border-radius: 12px;
`;

export const FormGroup = styled.div`
  color: #c4c8cc;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  width: 90%;
`;

const ButtonContainer = styled(FormGroup)`
  margin-top: 2rem;
  align-items: center;
  max-width: 150px;
`;
export const LabelStyle = styled.section`
  margin-bottom: 1rem;
  color: #c4c8cc;
  display: flex;
  align-items: left;
  justify-content: left;
`;

export const Input = styled.input`
  padding: 0.6rem;
  color: #c4c8cc;
  background: #2d2d2d;
  border: 1px solid #c4c8cc;
  border-radius: 3px;
  width: 90%;
  margin-bottom: 0.5em;
  font-size: 1rem;
  outline: none;
`;

export const Label = styled.span`
  font-size: 1rem;
  letter-spacing: 1px;
  width: auto;
`;

export const Select = styled.select`
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #404345;
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
  padding: 0.6rem 1.4em 0.5em 0.8em;
  margin-left: 1rem;
  text-align: center;
  border-radius: 100px;
  background-color: rgba(59, 153, 252, 0.7);
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;
