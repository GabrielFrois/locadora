import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Container>
      <NavButton active>Início</NavButton>
      <NavButton>Clientes</NavButton>
      <NavButton>Filmes</NavButton>
      <NavButton>Locações</NavButton>
    </Container>
  );
};

export default Sidebar;

const Container = styled.nav`
  width: 220px;
  background-color: #2F2F2F;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  height: 100vh;
`;

const NavButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? '#706C61' : 'transparent')};
  color: white;
  border: none;
  padding: 1rem 1.25rem;
  margin-bottom: 0.75rem;
  text-align: left;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #706C61;
  }
`;
