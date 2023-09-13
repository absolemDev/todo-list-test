import React, { useContext } from "react";
import { FormContext } from "../form";

const InputSubscription = () => {
  const { formData, handleChange } = useContext(FormContext);

  const subscriptionOptions = [
    { label: "Subscribed", value: "subscribed" },
    { label: "Not Subscribed", value: "notSubscribed" },
    { label: "Other", value: "other" },
  ];

  return (
    <select
      name="subscription"
      className="form-control form-select mt-2"
      value={formData.subscription}
      onChange={handleChange}
    >
      {subscriptionOptions.length > 0 &&
        subscriptionOptions.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
};

export default InputSubscription;
