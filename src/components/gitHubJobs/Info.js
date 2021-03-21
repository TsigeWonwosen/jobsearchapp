import React from 'react';
import JobsPagination from './JobsPagination';
import styled from 'styled-components';
function Info({ numberOfJobs, rest, handleSortJobs }) {
  const [selected, setSelected] = React.useState('');
  return (
    <Wrapper>
      <JobsInfo>{numberOfJobs} jobs</JobsInfo>

      <JobsPagination rest={rest} />
      <JobSortWrapper>
        <JobsInfo>Sort by :</JobsInfo>
        <JobsSort
          value={selected}
          onChange={(e) => handleSortJobs(e.target.value)}
        >
          <option>matches</option>
          <option value="created_at">day</option>
          <option value="title">title</option>
        </JobsSort>
      </JobSortWrapper>
    </Wrapper>
  );
}

export default Info;

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 60px;
  width: 90%;
  margin: 1rem auto;
  background-color: #2d2d2d;
  color: #ffffff;
  @media (max-width: 900px) {
    width: 95%;
    padding: 0 0.5rem;
  }
`;
export const JobsInfo = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  margin-right: 0.7rem;
  @media (max-width: 900px) {
    margin-right: 0.2rem;
  }
`;
export const JobSortWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const JobsSort = styled.select`
  color: gray;
  font-size: 0.8rem;
  padding: 3px 5px;
  @media (max-width: 900px) {
    font-size: 0.7rem;
    padding: 3px 5px;
  }
`;
