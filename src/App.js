import { Jobs, Nav, SideBar, useFetchJobs } from "./components/";

import styled from "styled-components";
import "./App.css";
function App() {
  const { jobs = [], loading, error } = useFetchJobs();

  return (
    <>
      <Nav />
      <Container>
        <SideBar />
        <Jobs
          jobs={jobs}
          loading={loading}
          error={error}
        />
        ;
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
