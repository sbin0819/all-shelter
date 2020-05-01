import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledNavbar = styled(Navbar)`
  position: fixed;
  width: 100%;
  padding: 15px 10px 15px 120px;
  font-size: 1.5rem;
  z-index: 1;
  /* 휴대폰 사이즈로 줄어들면 padding 조정하자 */
`;

const StyledNavLink = styled(Link)`
  margin: auto 0;
  margin-left: 40px;
  font-size: 1rem;
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
          <StyledNavLink to="/about">ABOUT US</StyledNavLink>
          <StyledNavLink to="/adoption">ADOPTION</StyledNavLink>
          <StyledNavLink to="/animals">ANIMALS</StyledNavLink>
          <StyledNavLink to="/animals">SURRENDERING</StyledNavLink>
          <StyledNavLink to="/animals">ANIMAL HOTEL</StyledNavLink>
          <StyledButton>
            Donate <FontAwesomeIcon icon={faArrowRight} />
          </StyledButton>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Header;
