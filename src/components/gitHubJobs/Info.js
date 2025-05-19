import styled from "styled-components";
import { useAppContext } from "../../context/useAppContext";
import SearchForm from "./SearchForm";
function Info() {
  const { handleSortJobs, sortString } = useAppContext();

  return (
    <JobSortWrapper>
      <div className="h-auto w-auto md:hidden flex md:justify-start sm:justify-end  ">
        <SearchForm />
      </div>
      <div className="w-auto h-full flex items-center justify-end gap-1 ml-auto">
        <JobsInfo>Sort by :</JobsInfo>
        <JobsSort
          value={sortString}
          name="sortString"
          onChange={(e) => handleSortJobs(e.target.value)}
        >
          <option
            key="Matches"
            value=""
          >
            All
          </option>
          <option
            name="created_at"
            value="created_at"
          >
            Date
          </option>
          <option
            name="title"
            value="title"
          >
            Title
          </option>
          {/* Internship */}
        </JobsSort>
      </div>
    </JobSortWrapper>
  );
}

export default Info;

export const JobSortWrapper = styled.section`
  width: 100%;
  max-width: 1280px;
  max-height: 70px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  margin: 0 auto;
  flex-shrink: 0;

  @media screen and (max-width: 900px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    max-height: 100px;
    padding: 1rem;
  }
`;
export const JobsInfo = styled.span`
  height: auto;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  @media screen and (max-width: 900px) {
    font-size: 0.87rem;
  }
`;

export const JobsSort = styled.select`
  padding: 7px 8px;
  border: 1px solid #404040;
  border-radius: 5px;
  color: white;
  font-size: 13.5px;
  letter-spacing: 1px;
  width: auto;
  height: auto;
  max-width: 250px;
  background-color: transparent;

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
