import React, { Component } from "react";
import "../css/review-cards.css";

export class ReviewCards extends Component {
  state = {
    reviews: [
      {
        id: 1,
        image: "../images/image-colton.jpg",
        name: "Colton Smith",
        status: "Verified Buyer",
        review:
          "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
      },
      {
        id: 2,
        image: "../images/image-irene.jpg",
        name: "Irene Roberts",
        status: "Verified Buyer",
        review:
          "Customer Service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
      },
      {
        id: 3,
        image: "../images/image-anne.jpg",
        name: "Anne Wallace",
        status: "Verified Buyer",
        review:
          "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
      },
    ],
  };

  render() {
    return (
      <div className="reviews">
        {this.state.reviews.map((review) => (
          <div className="reviews__cards">
            <div className="reviews__cards__user">
              <img src={review.image} alt="" />
              <p>
                {review.name} <br />
                <span>{review.status}</span>
              </p>
            </div>
            <p className="reviews__quote">
              <q> {review.review} </q>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewCards;
