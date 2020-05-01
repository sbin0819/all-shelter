import React from 'react';
import styled from 'styled-components';
import Cards from '../components/AnimalCards';

const Container = styled.div`
  position: relative;
  top: 95px;
`;

const Animal = () => {
  return (
    <Container>
      <div>
        <h1>animals</h1>
      </div>
      <Cards />
    </Container>
  );
};

export default Animal;
