import React from 'react';
import Banner from '../Banner/Banner';
import How from '../How/How';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import Live from '../Live/Live';
import Merchant from '../Merchant/Merchant';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <How></How>
      <Services></Services>
      <Brands></Brands>
      <Live></Live>
      <Merchant></Merchant>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;