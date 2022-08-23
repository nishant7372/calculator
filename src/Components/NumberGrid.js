import { useState, useEffect } from "react";
import CalcButton from "./CalcButton";
import "./NumberGrid.css";

export default function NumberGrid({ selectNum }) {
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

  return (
    <div className="number-grid">
      <CalcButton
        num="7"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="8"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="9"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="/"
        clr={`blue-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="4"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="5"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="6"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="x"
        clr={`blue-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="1"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="2"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="3"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="-"
        clr={`blue-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="0"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="ce"
        clr={`orange-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="="
        clr={`blue-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        num="+"
        clr={`blue-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
    </div>
  );
}
