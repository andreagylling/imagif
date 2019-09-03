import React from 'react';
import styled from 'styled-components';
import logo from '../imagif.svg';


const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.img`
  width: 50%;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
    </HeaderContainer>
  )
}