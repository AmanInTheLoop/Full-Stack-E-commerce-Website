import React from 'react'
import Hero from './../components/Layout/Hero';
import GenderCollectionSection from '../components/Products/GenderCollectionSection';
import Newarrivals from './../components/Products/Newarrivals';

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <Newarrivals />
    </div>
  );
};

export default Home;
