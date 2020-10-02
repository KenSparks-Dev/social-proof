import React from "react";
import PropTypes from "prop-types";

const Reviews = ({ reviews: { image, name, status, text } }) => {
  return (
    <div className="reviews__cards">
      <div className="reviews__cards__user">
        <img src={image} alt="user" />
        <p>
          {name} <br />
          <span>{status}</span>
        </p>
      </div>
      <p className="reviews__quote">
        <q>{text}</q>
      </p>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.object.isRequired,
};

export default Reviews;
