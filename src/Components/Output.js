import { useState } from "react";
import "./Output.css";

export default function Output({ input, changeTheme }) {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    if (theme == "light") {
      setTheme("dark");
      changeTheme("dark");
    } else if (theme == "dark") {
      setTheme("light");
      changeTheme("light");
    }
  };

  const parse = (input) => {
    if (input.length > 40)
      return "..." + input.substring(input.length - 40, input.length);
    else return input;
  };
  return (
    <div className="output-field">
      <div className={`indicator-${theme}`} onClick={handleThemeChange}></div>
      <div className="inner-field">
        <p className="wrap">{parse(input)}</p>
      </div>
    </div>
  );
}
