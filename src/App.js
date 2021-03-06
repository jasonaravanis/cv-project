import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <AppWrapper>
      <Header appStyles={appStyles}></Header>
      <Main appStyles={appStyles}></Main>
      <Footer appStyles={appStyles} />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const appStyles = {
  headerColor: "#313638",
  titleColor: "#F09D51",
  backgroundColor: "#f5f5f5",
  sectionColor: "#E0DFD5",
  highLightColor: "#93C9DC",
};

export default App;
