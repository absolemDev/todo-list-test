import React, { useContext } from "react";
import { FormContext } from "../form";

const InputName = () => {
  const { formData, handleChange } = useContext(FormContext);

  return (
    <input
      name="name"
      className="form-control mt-2"
      value={formData.name}
      onChange={handleChange}
      placeholder="Name"
      type="text"
    />
  );
};

export default InputName;
