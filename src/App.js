import { Jobs, Nav, SideBar, useFetchJobs } from './components/';

import './App.css';
import styled from 'styled-components';
function App() {
  const { jobs, loading, error } = useFetchJobs();

  return (
    <>
      <Nav />
      <Container>
        <SideBar />
        <Jobs jobs={jobs} loading={loading} error={error} />;
      </Container>
    </>
  );
}

export default App;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`;
