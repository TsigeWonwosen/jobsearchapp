import { useState, useEffect } from "react";

const PAGINATION_SIZE = 4;

const useFilter = (jobs) => {
  const [numberOfJobs, setNumberOfJobs] = useState(jobs.length);
  const [totalPaginationSize, setTotalPagination] = useState(1);
  const [lastIndexOfSelectedJobs, setLastIndexOfSelectedJobs] = useState(1);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [typeOfJob, setTypeOfJob] = useState("");
  const [jobLocation, setSelectedLocation] = useState("");

  const filteredJobs = () => {
    let newFilteredJobs = [];
    if (jobLocation.length < 1 && typeOfJob.length < 1) {
      return jobs;
    } else {
      newFilteredJobs = jobs?.filter(({ type, location }) => {
        return (
          location.toLowerCase().includes(jobLocation.toLowerCase()) &&
          type.toLowerCase().includes(typeOfJob.toLowerCase())
        );
      });
    }
    return newFilteredJobs;
  };

  const selectedJobsCb = () => {
    let totalPaginationSize = 1;
    let numberOfJobs;
    numberOfJobs = filteredJobs()?.length;
    totalPaginationSize =
      numberOfJobs > PAGINATION_SIZE
        ? Math.ceil(numberOfJobs / PAGINATION_SIZE)
        : 1;

    setTotalPagination(totalPaginationSize);
    setNumberOfJobs(numberOfJobs);

    function selectNewJobs() {
      try {
        let finalIndex = lastIndexOfSelectedJobs * PAGINATION_SIZE;
        let initial =
          lastIndexOfSelectedJobs === 1 ? 0 : finalIndex - PAGINATION_SIZE;
        let TopSelectedJobs =
          filteredJobs().length > 0
            ? filteredJobs()?.slice(initial, finalIndex)
            : [];
        setSelectedJobs(TopSelectedJobs);
      } catch (error) {
        console.log(error);
      }
    }

    return selectNewJobs();
  };

  useEffect(() => {
    selectedJobsCb();
  }, [lastIndexOfSelectedJobs, typeOfJob, jobLocation, numberOfJobs, jobs]);

  const next = () => {
    setLastIndexOfSelectedJobs(lastIndexOfSelectedJobs + 1);
  };

  const prev = () => {
    setLastIndexOfSelectedJobs(lastIndexOfSelectedJobs - 1);
  };

  const setLocation = (location) => {
    setSelectedLocation(location);
  };
  const setType = (type) => {
    setTypeOfJob(type);
  };

  return {
    selectedJobs,
    numberOfJobs,
    setType,
    setLocation,
    totalPaginationSize,
    next,
    prev,
    setLastIndexOfSelectedJobs,
    lastIndexOfSelectedJobs,
  };
};

export default useFilter;
