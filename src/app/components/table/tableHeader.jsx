import React, { useContext } from "react";
import { TableContext } from "./table";
import { AppContext } from "../../App";

const TableHeader = () => {
  const { tableColumns } = useContext(TableContext);
  const { sortingBy, setSortingBy } = useContext(AppContext);

  const handleSort = (item) => {
    if (sortingBy.path === item) {
      setSortingBy({
        ...sortingBy,
        order: sortingBy.order === "asc" ? "desc" : "asc",
      });
    } else {
      setSortingBy({ path: item, order: "asc" });
    }
  };

  const rendeSortArrow = (selectedSort, currentPath) => {
    if (selectedSort.path === currentPath) {
      if (selectedSort.order === "asc") {
        return <i className="bi bi-caret-up-fill"></i>;
      } else {
        return <i className="bi bi-caret-down-fill"></i>;
      }
    }
    return null;
  };

  return (
    <thead className="position-sticky top-0">
      <tr>
        {tableColumns.map((column) => (
          <th
            key={column.path}
            className="bg-secondary"
            onClick={() => handleSort(column.path)}
          >
            {column.name}
            {rendeSortArrow(sortingBy, column.path)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
