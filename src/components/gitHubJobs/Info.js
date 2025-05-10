import styled from "styled-components";
import { useAppContext } from "../../context/useAppContext";
function Info() {
  const { handleSortJobs, sortString } = useAppContext();

  return (
    <JobSortWrapper>
      <JobsInfo>Sort by :</JobsInfo>
      <JobsSort
        value={sortString}
        onChange={(e) => handleSortJobs(e.target.value)}
      >
        <option
          key="Matches"
          value=""
        >
          Matches
        </option>
        <option
          key="created_at"
          value="created_at"
        >
          Day
        </option>
        <option
          key="title"
          value="title"
        >
          Title
        </option>
      </JobsSort>
    </JobSortWrapper>
  );
}

export default Info;

export const JobSortWrapper = styled.section`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1rem;
`;
export const JobsInfo = styled.span`
  height: 100%;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  @media (max-width: 900px) {
    margin-right: 0.2rem;
  }
`;

export const JobsSort = styled.select`
  padding: 8px 10px;
  border: 1px solid gray;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  letter-spacing: 1px;
  width: auto;
  max-width: 250px;
  background-color: #383838;
  background-color: #333334;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
