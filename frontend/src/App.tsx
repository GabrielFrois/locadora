import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <Sidebar />
        <ContentArea>
          <Dashboard />
        </ContentArea>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  margin-top: 60px; // altura do Header fixo
  height: calc(100vh - 60px);
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;     // Centraliza horizontalmente
  align-items: flex-start;     // Alinha no topo verticalmente (ou center se quiser no meio)
  padding: 2rem;
  overflow-y: auto;
  background-color: #F9F4EC;
`;
