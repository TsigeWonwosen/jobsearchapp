import Jobs from './gitHubJobs/Jobs';
import './App.css';
import useFetchJobs from './gitHubJobs/useFetchJobs';

function App() {
  const { jobs, loading, error } = useFetchJobs();

  return <Jobs jobs={jobs} loading={loading} error={error} />;
}

export default App;
