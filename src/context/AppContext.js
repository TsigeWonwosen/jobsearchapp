import { createContext, useEffect, useState, useMemo } from "react";
import { useFetchJobs } from "../components";
import sort from "../utility/sort";
import usePagination from "../hooks/usePagination";
import { getfiltered } from "../utility/filter";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [featuredJob, setFeaturedJobs] = useState({});
  const [sortString, setSortString] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
  });

  const { jobs = [], loading, error } = useFetchJobs();
  const [filteredAndSelectedJobs, setFilteredAndSelectedJobs] = useState(jobs);

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const filteredJobs = useMemo(() => {
    let result = [...jobs];
    result = getfiltered(result, filters);
    result = sort(result, sortString);
    return result;
  }, [filters, sortString, jobs]);

  const {
    totalPaginationSize,
    next,
    prev,
    setLastIndexOfSelectedJobs,
    lastIndexOfSelectedJobs,
    selectedJobs,
  } = usePagination(filteredJobs);

  useEffect(() => {
    setFeaturedJobs(selectedJobs[0]);
    setFilteredAndSelectedJobs(filteredJobs);
  }, [sortString, filters, selectedJobs, filteredJobs]);

  const handleFeaturedJob = (id) => {
    setFeaturedJobs(selectedJobs?.find((job) => job.id === id));
  };

  const handleSortJobs = (data) => {
    setSortString(data);
  };

  const numberOfJobs = filteredJobs ? filteredJobs?.length : 0;

  console.log(selectedJobs[0]);
  const value = {
    handleSortJobs,
    sortString,
    handleFeaturedJob,
    featuredJob,
    SortedJobs: selectedJobs,
    numberOfJobs,
    totalPaginationSize,
    next,
    prev,
    setLastIndexOfSelectedJobs,
    lastIndexOfSelectedJobs,
    updateFilters,
    filters,
    loading,
    error,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
