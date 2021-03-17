import React from 'react';
import styled from 'styled-components';

export default function SearchForm({ params, onParamChange }) {
  return (
    <FomContainer>
      <FormGroup>
        <LabelStyle>
          <Label>Location</Label>
        </LabelStyle>
        <Input id="label" placeholder="Search all jobs" />
      </FormGroup>
      <FormGroup>
        <LabelStyle>
          <Label>Position</Label>
        </LabelStyle>
        <Input placeholder="Search location" />
      </FormGroup>
    </FomContainer>
  );
}

export const FomContainer = styled.section`
  display: flex;
  justify-content: space-between;
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
