import React from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  return (
    <Main>
      <Title>Dashboard</Title>
      <StatsContainer>
        <StatCard>
          <StatValue>120</StatValue>
          <StatLabel>Clientes cadastrados</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>350</StatValue>
          <StatLabel>Filmes disponíveis</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>
            8 <Notification>●</Notification>
          </StatValue>
          <StatLabel>Locações em aberto</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>R$ 12.340,00</StatValue>
          <StatLabel>Valor arrecadado</StatLabel>
        </StatCard>
      </StatsContainer>

      <ActionsContainer>
        <ActionButton>+ Novo aluguel</ActionButton>
        <ActionButton>+ Cadastrar cliente</ActionButton>
        <ActionButton>+ Cadastrar filme</ActionButton>
      </ActionsContainer>
    </Main>
  );
};

export default Dashboard;

const Main = styled.main`
  width: 100%;
  max-width: 960px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 700;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const StatCard = styled.div`
  flex: 1;
  min-width: 200px;
  background-color: #E9E9E9;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const StatLabel = styled.div`
  margin-top: 0.5rem;
  color: #555;
`;

const Notification = styled.span`
  color: red;
  font-size: 1rem;
  vertical-align: top;
  margin-left: 4px;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  background-color: #2F2F2F;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #706C61;
  }
`;
