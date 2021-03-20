import { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
const BASE_URL =
  'https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json';

export default function useFetchJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getJobs = useCallback(async () => {
    const cancelToken = Axios.CancelToken.source();
    try {
      setLoading(true);
      const response = await Axios(BASE_URL);

      if (response) {
        setError(false);
        setLoading(false);
        const jobs = await response.data;
        setJobs(jobs);
      }
    } catch (e) {
      console.log(e.message);
    }
    return () => {
      cancelToken.cancel();
    };
  }, []);

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  return {
    jobs,
    loading,
    error,
  };
}
