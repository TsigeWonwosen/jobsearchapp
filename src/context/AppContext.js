import React, { createContext, useEffect } from "react";
import useFilter from "../components/gitHubJobs/useFilter";
import { useFetchJobs } from "../components";
import sort from "../utility/sort";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [featured, setFeatured] = React.useState("1");
  const [featuredJob, setFeaturedJobs] = React.useState([]);
  const [sortString, setSortString] = React.useState("title");
  const { jobs = [] } = useFetchJobs();

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

  useEffect(() => {
    setFeaturedJobs(jobs[lastIndexOfSelectedJobs]);
  }, [lastIndexOfSelectedJobs, jobs, sortString]);

  let SortedJobs = sort(selectedJobs, sortString);

  const handleFeaturedJob = (id) => {
    setFeatured(id);
    setFeaturedJobs(SortedJobs?.find((job) => job.id === id));
  };

  const handleSortJobs = (data) => {
    setSortString(data);
  };

  const value = {
    handleSortJobs,
    handleFeaturedJob,
    featuredJob,
    SortedJobs,
    numberOfJobs,
    setLocation,
    setType,
    totalPaginationSize,
    featured,
    next,
    prev,
    setLastIndexOfSelectedJobs,
    lastIndexOfSelectedJobs,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
