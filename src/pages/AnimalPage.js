import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  top: 90px;
`;

const Animal = () => {
  return (
    <Container>
      <div>동물</div>
    </Container>
  );
};

export default Animal;
