import React from 'react';
import styled from 'styled-components';
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 10px 0px;
  background-color: #f2f4f3;
  display: flex;
  color: grey;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  display: flex;
  margin: auto 10px;
  margin-left: 150px;
  span {
    margin: auto 10px;
  }
`;

const IconStyled = styled(FontAwesomeIcon)`
  color: grey;
  margin-left: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <IconStyled icon={faCopyright} size="2x" />
        <span>Copyright 2020 sbinha</span>
      </InnerContainer>
      <InnerContainer>Privacy Policy | Teams & Condition</InnerContainer>
      <InnerContainer>
        <span>+82-123-4567</span>
        <IconStyled icon={faFacebookSquare} size="2x" />
        <IconStyled icon={faInstagramSquare} size="2x" />
        <IconStyled icon={faTwitterSquare} size="2x" />
      </InnerContainer>
    </Container>
  );
};

export default Footer;
