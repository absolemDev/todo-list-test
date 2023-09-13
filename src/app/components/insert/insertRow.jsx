import React from "react";
import Form from "../form";
import ThemeToggle from "./themeToggle";

const InsertRow = () => {
  return (
    <div className="insert-row border rounded-1 position-relative mt-2 me-3 p-1">
      <div className="title d-inline-block position-absolute top-0 start-0 bg-body ms-2 translate-middle-y px-1">
        Insert Row
      </div>
      <Form />
      <hr />
      <ThemeToggle />
    </div>
  );
};

export default InsertRow;
