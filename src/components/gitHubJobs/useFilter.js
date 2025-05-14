import { useEffect, useState } from "react";
import { getfiltered } from "../../utility/filter";

const useFilter = (jobs = []) => {
  const [typeOfJob, setTypeOfJob] = useState("");
  const [jobLocation, setSelectedLocation] = useState("");

  const filteredJobs = getfiltered(jobs, typeOfJob, jobLocation);

  const setLocation = (location) => {
    setSelectedLocation(location);
  };
  const setType = (type) => {
    setTypeOfJob(type);
  };
  useEffect(() => {}, [jobs]);
  return {
    filteredJobs,
    setType,
    setLocation,
  };
};

export default useFilter;
