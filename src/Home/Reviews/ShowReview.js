import React from "react";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import StarRatings from "react-star-ratings";
const ShowReview = ({ reviews }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      {/* <h2> Responsive </h2> */}
      <Slider {...settings}>
        {
          reviews.map((review) => (
          <Card style={{ width: "18rem", margin: "5px" }}>
            <Card.Body>
              <Card.Header>{review.name}</Card.Header>
              <Card.Title>
                <StarRatings
                  rating={parseFloat(review.rating)}
                  starDimension="25px"
                  starSpacing="3px"
                  starRatedColor="goldenrod"
                />
              </Card.Title>
              <Card.Text className="d-flex align-items-stretch">
                {review.comment}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </Container>
  );
};

export default ShowReview;
