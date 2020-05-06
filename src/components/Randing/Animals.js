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
  width: 480px;
  height: 480px;
  overflow: hidden;
`;

const RightContainer = styled.div`
  margin: 100px 0 150px;
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
`;

const PictureContainer = styled.div`
  height: 150px;
  width: 100%;
  margin: 10px 0;
  display: flex;
`;

const Picture = styled.div`
  height: 150px;
  width: 150px;
  margin: 0 5px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  img {
    max-height: 100%;
    width: auto;
  }
  background-color: lightpink;
`;

const StyledLink = styled(Link)`
  color: #478d4c;
  font-size: 1.1rem;
  font-weight: 500;
  :hover {
    cursor: pointer;
  }
`;

const Animals = () => {
  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <PictureContainer>
            <Picture>
              <img src="/images/animals/1.jpg" alt="" />
            </Picture>
            <Picture>
              <img src="/images/animals/2.jpg" alt="" />
            </Picture>
            <Picture>
              <img src="/images/animals/3.jpg" alt="" />
            </Picture>
          </PictureContainer>
          <PictureContainer>
            <Picture>
              <img src="/images/animals/4.jpg" alt="" />
            </Picture>
            <Picture>
              <img src="/images/animals/5.jpg" alt="" />
            </Picture>
            <Picture>
              <img src="/images/animals/6.jpg" alt="" />
            </Picture>
          </PictureContainer>
          <PictureContainer>
            <Picture>
              <img src="/images/animals/7.jpg" alt="" />
            </Picture>
            <Picture>
              <img src="/images/animals/8.jpg" alt="" />
            </Picture>
            <Picture>
              <img src="/images/animals/9.jpg" alt="" />
            </Picture>
          </PictureContainer>
        </LeftContainer>
        <RightContainer>
          <h1>
            animals<span>.</span>
          </h1>
          <div style={{ borderBottom: '1px solid #eee' }} />
          <h3>Want to have a closer look at our heroes?</h3>
          <h4>
            Sit back and enjoy reading and watching about al magnificent
            creatures of ours.
          </h4>
          <h4>Want to adopt some cure?</h4>
          <StyledLink to="/animals">Click here --></StyledLink>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default Animals;
