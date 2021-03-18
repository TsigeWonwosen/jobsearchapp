import React from 'react';
import SingleJob from './SingleJob';
import SearchForm from './SearchForm';

import JobsPagination from './JobsPagination';
import useFilter from './useFilter';

import styled from 'styled-components';
import './jobs.css';

function Jobs({ jobs, loading, error }) {
  const [selectedJobs, numberOfJobs, setLocation, ...restProps] = useFilter(
    jobs,
  );
  return (
    <Wrapper>
      <Title>GitHub Jobs ...[{numberOfJobs}]</Title>
      <SearchForm setLocation={setLocation} />
      <JobsPagination rest={restProps} />
      {selectedJobs &&
        selectedJobs?.map((job) => <SingleJob job={job} key={job.id} />)}
      {loading && <h1>Loading ...</h1>}
      {error && <h1>Error ...Try Refreshing</h1>}
    </Wrapper>
  );
}

export default Jobs;

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  margin: 0rem auto;
  padding: 5rem auto 4rem;
  background-color: #2d2d2d;
  text-align: 'left';
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f2f2f3;
`;
export const Title = styled.h1`
  font-size: 1.7rem;
  letter-spacing: 2px;
  font-family: sans-serif;
  color: #f2f2f3;
  margin: 4rem auto 2rem;
`;

export const Button = styled.button`
  padding: 5px 13px;
  margin-right: 1rem;
  color: #3ea3fb;
  border: 1px solid ${({ disabled }) => (disabled ? '#999999' : '#3ea3fb')};
  background-color: ${({ disabled }) => (disabled ? '#cccccc' : 'transparent')};
  border-radius: 100px;
  text-align: left;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: white;
    background-color: ${({ disabled }) => (disabled ? '#999999' : '#3ea3fb')};
    outline: none;
    border: 1px solid #3ea3fb;
  }
`;
