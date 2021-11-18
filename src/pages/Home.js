import React from 'react'
import FeatureProduct from '../Home/AllProducts/FeatureProduct';
import Footer from '../shared/Footer/Footer';
import Banner from './../Home/Banner/Banner'
import Review from './Review';


const Home = () => {

  return (
    <>
      <Banner />
      <FeatureProduct />
      <Review />
      <Footer />
    </>
  );
}

export default Home
