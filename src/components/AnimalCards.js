import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

import PET_DATA from '../data/pet.data';

const Container = styled.div`
  /* position: relative; */
`;

const CardContainer = styled.div`
  /* position: absolute;
  margin: 0 auto; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const StyledCard = styled(Card.Img)`
  width: 100%;
  height: 15vw;
  object-fit: cover;
`;

const Cards = () => {
  return (
    <Container>
      <CardContainer>
        {PET_DATA.map((pet) => (
          <Card key={pet.id} style={{ width: '18rem', margin: '5px 5px' }}>
            <StyledCard src={pet.imageUrl} />
            <Card.Body>
              <Card.Title>{pet.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Cards;
