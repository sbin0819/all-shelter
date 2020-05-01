import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

import PET_DATA from '../data/pet.data';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 100px;
  margin-left: 15px;
`;

const StyledCard = styled(Card.Img)`
  width: 100%;
  height: 15vw;
  object-fit: cover;
`;

const Cards = ({ history, match }) => {
  return (
    <>
      <CardContainer>
        {PET_DATA.map((pet) => (
          <Card key={pet.id} style={{ width: '20rem', margin: '15px 2px' }}>
            <StyledCard src={pet.imageUrl} />
            <Card.Body>
              <Card.Title>{pet.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button onClick={() => history.push(`${match.url}/${pet.id}`)}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardContainer>
    </>
  );
};

export default withRouter(Cards);
