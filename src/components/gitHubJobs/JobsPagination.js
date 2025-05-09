import React from "react";
import styled from "styled-components";

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
    (v, k) => k + 1
  );

  return (
    <Pagination>
      <Button
        onClick={prev}
        disabled={lastIndexOfSelectedJobs <= 1}
      >
        Prev
      </Button>
      {paginationIndexes?.map((index) => (
        <span
          key={index}
          onClick={() => {
            setLastIndexOfSelectedJobs(index);
          }}
          className={lastIndexOfSelectedJobs === index ? "active" : ""}
        >
          {" "}
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
  );
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 0.2px solid rgba(255, 255, 255, 0.2);
  gap: 2rem;
  border-radius: 12px;
  @media (max-width: 900px) {
    width: 55%;
    padding: 1rem 0.5rem;
  }
`;

export const Pagination = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 0.2px solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.2px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem 0;
  margin-top: 1rem;
  gap: 1rem;

  @media (max-width: 900px) {
    margin: 1rem 0;
    padding: 1rem 0.4rem;
    padding-left: 0.3rem;
  }
  & span {
    height: 26px;
    width: 26px;
    padding: 5px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:13px
    color: #3ea3fb;
    border: 1px solid ${({ disabled }) => (disabled ? "#999999" : "#3ea3fb")};
    background-color: ${({ disabled }) =>
      disabled ? "#cccccc" : "transparent"};
    border-radius: 100%;
    text-align: left;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    @media (max-width: 900px) {
      padding: 3px 8px;
      margin-right: 0.2rem;
      margin-left: 0.2rem;
    }

    &:hover,
    &:focus {
      color: white;
      background-color: ${({ disabled }) => (disabled ? "#999999" : "#3ea3fb")};
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
  padding: 1px 10px;
  color: #3ea3fb;
  border: 1px solid ${({ disabled }) => (disabled ? "#999999" : "#3ea3fb")};
  background-color: ${({ disabled }) => (disabled ? "#cccccc" : "transparent")};
  border-radius: 100px;
  text-align: left;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  @media (max-width: 900px) {
    padding: 5px 10px;
    margin-right: 0.3rem;
    margin-left: 0.3rem;
  }
  &:hover,
  &:focus {
    color: white;
    background-color: ${({ disabled }) => (disabled ? "#999999" : "#3ea3fb")};
    outline: none;
    border: 1px solid #3ea3fb;
  }
`;
