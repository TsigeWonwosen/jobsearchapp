export const getFilteredJobs = (jobs, filters) => {
  if (!filters?.jobType?.length && !filters?.location?.length) {
    return jobs;
  }

  const locationFilter = filters.location?.toLowerCase() || "";
  const jobTypeFilter = filters.jobType?.toLowerCase() || "";

  return jobs.filter((job) => {
    const matchesLocation = locationFilter
      ? job.location.toLowerCase().includes(locationFilter)
      : true;
    const matchesJobType = jobTypeFilter
      ? job.type.toLowerCase() === jobTypeFilter
      : true;

    return matchesLocation && matchesJobType;
  });
};
