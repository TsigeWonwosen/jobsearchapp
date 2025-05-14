import { useState, useEffect } from "react";
const PAGINATION_SIZE = 4;

function usePagination(jobs) {
  const [lastIndexOfSelectedJobs, setLastIndexOfSelectedJobs] = useState(1);
  const [selectedJobs, setSelectedJobs] = useState([]);

  const numberOfJobs = jobs.length;

  const PaginationSize =
    numberOfJobs > PAGINATION_SIZE
      ? Math.ceil(numberOfJobs / PAGINATION_SIZE)
      : 1;

  let finalIndex = lastIndexOfSelectedJobs * PAGINATION_SIZE;
  let initial =
    lastIndexOfSelectedJobs === 1 ? 0 : finalIndex - PAGINATION_SIZE;

  let TopSelectedJobs = jobs.length > 0 ? jobs?.slice(initial, finalIndex) : [];

  useEffect(() => {
    setSelectedJobs(TopSelectedJobs);
  }, [jobs, lastIndexOfSelectedJobs]);
  const next = () => {
    setLastIndexOfSelectedJobs(lastIndexOfSelectedJobs + 1);
  };

  const prev = () => {
    setLastIndexOfSelectedJobs(lastIndexOfSelectedJobs - 1);
  };

  return {
    totalPaginationSize: PaginationSize,
    next,
    prev,
    setLastIndexOfSelectedJobs,
    lastIndexOfSelectedJobs,
    selectedJobs,
  };
}

export default usePagination;
