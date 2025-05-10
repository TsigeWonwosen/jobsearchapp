import { useEffect } from "react";

import SingleJob from "./SingleJob";
import FeaturedJob from "./FeaturedJob";
import Info from "./Info";

import styled from "styled-components";
import JobsPagination from "./JobsPagination";
import { useAppContext } from "../../context/useAppContext";
import useFetchJobs from "./useFetchJobs";

function Jobs() {
  const { jobs = [], loading, error } = useFetchJobs();
  const {
    SortedJobs,
    handleFeaturedJob,
    sortString,
    featured,
    rest,
    featuredJob,
    numberOfJobs,
  } = useAppContext();

  useEffect(() => {}, [sortString, jobs]);

  return (
    <Container>
      <Info />
      {loading && <h1>Loading ...</h1>}
      {error && <h1>Error ...Try Refreshing</h1>}

      <JobsListWrapper>
        <JobsList>
          <div className="flex justify-sart align-center px-2 py-2 flex-col gap-2 border-b-[1px] border-gray-600 mb-1">
            <h2 className="text-base font-semibold">Top job picks for you</h2>
            <p className="text-sm text-gray-300">
              Based on your profile, preferences, and activity like applies,
              searches, and saves {numberOfJobs} results
            </p>
          </div>
          <div className="w-full h-full">
            {SortedJobs &&
              SortedJobs?.map((job) => (
                <SingleJob
                  job={job}
                  key={job.id}
                  isselected={featured === job.id ? "selected" : undefined}
                  handleFeaturedJob={handleFeaturedJob}
                />
              ))}
            <JobsPagination rest={rest} />
          </div>
        </JobsList>
        <div className="w-1/2 h-full">
          {SortedJobs.length > 0 && (
            <JobsListShow>
              <FeaturedJob featuredJob={featuredJob} />
            </JobsListShow>
          )}
        </div>
      </JobsListWrapper>
    </Container>
  );
}

export default Jobs;

export const Container = styled.div`
  width: 99vw;
  max-width: 100%;
  min-height: calc(100vh - 50px);
  min-height: 100%;
  margin: 0rem auto;
  padding: 3rem auto 2rem;
  background-color: #2d2d2d;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f2f2f3;
  @media (max-width: 900px) {
    padding: 3rem auto 1rem;
  }
  @media (max-width: 900px) {
    padding-left: 0px;
  }
`;

export const JobsListWrapper = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  margin: 1rem auto;
  max-width: calc(100vw - 20px);
  padding: 2rem 3rem;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    width: 100%;
    max-width: calc(100vw);
    margin: 1.5rem auto;
    padding: 1rem 0.5rem;
  }
`;

export const JobsList = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 4;
  overflow-y: auto;
  @media (max-width: 900px) {
    width: 100%;
    overflow: hidden;
  }
  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 4px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: #f2f2f2;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export const JobsListShow = styled.section`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  min-height: calc(100vh - 50px);

  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
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
