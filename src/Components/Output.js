import { useEffect, useState } from "react";
import "./Output.css";
export default function Output({ input }) {
  const colors = ["skyblue", "pink", "green", "red", "yellow"];
  const [index, SetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      SetIndex((prevIndex) => {
        return prevIndex == colors.length - 1 ? 0 : prevIndex + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const parse = (input) => {
    if (input.length > 40)
      return "..." + input.substring(input.length - 40, input.length);
    else return input;
  };

  return (
    <div className="output-field">
      <div className={`indicator ind-${colors[index]}`}></div>
      <div className="inner-field">
        <p className="wrap">{parse(input)}</p>
      </div>
    </div>
  );
}
