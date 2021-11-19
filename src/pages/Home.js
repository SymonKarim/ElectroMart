import React from 'react'
import FeatureProduct from '../Home/AllProducts/FeatureProduct';
import useAuth from '../Hooks/useAuth';
import Footer from '../shared/Footer/Footer';
import MySpinner from '../shared/MySpinner/MySpinner';
import Banner from './../Home/Banner/Banner'
import Review from './Review';


const Home = () => {
  const { isLoading } = useAuth();
  if (isLoading) {
    <MySpinner></MySpinner>
  }
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
