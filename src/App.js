import { Info, Jobs, Nav } from "./components/";
import { AppProvider } from "./context/AppContext";
import styled from "styled-components";
import "./App.css";
function App() {
  return (
    <AppProvider>
      <AppContainer>
        <Nav />
        <Info />
        <MainContainer>
          <Jobs />
        </MainContainer>
      </AppContainer>
    </AppProvider>
  );
}

export default App;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #000000;
  overflow: hidden;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: calc(100vh - 150px);
`;
