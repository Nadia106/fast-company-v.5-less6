import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
  onDelete,
  onBookMark,
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td></td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>{<BookMark onBookMark={onBookMark} status={bookmark} />}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(_id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onBookMark: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  bookmark: PropTypes.bool.isRequired,
};

export default User;
