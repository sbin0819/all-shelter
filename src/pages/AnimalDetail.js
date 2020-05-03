import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import PET_DATA from '../data/pet.data';

const Container = styled.div`
  position: relative;
  top: 95px;
  margin: 0px 20px;
`;

const BasicInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Img = styled.div`
  height: 400px;
  width: 400px;
  margin-right: 30px;
  background-position: center;
  background-size: cover;
`;

const InfoBox = styled.div`
  height: 400px;
  width: 400px;
  background-color: lightpink;
  h3 {
    margin-bottom: 20px;
  }
`;

const Introduce = styled.div`
  height: 100px;
  background-color: pink;
  width: 830px;
`;

const AnimalDetail = ({ match }) => {
  const { animalId } = match.params;
  const info = PET_DATA.find((e) => e.id === Number(animalId));
  return (
    <Container>
      <div>
        <BasicInfo>
          <Img
            style={{
              backgroundImage: `url(${info.imageUrl})`,
            }}
          />
          <InfoBox>
            <h3>Info1</h3>
            <h3>Info1</h3>
            <h3>Info1</h3>
            <h3>Info1</h3>
            <h3>Info1</h3>
            <h3>Info1</h3>
          </InfoBox>
        </BasicInfo>
        <Introduce>{info.text}</Introduce>
      </div>
    </Container>
  );
};

export default withRouter(AnimalDetail);
