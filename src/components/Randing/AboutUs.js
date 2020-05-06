import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const InnerContainer = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: center;
  @media (max-width: 820px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const LeftContainer = styled.div`
  margin-top: 40px;
  width: 450px;
  height: 350px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightyellow;
`;

const RightContainer = styled.div`
  margin-top: 100px;
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
  h3 {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  h4 {
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 30px;
  }
  p {
    color: #478d4c;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const StyledLink = styled(Link)`
  color: #478d4c;
  font-size: 1.1rem;
  font-weight: 500;
  :hover {
    cursor: pointer;
  }
`;

const AboutUs = () => {
  return (
    <Container>
      <InnerContainer>
        <LeftContainer>동영상</LeftContainer>
        <RightContainer>
          <h1>
            about us<span>.</span>
          </h1>
          <div style={{ borderBottom: '1px solid #eee' }} />
          <h3>
            We are passionate doggo people with motivation to save all the
            abandoned pets and take carae of them
          </h3>
          <h4>
            We started as a hotel furry pets. Then understood how we caan give
            back to community with our resourses and knowledge.
          </h4>
          <h4>Want to find about us more?</h4>
          <StyledLink to="/about">Click here --></StyledLink>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default AboutUs;
