import { useState, useEffect } from "react";
import Axios from "axios";
import jobsData from "../../data/jobs.json";
const BASE_URL = "../../data/jobs.json";

export default function useFetchJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getJobs = async () => {
    try {
      setLoading(true);
      // const response = await Axios.get(BASE_URL);
      // if (typeof response !== "string") {
      if (jobsData.jobs.length > 0) {
        setLoading(false);
        // const jobs = await response.data;
        setJobs(jobsData.jobs);
      }
    } catch (e) {
      setError(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return {
    jobs,
    loading,
    error,
  };
}
