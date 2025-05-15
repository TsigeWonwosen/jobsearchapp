import SingleJob from "./SingleJob";
import FeaturedJob from "./FeaturedJob";
import JobsPagination from "./JobsPagination";
import { useAppContext } from "../../context/useAppContext";

import styled from "styled-components";
import { useState } from "react";

function Jobs() {
  const [show, setShow] = useState(true);

  const {
    paginatedJobs,
    handleFeaturedJob,
    featuredJob,
    numberOfJobs,
    loading,
    error,
  } = useAppContext();

  if (loading | error) {
    return (
      <div className="w-full h-full flex justify-center items-center font-semibold text-gray-300">
        {loading && <h1>Loading ...</h1>}
        {error && <h1>Error ...Try Refreshing</h1>}
      </div>
    );
  }
  if (paginatedJobs.length === 0) {
    return (
      <h3 className="text-white font-semibold text-center">
        No matching jobs found.
      </h3>
    );
  }
  return (
    <div className="px-[1rem] flex-1 w-full">
      <Container>
        <LeftSideContainer $isShow={show}>
          <div className="w-full h-auto flex justify-sart align-center px-1 py-1 pb-3 flex-col gap-2 border-b-[0.5px] border-gray-800 ">
            <h2 className="text-base font-semibold">Top job picks for you</h2>
            <p className="text-sm text-gray-300">
              Based on your profile, preferences, and activity like applies,
              searches, and saves {numberOfJobs} results
            </p>
          </div>
          <JobsList>
            {paginatedJobs ? (
              paginatedJobs?.map((job) => (
                <SingleJob
                  job={job}
                  key={job.id}
                  setShow={setShow}
                  isselected={
                    featuredJob?.id === job.id ? "selected" : undefined
                  }
                  handleFeaturedJob={handleFeaturedJob}
                />
              ))
            ) : (
              <p>No jobs match your filters</p>
            )}
          </JobsList>
          <JobsPagination />
        </LeftSideContainer>

        <JobsDiscription $isShow={show}>
          {!featuredJob && <div>Loading jobs...</div>}
          {featuredJob && Object.keys(featuredJob).length > 0 ? (
            <FeaturedJob
              featuredJob={featuredJob}
              setShow={setShow}
            />
          ) : (
            <p>No jobs match your filters</p>
          )}
        </JobsDiscription>
      </Container>
    </div>
  );
}

export default Jobs;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0rem auto;
  color: #f2f2f3;
  box-sizing: border-box;
  border-top: 0.5px solid rgba(55, 51, 51, 0.775);
`;
export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 900px) {
    width: 100%;
    padding-top: 1rem;
    display: ${({ $isShow }) => ($isShow ? "flex" : "none")};
  }
`;

export const JobsList = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  overflow-y: auto;
  gap: 0.5rem;

  &::-webkit-scrollbar {
    width: 8px;
    /* border-radius: 1px; */
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: #0e0f1e;
    border-radius: 2px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #7c7c7d;
    border-radius: 8px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export const JobsDiscription = styled.section`
  background-color: #0e0f1e;
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  @media screen and (max-width: 900px) {
    width: 100%;
    display: ${({ $isShow }) => ($isShow ? "none" : "flex")};
  }
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 8px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: #0e0f1e;
    border-radius: 8px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #1b1f23;
    border-radius: 8px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Button = styled.button`
  padding: 5px 13px;
  margin-right: 1rem;
  color: #3ea3fb;
  border: 1px solid ${({ disabled }) => (disabled ? "#999999" : "#3ea3fb")};
  background-color: ${({ disabled }) => (disabled ? "#cccccc" : "transparent")};
  border-radius: 100px;
  text-align: left;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: white;
    background-color: ${({ disabled }) => (disabled ? "#999999" : "#3ea3fb")};
    outline: none;
    border: 1px solid #3ea3fb;
  }
`;

export const Article = styled.article`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  padding: 3rem 0.5 1rem;
  & div {
    max-width: 100%;
  }
  & li {
    margin: 1rem 0;
    font-size: 0.8rem;
    line-height: 1.6rem;
    font-weight: 700;
    color: #cacccb;
    list-style: inside;

    & p {
      font-size: 0.84rem;
      line-height: 1.4rem;
      font-weight: 700;
      color: #cacccb;
      margin: 0.7rem 0;
    }
  }

  & ::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
  }
  & p {
    font-size: 0.84rem;
    line-height: 1.6rem;
    font-weight: 500;
    color: #cacccb;
    margin: 0.6rem 0;
  }
  & blockquote {
    font-size: 0.8rem;
    line-height: 1.6rem;
    font-weight: 500;
    color: #cacccb;
    margin: 0.5rem 0;
  }

  & code,
  quote {
    display: block;
    position: relative;
    margin: 0;
    color: #cacccb;
    font-size: 0.8rem;
    box-sizing: border-box;
    font-weight: 500;
    border: 1px solid white;
  }
  & a {
    display: none;
    max-width: 90%;
    overflow: hidden;
  }
`;
