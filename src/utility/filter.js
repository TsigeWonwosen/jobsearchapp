export const getFilteredJobs = (jobs, filters) => {
  if (!filters?.jobType?.length && !filters?.search?.length) {
    return jobs;
  }

  const searchFilter = filters.search?.toLowerCase() || "";
  const jobTypeFilter = filters.jobType?.toLowerCase() || "";
  return jobs.filter((job) => {
    const matchesSearch = searchFilter
      ? job.location.toLowerCase().includes(searchFilter) ||
        job.title.toLowerCase().includes(searchFilter) ||
        job.description.toLowerCase().includes(searchFilter)
      : true;
    const matchesJobType = jobTypeFilter
      ? job.type.toLowerCase() === jobTypeFilter
      : true;

    return matchesSearch && matchesJobType;
  });
};
