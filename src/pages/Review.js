import React, { useEffect, useState } from 'react'
import ShowReview from '../Home/Reviews/ShowReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
 const getAllReviews = async () => {
   await fetch(`http://localhost:5000/getreviews`)
     .then((res) => res.json())
     .then((data) => {
         setReviews(data);
     });
 
 };
 useEffect(() => getAllReviews(), []);
    return (
      <div className="text-center">
        <h1 className="text-danger">Review</h1>
        <ShowReview reviews={reviews} />
      </div>
    );
}

export default Review
