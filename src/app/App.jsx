import React, { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getData } from "./store/app";
import Table from "./components/table/table";
import InsertRow from "./components/insert/insertRow";
import styles from "./App.module.css";
import { sorting } from "./utils/sorting";
import localStorageService from "./services/localStorage.service";

export const AppContext = createContext(null);

function App() {
  const data = useSelector(getData());
  const [selectedItem, setSelectedItem] = useState(null);
  const [sortingBy, setSortingBy] = useState({ path: "name", order: "asc" });
  const [theme, setTheme] = useState(localStorageService.getTheme() || "dark");

  const getSortedData = () => {
    return sorting(data, sortingBy);
  };

  const handleToggleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorageService.setTheme(theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        selectedItem,
        setSelectedItem,
        sortingBy,
        setSortingBy,
        getSortedData,
        theme,
        handleToggleTheme,
      }}
    >
      <div className={`${styles.container} d-flex p-2`}>
        <InsertRow />
        <Table />
      </div>
    </AppContext.Provider>
  );
}

export default App;
