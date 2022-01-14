import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ path: item, order: "asc" });
    }
  };

  const selectedArrow = (currentSortPath, itemName) => {
    if (currentSortPath === itemName) {
      return (
        <i
          className={`bi bi-caret${
            selectedSort.order === "asc" ? "-up-fill" : "-down-fill"
          }`}
        ></i>
      );
    }
  };

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{ role: columns[column].path && "button" }}
            scope="col"
          >
            {columns[column].name}
            {selectedArrow(selectedSort.path, columns[column].path)}
          </th>
        ))}
        {/* <th onClick={() => onSort("name")} scope="col">
          Имя
        </th>
        <th scope="col">Качества</th>
        <th onClick={() => handleSort("profession.name")} scope="col">
          Профессия
        </th>
        <th onClick={() => onSort("completedMeetings")} scope="col">
          Количество встреч
        </th>
        <th onClick={() => onSort("rate")} scope="col">
          Оценка
        </th>
        <th onClick={() => onSort("bookmark")} scope="col">
          Избранное
        </th>
        <th scope="col"></th> */}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
};
export default TableHeader;
