import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
  let phrase = "";
  let classes = "badge bg-secondary fs-3 text-center";

  if (length === 0) {
    phrase = "Никто с тобой не тусанёт";
    classes = "badge bg-danger  fs-3 text-center";
  } else if (length === 2 || length === 3 || length === 4) {
    phrase = "  человека тусанут с тобой сегодня";
  } else if (length === 1) {
    phrase = "  человек тусанёт с тобой сегодня";
  } else {
    phrase = "  человек тусанут с тобой сегодня";
  }
  //    <h1 className={classes}>{length}{phrase}</h1>;
  if (length === 0) {
    return <h1 className={classes}>{phrase}</h1>;
  } else {
    return (
      <h1 className={classes}>
        {length}
        {phrase}
      </h1>
    );
  }
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
};

export default SearchStatus;
