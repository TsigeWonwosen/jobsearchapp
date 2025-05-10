import { Jobs, Nav } from "./components/";
import { AppProvider } from "./context/AppContext";
import styled from "styled-components";
import "./App.css";
function App() {
  return (
    <AppProvider>
      <Nav />
      <Container>
        <Jobs />;
      </Container>
    </AppProvider>
  );
}

export default App;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: #1c1c1d;
`;
