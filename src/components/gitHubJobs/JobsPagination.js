import React from "react";
import { useAppContext } from "../../context/useAppContext";

import styled from "styled-components";

export default function JobsPagination() {
  const {
    totalPaginationSize,
    next,
    prev,
    setLastIndexOfSelectedJobs,
    lastIndexOfSelectedJobs,
  } = useAppContext();

  React.useEffect(() => {}, [totalPaginationSize, lastIndexOfSelectedJobs]);

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
          className={
            lastIndexOfSelectedJobs === index
              ? "active w-auto h-auto"
              : " w-auto h-auto"
          }
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

export const Pagination = styled.section`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid rgba(55, 51, 51, 0.775);
  padding: 0.5rem 0;
  gap: 1rem;
  background: #1b1f23;

  & span {
    height: 26px;
    width: 26px;
    padding: 5px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    font-size: 13px;
    color: #3ea3fb;
    border: 1px solid ${({ disabled }) => (disabled ? "#999999" : "#3ea3fb")};
    background-color: ${({ disabled }) =>
      disabled ? "#cccccc" : "transparent"};
    border-radius: 100%;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

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
  height: auto;
  padding: 1px 10px;
  color: #3ea3fb;
  border: 1px solid ${({ disabled }) => (disabled ? "#999999" : "#3ea3fb")};
  background-color: ${({ disabled }) => (disabled ? "#cccccc" : "transparent")};
  border-radius: 100px;
  text-align: left;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: white;
    background-color: ${({ disabled }) => (disabled ? "#999999" : "#3ea3fb")};
    outline: none;
    border: 1px solid #3ea3fb;
  }
`;
