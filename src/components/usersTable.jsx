import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./table.header";
import TableBody from "./tableBody";
import BookMark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";

const UserTable = ({
  users,
  onSort,
  selectedSort,
  onBookMark,
  onDelete,
  ...rest
}) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: {
      name: "Качества",
      component: (user) => <QualitiesList qualities={user.qualities} />,
    },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Количество встреч" },
    rete: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <BookMark
          onBookMark={() => onBookMark(user._id)}
          status={user.bookmark}
        />
      ),
    },
    delete: {
      component: (user) => (
        <button
          type="button"
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(user._id)}
        >
          delete
        </button>
      ),
    },
  };
  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    >
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
    </Table>
  );
};

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserTable;
