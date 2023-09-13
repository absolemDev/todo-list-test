import React, { useContext } from "react";
import { FormContext } from "../form";

const InputAge = () => {
  const { formData, handleChange } = useContext(FormContext);

  return (
    <input
      name="age"
      className="form-control mt-2"
      value={formData.age}
      onChange={handleChange}
      placeholder="Age"
      type="number"
      min={18}
      max={100}
    />
  );
};

export default InputAge;
