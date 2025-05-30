import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  HomePage,
  AboutPage,
  Nav,
  JobsContainer,
  Contact,
} from "./components/";
import { AppProvider } from "./context/AppContext";
import styled from "styled-components";
import "./App.css";
function App() {
  return (
    <Router>
      <AppProvider>
        <AppContainer>
          <Nav />
          <MainContainer>
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
              />
              <Route
                path="/about"
                element={<AboutPage />}
              />
              <Route
                path="/jobs"
                element={<JobsContainer />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
            </Routes>
          </MainContainer>
        </AppContainer>
      </AppProvider>
    </Router>
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
  height: calc(100vh - 130px);
  @media screen and (max-width: 680px) {
    height: flex-1;
  }
`;
