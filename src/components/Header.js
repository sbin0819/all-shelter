import React from 'react';
// import { Link } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  padding: 15px 10px 15px 120px;
  font-size: 1.5rem;
  /* 휴대폰 사이즈로 줄어들면 padding 조정하자 */
`;

const StyledNavLink = styled.span`
  margin: auto 0;
  margin-left: 40px;
  font-size: 1.2rem;
  color: grey;
  cursor: pointer;
  :hover {
    color: #478d4c;
  }
`;
const StyledButton = styled(Button)`
  margin-left: 50px;
  background-color: #478d4c;
  :hover {
    background-color: black;
  }
`;

const Header = () => {
  return (
    <StyledNavbar bg="light" expand="lg">
      <Navbar.Brand href="/" style={{ fontSize: '1.5rem' }}>
        All Shelter
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <StyledNavLink>ABOUT US</StyledNavLink>
          <StyledNavLink>ADOPTION</StyledNavLink>
          <StyledNavLink>ANIMALS</StyledNavLink>
          <StyledNavLink>SURRENDERING</StyledNavLink>
          <StyledNavLink>ANIMAL HOTEL</StyledNavLink>
          <StyledButton>Donate -></StyledButton>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Header;
