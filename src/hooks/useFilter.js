import { useState } from "react";

function useFilter(jobs) {
  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
  });

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const filteredJobs = jobs.filter((job) => {
    const locationMatch = job.location
      .toLowerCase()
      .includes(filters.location.toLowerCase());
    const typeMatch = filters.jobType ? job.type === filters.jobType : true;
    return locationMatch && typeMatch;
  });

  return { filteredJobs, updateFilters };
}

export default useFilter;
