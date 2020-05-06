import React from 'react';
import styled from 'styled-components';
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 8px 0px;
  background-color: #f2f4f3;
  display: flex;
  color: grey;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  div {
    margin: 3px 20px;
  }
  .sub {
    @media (max-width: 820px) {
      display: none;
    }
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
        <div>Inspire By Maryana_Kons</div>
        <div className="sub">Privacy Policy | Teams & Condition</div>
        <div className="sub">+123-456-789</div>
        <IconStyled className="sub" icon={faFacebookSquare} size="2x" />
        <IconStyled className="sub" icon={faInstagramSquare} size="2x" />
        <IconStyled className="sub" icon={faTwitterSquare} size="2x" />
      </InnerContainer>
    </Container>
  );
};

export default Footer;
