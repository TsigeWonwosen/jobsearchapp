import React, { useState, useEffect } from 'react';
import useFetchJobs from './useFetchJobs';
import SingleJob from './SingleJob';
import SearchForm from './SearchForm';

import JobsPagination from './JobsPagination';
import styled from 'styled-components';
import './jobs.css';

const PAGINATION_SIZE = 5;
function Jobs() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [lastIndexOfSelectedJobs, setLastIndexOfSelectedJobs] = useState(1);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }
  const numberOfJobs = jobs.length;
  const totalPaginationSize = numberOfJobs / PAGINATION_SIZE;
  const paginationIndexes = Array.from(
    { length: totalPaginationSize },
    (v, k) => k + 1,
  );

  console.log(lastIndexOfSelectedJobs);
  useEffect(() => {
    async function selectNewJobs() {
      let finalIndex = lastIndexOfSelectedJobs * PAGINATION_SIZE;
      let initial = finalIndex - PAGINATION_SIZE;
      let TenSelectedJobs = await jobs.slice(initial, finalIndex);
      await setSelectedJobs(TenSelectedJobs);
    }
    selectNewJobs();
  }, [lastIndexOfSelectedJobs, jobs]);

  const next = async () => {
    await setLastIndexOfSelectedJobs(lastIndexOfSelectedJobs + 1);
  };

  const prev = async () => {
    await setLastIndexOfSelectedJobs(lastIndexOfSelectedJobs - 1);
  };

  return (
    <Wrapper>
      <Title>
        GitHub Jobs ...[{numberOfJobs} - {lastIndexOfSelectedJobs}]
      </Title>
      <SearchForm params={params} onParamChange={handleParamChange} />

      <Pagination>
        <Button onClick={prev} disabled={lastIndexOfSelectedJobs <= 1}>
          Prev
        </Button>
        {paginationIndexes.map((index) => (
          <span
            key={index}
            onClick={() => {
              setLastIndexOfSelectedJobs(index);
            }}
            className={lastIndexOfSelectedJobs === index ? 'active' : ''}
          >
            {' '}
            {index}
          </span>
        ))}
        <Button
          onClick={next}
          disabled={lastIndexOfSelectedJobs >= totalPaginationSize}
        >
          Next
        </Button>
      </Pagination>
      {loading && <h1>Loading ...</h1>}
      {error && <h1>Error ...Try Refreshing</h1>}
      {selectedJobs?.map((job) => (
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

export const Pagination = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 50%; */
  border: 1px solid rgba(2, 2, 2, 2);
  margin: 1rem 0;
  padding: 1rem 1rem;
  border-radius: 12px;

  & span {
    padding: 3px 13px;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3ea3fb;
    border: 1px solid ${({ disabled }) => (disabled ? '#999999' : '#3ea3fb')};
    background-color: ${({ disabled }) =>
      disabled ? '#cccccc' : 'transparent'};
    border-radius: 10px;
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
    &.active {
      color: white;
      background: #3ea3fb;
      border: 1px solid #3ea3fb;
    }
  }
`;
