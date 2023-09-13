import React, { useContext } from "react";
import { TableContext } from "./table";
import { AppContext } from "../../App";

const TableBody = () => {
  const { selectedItem, setSelectedItem, getSortedData } =
    useContext(AppContext);
  const { tableColumns } = useContext(TableContext);

  const subscriptionOptions = {
    subscribed: "Subscribed",
    notSubscribed: "Not Subscribed",
    other: "Other",
  };

  const renderContent = (path, value) => {
    if (path === "subscription") return subscriptionOptions[value];
    if (path === "employment") return value ? "Employed" : "Unemployed";
    return value;
  };

  const handleClick = (id) => {
    setSelectedItem(id);
  };

  return (
    <tbody>
      {getSortedData().map((item) => (
        <tr
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={`${item.id === selectedItem ? "active" : ""}`}
        >
          {tableColumns.map(({ path }) => (
            <td key={path} className="px-1">
              {renderContent(path, item[path])}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
