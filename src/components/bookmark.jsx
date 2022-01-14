import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, onBookMark, userId }) => {
  return (
    <button onClick={() => onBookMark(userId)}>
      <i className={`bi bi-bookmark${status ? "-fill" : ""}`}></i>
    </button>
  );
};
BookMark.propTypes = {
  status: PropTypes.bool.isRequired,
  onBookMark: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default BookMark;
