import { useState, useEffect, useMemo } from "react";
const DEFAULT_PAGE_SIZE = 10;

function usePagination(jobs = []) {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedJobs, setPaginatedJobs] = useState([]);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(jobs.length / DEFAULT_PAGE_SIZE));
  }, [jobs.length]);

  useEffect(() => {
    let startIndex = (currentPage - 1) * DEFAULT_PAGE_SIZE;
    let endIndex = startIndex + DEFAULT_PAGE_SIZE;
    setPaginatedJobs(jobs?.slice(startIndex, endIndex));
  }, [jobs, currentPage]);

  return {
    totalPages,
    currentPage,
    setCurrentPage,
    paginatedJobs,
  };
}

export default usePagination;
