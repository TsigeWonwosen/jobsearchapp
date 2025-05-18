import { createContext, useEffect, useState, useMemo } from "react";
import { useFetchJobs } from "../components";
import sort from "../utility/sort";
import usePagination from "../hooks/usePagination";
import { getFilteredJobs } from "../utility/filter";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [featuredJob, setFeaturedJobs] = useState({});
  const [sortString, setSortString] = useState("");
  const [filters, setFilters] = useState({
    search: "",
    jobType: "",
  });

  const { jobs = [], loading, error } = useFetchJobs();

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const filteredJobs = useMemo(() => {
    let result = [...jobs];
    result = getFilteredJobs(result, filters);
    result = sort(result, sortString);
    return result;
  }, [filters, sortString, jobs]);

  const { totalPages, currentPage, setCurrentPage, paginatedJobs } =
    usePagination(filteredJobs);

  useEffect(() => {
    setFeaturedJobs(paginatedJobs[0]);
  }, [sortString, filters, paginatedJobs, filteredJobs]);

  const handleFeaturedJob = (id) => {
    setFeaturedJobs(paginatedJobs?.find((job) => job.id === id));
  };

  const handleSortJobs = (data) => {
    setSortString(data);
  };

  const numberOfJobs = filteredJobs ? filteredJobs?.length : 0;

  const value = {
    handleSortJobs,
    sortString,
    handleFeaturedJob,
    featuredJob,
    numberOfJobs,
    totalPages,
    currentPage,
    setCurrentPage,
    paginatedJobs,
    updateFilters,
    filters,
    loading,
    error,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
