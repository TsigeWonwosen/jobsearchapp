import { useState, useEffect } from 'react';

const PAGINATION_SIZE = 10;

const useFilter = (jobs) => {
  const [loc, setSelectedLocation] = useState('');
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [lastIndexOfSelectedJobs, setLastIndexOfSelectedJobs] = useState(1);
  let filteredJobs = [];
  let numberOfJobs = 1;
  let totalPaginationSize = 1;

  if (loc.length < 1) {
    filteredJobs = jobs;
  } else {
    filteredJobs = jobs?.filter(({ type }) =>
      type.toLowerCase().includes(loc.toLowerCase()),
    );
  }

  numberOfJobs = filteredJobs?.length;
  totalPaginationSize =
    numberOfJobs > PAGINATION_SIZE
      ? Math.floor(numberOfJobs / PAGINATION_SIZE)
      : 1;
  useEffect(() => {
    function selectNewJobs() {
      let finalIndex = lastIndexOfSelectedJobs * PAGINATION_SIZE;
      let initial = finalIndex - PAGINATION_SIZE;
      let TenSelectedJobs = filteredJobs?.slice(initial, finalIndex);
      setSelectedJobs(TenSelectedJobs);
    }
    selectNewJobs();
  }, [lastIndexOfSelectedJobs, loc]);
  const next = () => {
    setLastIndexOfSelectedJobs(lastIndexOfSelectedJobs + 1);
  };
  const prev = () => {
    setLastIndexOfSelectedJobs(lastIndexOfSelectedJobs - 1);
  };
  const setLocation = (type) => {
    setSelectedLocation(type);
  };
  return [
    selectedJobs,
    numberOfJobs,
    setLocation,
    totalPaginationSize,
    loc,
    next,
    prev,
    setLastIndexOfSelectedJobs,
    lastIndexOfSelectedJobs,
  ];
};

export default useFilter;
