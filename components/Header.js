import React from 'react';
import styled from 'styled-components';
import LinkStyled from 'next/link';

import {colors} from '../styles/theme';

const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.dark};
  color: ${colors.light};
`;

const ContainerProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Link = styled.a`
  color: ${colors.light};
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${colors.light};
  }
`;

const ButtonLogout = styled(Link)`
  background: ${colors.secundary};
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;


const NameUser = styled.h4`
  color: ${colors.light};
  font-size: 1rem;
`;

const ContainerImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
	justify-content: space-around;
	margin-left: 10px;
`;

const Header = () => {
  return (
    <ContainerHeader>
      <h1>
        <LinkStyled href="/">
          <Link>
            <ContainerImage>
             Astronaut
            </ContainerImage>
          </Link>
        </LinkStyled>
      </h1>
      <ContainerProfile>
        <Menu>
          <LinkStyled href="/invoice">
            <Link>Invoice</Link>
          </LinkStyled>
        </Menu>
        <Menu>
          <LinkStyled href="/bot">
            <Link>Bot</Link>
          </LinkStyled>
        </Menu>
        
        <ButtonLogout href="/logout">Logout</ButtonLogout>
      </ContainerProfile>
    </ContainerHeader>
  );
};

export default Header;
