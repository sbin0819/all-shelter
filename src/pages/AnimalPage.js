import React from 'react';
import styled from 'styled-components';
import Cards from '../components/Cards';

const Container = styled.div`
  position: absolute;
  top: 95px;
`;

const Animal = () => {
  return (
    <Container>
      <Cards />
    </Container>
  );
};

export default Animal;
