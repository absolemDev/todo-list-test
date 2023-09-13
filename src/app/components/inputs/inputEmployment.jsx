import React, { useContext } from "react";
import { FormContext } from "../form";

const InputEmployment = () => {
  const { formData, handleChange } = useContext(FormContext);

  return (
    <div className="mt-2">
      <input
        name="employment"
        className="form-check-input mx-2"
        type="checkbox"
        id="employmentInput"
        value=""
        onChange={handleChange}
        checked={formData.employment}
      />
      <label htmlFor="employmentInput">Employed</label>
    </div>
  );
};

export default InputEmployment;
