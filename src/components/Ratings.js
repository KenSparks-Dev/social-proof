import React, { Component } from "react";
import "../css/ratings.css";

export class Ratings extends Component {
  state = {
    ratings: [
      {
        id: 1,
        stars: "../images/icon-star.svg",
        text: "Rated 5 Stars in Reviews",
      },
      {
        id: 2,
        stars: "../images/icon-star.svg",
        text: "Rated 5 Stars in Report Guru",
      },
      {
        id: 3,
        stars: "../images/icon-star.svg",
        text: "Rated 5 Stars in BestTech",
      },
    ],
  };
  render() {
    return (
      <div className="ratings">
        {this.state.ratings.map((rating) => (
          <div className="ratings__entry">
            <div className="ratings__entry__stars">
              <img src={rating.stars} alt="stars" />
              <img src={rating.stars} alt="stars" />
              <img src={rating.stars} alt="stars" />
              <img src={rating.stars} alt="stars" />
              <img src={rating.stars} alt="stars" />
            </div>
            <p>{rating.text} </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Ratings;
