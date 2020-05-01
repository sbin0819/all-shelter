import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const AnimalDetail = ({ match }) => {
  return (
    <div>
      <div style={{ height: '200px', backgroundColor: 'pink' }}>하이</div>
      <div>{match.params.animalId}</div>
    </div>
  );
};

export default withRouter(AnimalDetail);
