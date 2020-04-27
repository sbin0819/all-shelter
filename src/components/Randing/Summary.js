import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  position: relative;
  display: flex;
  top: 76px;
  height: 95vh;
`;

const InnerContainer = styled.div`
  display: flex;
  margin: 20px auto;
`;

const LeftContainer = styled.div`
  margin-top: 80px;
  width: 450px;
  height: 400px;
  padding: 0 25px;
  div {
    margin-bottom: 30px;
  }
  h1 {
    margin-bottom: 40px;
    span {
      color: #478d4c;
    }
  }
  h2 {
    font-weight: 400;
    margin-bottom: 15px;
  }
  h3 {
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

const RightContainer = styled.div`
  margin-top: 30px;
  width: 450px;
  height: 460px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const StyledButton = styled(Button)`
  background-color: #478d4c;
  :hover {
    background-color: black;
  }
`;

const Summary = () => {
  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <h1>
            all shelter<span>.</span>
          </h1>
          <div style={{ borderBottom: '1px solid #eee' }} />
          <h2>All pets will get the love and care they deserve</h2>
          <h3>
            We care about every cat and doggo, from cure little to a scary
            spider.
          </h3>
          <StyledButton>
            Donate <FontAwesomeIcon icon={faArrowRight} />
          </StyledButton>
        </LeftContainer>
        <RightContainer>
          <img src="/images/about.jpg" alt="" />
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default Summary;
