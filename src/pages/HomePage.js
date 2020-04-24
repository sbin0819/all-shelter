import React from 'react';
// import styled from 'styled-components';

import AboutUs from '../components/AboutUs';
import Adoption from '../components/Adoption';
import Animals from '../components/Animals';

// const Container = styled.div`
//   overflow: hidden;
// `;

const HomePage = () => {
  return (
    <>
      <AboutUs />
      <Adoption />
      <Animals />
    </>
  );
};

export default HomePage;
