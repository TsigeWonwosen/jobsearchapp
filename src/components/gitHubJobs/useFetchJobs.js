import { useState, useEffect, useCallback } from "react";
import Axios from "axios";
//https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json
//https://job-listings.p.rapidapi.com/api/job/details/

const BASE_URL = "https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json";

export default function useFetchJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getJobs = useCallback(async () => {
    const cancelToken = Axios.CancelToken.source();
    try {
      setLoading(true);
      const response = await Axios(BASE_URL, {
        headers: { accept: "Accept: application/json" },
      });
      console.log(">>>>", typeof response.data);
      if (typeof response !== "string") {
        setError(false);
        setLoading(false);
        const jobs = await response.data;
        setJobs(jobs);
        console.log(">>>> 2", typeof response.data);
      }
    } catch (e) {
      setError(true);
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
