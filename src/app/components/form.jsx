import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { createItem, deleteItem, editItem, getItemById } from "../store/app";
import InputName from "./inputs/inputName";
import InputAge from "./inputs/inputAge";
import InputSubscription from "./inputs/inputSubscription";
import InputEmployment from "./inputs/inputEmployment";
import { nanoid } from "nanoid";
import { AppContext } from "../App";

export const FormContext = createContext(null);

const Form = () => {
  const { selectedItem, setSelectedItem } = useContext(AppContext);
  const dataSelectedItem = useSelector(getItemById(selectedItem));

  const initialData = {
    id: nanoid(),
    name: "",
    age: "",
    subscription: "subscribed",
    employment: false,
  };

  const [formData, setFormData] = useState(initialData);

  const validate = () => {
    return formData.name.trim() && formData.age ? true : false;
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (selectedItem) {
      dispatch(editItem(formData));
      setSelectedItem(null);
    } else {
      dispatch(createItem(formData));
      setFormData(initialData);
    }
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]:
        e.target.name === "employment" ? !prevData.employment : e.target.value,
    }));
  };

  const handleCancel = () => {
    setSelectedItem(null);
  };

  const handleDelete = () => {
    dispatch(deleteItem(selectedItem));
    setSelectedItem(null);
  };

  useEffect(() => {
    selectedItem ? setFormData(dataSelectedItem) : setFormData(initialData);
  }, [selectedItem]);

  return (
    <FormContext.Provider value={{ formData, handleChange }}>
      <form onSubmit={handleSubmit}>
        <InputName />
        <InputAge />
        <InputSubscription />
        <InputEmployment />
        <button type="submit" className="form-control mt-2 bg-secondary">
          {selectedItem ? "Save" : "Insert"}
        </button>
        {selectedItem && (
          <>
            <button
              onClick={handleCancel}
              className="form-control mt-2 bg-secondary"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="form-control mt-2 bg-secondary"
            >
              Delete
            </button>
          </>
        )}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
