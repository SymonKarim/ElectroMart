import React, { useEffect, useState } from 'react'
import ShowReview from '../Home/Reviews/ShowReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
 const getAllReviews = async () => {
   await fetch(`https://obscure-harbor-46101.herokuapp.com/getreviews`)
     .then((res) => res.json())
     .then((data) => {
       setReviews(data);
     });
 
 };
 useEffect(() => getAllReviews(), []);
    return (
      <div className="text-center  mt-5">
        <h1 className="text-danger mb-3">Review</h1>
        <ShowReview reviews={reviews} />
      </div>
    );
}

export default Review
