import React, { createContext, useEffect } from "react";
import useFilter from "../components/gitHubJobs/useFilter";
import { useFetchJobs } from "../components";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [featured, setFeatured] = React.useState("1");
  const [featuredJob, setFeaturedJobs] = React.useState([]);
  const [sortString, setSortString] = React.useState("");
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
  } = useFilter(sortString);

  useEffect(() => {
    setSortString(jobs);
    setFeaturedJobs(jobs[lastIndexOfSelectedJobs]);
  }, [lastIndexOfSelectedJobs, jobs]);

  let SortedJobs =
    sortString.length && sortString === "title"
      ? selectedJobs.sort((a, b) => {
          const sortStringA = a.title?.toLowerCase();
          const sortStringB = b.title?.toLowerCase();

          if (sortStringA < sortStringB) {
            return -1;
          }
          if (sortStringA > sortStringB) {
            return 1;
          }

          return 0;
        })
      : selectedJobs.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });

  const handleFeaturedJob = (id) => {
    setFeatured(id);
    setFeaturedJobs(SortedJobs?.find((job) => job.id == id));
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
