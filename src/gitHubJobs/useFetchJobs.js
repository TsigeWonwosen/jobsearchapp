import { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';

// const ACTIONS = {
//   MAKE_REQUEST: "make-request",
//   GET_DATA: "get-data",
//   ERROR: "error",
//   UPDATE_HAS_NEXT_PAGE: "update-has-next-page",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.MAKE_REQUEST:
//       return { loading: true, jobs: [] };
//     case ACTIONS.GET_DATA:
//       return { ...state, loading: false, jobs: action.payload.jobs };
//     case ACTIONS.ERROR:
//       return {
//         ...state,
//         error: action.payload.error,
//         loading: false,
//         jobs: [],
//       };
//     default:
//       return state;
//   }
// }
// const BASE_URL =
//   "https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json";

const BASE_URL =
  'https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json';

export default function useFetchJobs(params, page) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getJobs = useCallback(async () => {
    const cancelToken = Axios.CancelToken.source();
    try {
      setLoading(true);
      const response = await Axios.get(BASE_URL, {
        cancelToken: cancelToken.token,
        params: { markdown: true, page: page, ...params },
      });

     
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
  }, [params, page]);

  useEffect(() => {
    getJobs();
  }, [getJobs, page]);

  return {
    jobs,
    loading,
    error,
  };
}
