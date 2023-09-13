import React, { createContext } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

export const TableContext = createContext(null);

const Table = () => {
  const tableColumns = [
    { path: "name", name: "Name" },
    { path: "age", name: "Age" },
    { path: "subscription", name: "Subscription" },
    { path: "employment", name: "Employment" },
  ];

  return (
    <TableContext.Provider value={{ tableColumns }}>
      <div className="table-wrapper border rounded-1 p-1 flex-grow-1">
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </div>
    </TableContext.Provider>
  );
};

export default Table;
