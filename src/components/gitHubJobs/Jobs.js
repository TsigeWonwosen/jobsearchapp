import React from 'react';

import SingleJob from './SingleJob';
import FeaturedJob from './FeaturedJob';
import SearchForm from './SearchForm';

import useFilter from './useFilter';
import Info from './Info';

import styled from 'styled-components';
import './jobs.css';

function Jobs({ jobs, loading, error }) {
  const [featured, setFeatured] = React.useState(0);
  const [sortByDate, setSortByDate] = React.useState('');
  const {
    selectedJobs,
    numberOfJobs,
    setLocation,
    setType,
    totalPaginationSize,
    next,
    prev,
    setLastIndexOfSelectedJobs,
    lastIndexOfSelectedJobs,
  } = useFilter(jobs);

  console.log(jobs?.[0]);

  let SortedselectedJobs = sortByDate.length
    ? selectedJobs.sort((a, b) =>
        sortByDate === 'title'
          ? a.sortByDate - b.sortByDate
          : new Date(b.sortByDate) - new Date(a.sortByDate),
      )
    : selectedJobs;
  const featuredJob = SortedselectedJobs?.[featured];

  React.useEffect(() => {
    console.log(sortByDate);
  }, [sortByDate]);

  const rest = {
    totalPaginationSize,
    next,
    prev,
    setLastIndexOfSelectedJobs,
    lastIndexOfSelectedJobs,
  };

  const handleFeaturedJob = (id) => {
    setFeatured(id);
  };

  const handleSortJobs = (data) => {
    setSortByDate(data);
  };
  return (
    <Container>
      <Wrapper>
        <SearchForm setLocation={setLocation} setType={setType} />
        <Info
          numberOfJobs={numberOfJobs}
          rest={rest}
          handleSortJobs={handleSortJobs}
        />
        {loading && <h1>Loading ...</h1>}
        {error && <h1>Error ...Try Refreshing</h1>}

        <JobsListWrapper>
          <JobsList>
            {SortedselectedJobs &&
              SortedselectedJobs?.map((job, index) => (
                <SingleJob
                  job={job}
                  key={job.id}
                  Index={index}
                  handleFeaturedJob={handleFeaturedJob}
                />
              ))}
          </JobsList>
          {SortedselectedJobs.length > 0 && (
            <JobsListShow>
              <FeaturedJob featuredJob={featuredJob} />
            </JobsListShow>
          )}
        </JobsListWrapper>
      </Wrapper>
    </Container>
  );
}

export default Jobs;

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 99vw;
  max-width: 100%;
  min-height: calc(100vh - 50px);
  padding-left: 200px;
  @media (max-width: 900px) {
    padding-left: 0px;
  }
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 99%;
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
`;

export const JobsListWrapper = styled.section`
  display: flex;
  width: 100%;
  margin: 1rem auto;
  max-width: calc(100vw - 200px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);

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
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 4;
  overflow-y: scroll;
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
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
