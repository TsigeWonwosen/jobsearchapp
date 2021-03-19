import React from 'react';
import styled from 'styled-components';

export default function JobsPagination({ rest }) {
  const {
    totalPaginationSize,
    next,
    prev,
    setLastIndexOfSelectedJobs,
    lastIndexOfSelectedJobs,
  } = rest;
  React.useEffect(() => {}, [totalPaginationSize]);
  const paginationIndexes = Array.from(
    { length: totalPaginationSize },
    (v, k) => k + 1,
  );

  return (
    <Wrapper>
      <Pagination>
        <Button onClick={prev} disabled={lastIndexOfSelectedJobs <= 1}>
          Prev
        </Button>
        {paginationIndexes?.map((index) => (
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
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid black;
  margin: 2rem auto;
  border-radius: 12px;
`;

export const Pagination = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
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
