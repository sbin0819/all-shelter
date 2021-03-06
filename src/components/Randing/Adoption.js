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
  margin-top: 90px;
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
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  h4 {
    font-weight: 300;
    font-size: 1rem;
    margin-bottom: 20px;
  }
  p {
    color: #478d4c;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const RightContainer = styled.div`
  margin-top: 30px;
  width: 470px;
  height: 420px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
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

const Adoption = () => {
  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <h1>
            adoption<span>.</span>
          </h1>
          <div style={{ borderBottom: '1px solid #eee' }} />
          <h3>
            We are matchmakers! Once you have adopted, we will provide you with
            information, advice and support.
          </h3>
          <h4>
            When you first arrive at the Shelter, we will ask you to complete a
            matchmaking survey to better assess which adoptable animals might be
            a good fit for you.
          </h4>
          <h4>Want to find about adoption process more?</h4>
          <StyledLink to="/adoption">Click here --></StyledLink>
        </LeftContainer>
        <RightContainer>
          <img src="/images/adoption.jpg" alt="" />
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default Adoption;
