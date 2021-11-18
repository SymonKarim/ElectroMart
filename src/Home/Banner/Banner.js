import React from 'react'
import './Banner.css'
import Button from './../../shared/Button/Button'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="mainBanner">
      <div className="bannerBlackOverlay">
        <h2 className="bannerTitle text-center">BEST QUALITY PRODUCTS</h2>
        <p className="my-3">
          <Link to="/products">
            <Button btnClass="btn-warning bannerBtn" name="Explore All" />
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Banner
