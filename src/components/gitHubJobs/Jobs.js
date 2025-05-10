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
        <div className="h-full w-1/2 min-h-screen">
          <div className="w-full flex justify-sart align-center px-1 py-2 pb-3 flex-col gap-2 border-b-[0.5px] border-gray-800 mb-2">
            <h2 className="text-base font-semibold">Top job picks for you</h2>
            <p className="text-sm text-gray-300">
              Based on your profile, preferences, and activity like applies,
              searches, and saves {numberOfJobs} results
            </p>
          </div>
          <JobsList>
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
            </div>
          </JobsList>
          <JobsPagination rest={rest} />
        </div>
        <div className="w-1/2 h-full flex justify-center items-center ">
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
  min-height: calc(100vh - 50px);
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 1rem auto;
  padding: 1rem auto 2rem;
  border-radius: 5px;
  background-color: #1c1c1d;
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
  height: 100vh;
  margin: 0.2rem auto;
  padding: 1rem;
  overflow: hidden;
  gap: 1rem;
  border-top: 0.5px solid rgba(55, 51, 51, 0.775);
`;

export const JobsList = styled.section`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - (70px + 100px));
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  gap: 0.5rem;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 8px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: #888;
    border-radius: 8px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 8px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;

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
