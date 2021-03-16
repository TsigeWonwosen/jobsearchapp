import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import SingleJob from './SingleJob';
import SearchForm from './SearchForm';

import JobsPagination from './JobsPagination';
import styled from 'styled-components';
import './jobs.css';

function Jobs() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <Wrapper>
      {loading && <h1>Loading ...</h1>}
      {error && <h1>Error ...Try Refreshing</h1>}

      <Title>GitHub Jobs ..</Title>
      <SearchForm params={params} onParamChange={handleParamChange} />
      {/* <JobsPagination page={page} setPage={setPage} /> */}
      {jobs?.map((job) => (
        <SingleJob job={job} key={job.id} />
      ))}
      <JobsPagination page={page} setPage={setPage} />
    </Wrapper>
  );
}

export default Jobs;

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  margin: 0rem auto;
  padding: 5rem auto 4rem;
  background-color: #2d2d2d;

  text-align: 'left';
`;
export const Title = styled.h1`
  font-size: 1.7rem;
  letter-spacing: 2px;
  font-family: sans-serif;
  color: #f2f2f3;
  margin: 4rem auto 2rem;
`;
