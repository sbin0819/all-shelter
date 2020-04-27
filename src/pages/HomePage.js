import React from 'react';
// import styled from 'styled-components';

import Summary from '../components/Randing/Summary';
import AboutUs from '../components/Randing/AboutUs';
import Adoption from '../components/Randing/Adoption';
import Animals from '../components/Randing/Animals';

// const Container = styled.div`
//   overflow: hidden;
// `;

const HomePage = () => {
  return (
    <>
      <Summary />
      <AboutUs />
      <Adoption />
      <Animals />
    </>
  );
};

export default HomePage;
