import React, { useContext } from "react";
import { AppContext } from "../../App";

const ThemeToggle = () => {
  const { theme, handleToggleTheme } = useContext(AppContext);

  return (
    <div className="form-check form-switch mb-2">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="themeToggle"
        checked={theme === "light"}
        onChange={handleToggleTheme}
      />
      <label className="form-check-label" htmlFor="themeToggle">
        Mode
      </label>
    </div>
  );
};

export default ThemeToggle;
