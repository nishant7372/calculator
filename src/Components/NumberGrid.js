import { useState, useEffect } from "react";
import CalcButton from "./CalcButton";
import "./NumberGrid.css";

export default function NumberGrid({ selectNum }) {
  const colors = ["skyblue", "pink", "green", "red", "yellow"];
  const [index, SetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      SetIndex((prevIndex) => {
        return prevIndex === colors.length - 1 ? 0 : prevIndex + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        selectNum("=");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="number-grid">
      <CalcButton
        content="AC"
        num="Delete"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-delete-left"></i>}
        num="Backspace"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-percent"></i>}
        num="%"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-divide"></i>}
        num="/"
        clr={`blue-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-7"></i>}
        num="7"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-8"></i>}
        num="8"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-9"></i>}
        num="9"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-xmark"></i>}
        num="*"
        clr={`blue-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-4"></i>}
        num="4"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-5"></i>}
        num="5"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-6"></i>}
        num="6"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-minus"></i>}
        num="-"
        clr={`blue-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-1"></i>}
        num="1"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-2"></i>}
        num="2"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-3"></i>}
        num="3"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-plus"></i>}
        num="+"
        clr={`blue-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={<i className="fa-solid fa-0"></i>}
        num="0"
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
      />
      <CalcButton
        content={"•"}
        num="."
        clr={`black-btn btn-${colors[index]}`}
        selectNum={selectNum}
        btnstyle={{
          fontSize: "2rem",
        }}
      />

      <button
        className={`equalsbutton btn-${colors[index]}`}
        onClick={() => selectNum("=")}
      >
        <i className="fa-solid fa-equals"></i>
      </button>
    </div>
  );
}
