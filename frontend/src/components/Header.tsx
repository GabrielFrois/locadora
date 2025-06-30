import styled from 'styled-components';
import logoSrc from '../assets/logo.png';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src={logoSrc} alt="Logo do site" />
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #B08945;
  display: flex;
  justify-content: center; /* centraliza horizontalmente */
  align-items: center;     /* centraliza verticalmente */
  z-index: 1000;
`;

const Logo = styled.img`
  height: 10vh;
  padding-top: 10px;
  padding-bottom: 5px;
`;
