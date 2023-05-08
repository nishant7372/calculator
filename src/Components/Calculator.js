import { useState } from "react";
import "./Calculator.css";
import NumberGrid from "./NumberGrid";
import Output from "./Output";
import { evaluate as evaluateExpression } from "mathjs";

export default function Calculator() {
  const [input, setInput] = useState("0");

  const evaluate = (input) => {
    try {
      while (
        input.endsWith("*") ||
        input.endsWith("+") ||
        input.endsWith("-") ||
        input.endsWith("/")
      ) {
        input = input.substring(0, input.length - 1);
      }

      const isNumeric = /^[0-9+*/.%-]+$/.test(input);
      if (!isNumeric) {
        return "Invalid input!";
      }

      const res = evaluateExpression(input);

      if (typeof res === "number" && res % 1 !== 0) {
        return res.toFixed(3);
      } else {
        return res;
      }
    } catch (e) {
      if (e instanceof SyntaxError) {
        return "Error!";
      }
    }
  };

  const backSpace = () => {
    if (input.length <= 1) setInput("0");
    else setInput((prevInput) => prevInput.slice(0, -1));
  };

  const selectNum = (character) => {
    // Handling Errors
    const isNumeric = /^[0-9+*/.%-]+$/.test(input);
    if (!isNumeric || character === "Delete") {
      setInput("0");
    }
    // String Evaluation when "=" is pressed
    else if (character === "=") {
      setInput((prevInput) => String(evaluate(prevInput)));
    }
    // BackSpace Handling
    else if (character === "Backspace") {
      backSpace();
    }
    // cannot Insert two adjacent dots or two adjacent %
    else if (
      (character === "." || character === "%") &&
      input.slice(-1) === character
    ) {
      return;
    } else {
      // Sign Handling when zero comes after a sign
      if (
        input.length > 1 &&
        ["+0", "-0", "*0", "/0"].includes(input.slice(-2))
      ) {
        setInput((prevInput) => prevInput.slice(0, -1) + character);
      }
      // Sign Handling when zero comes before a sign
      else if (input == "0" && /^\d$/.test(character)) {
        setInput(character);
      }
      //Mutiple Sign Handling --> last pressed sign replaces the previous(if there is any)
      else if (
        ["/", "*"].includes(character) &&
        ["/", "*"].includes(input.slice(-1))
      ) {
        setInput((prevInput) => prevInput.slice(0, -1) + character);
      }
      //Mutiple Sign Handling --> last pressed sign replaces the previous(if there is any)
      else if (
        ["+", "-", "/", "*"].includes(character) &&
        ["+", "-"].includes(input.slice(-1))
      ) {
        if (
          ["/", "*"].includes(input.slice(-2, -1)) &&
          ["/", "*"].includes(character)
        ) {
          setInput((prevInput) => prevInput.slice(0, -2) + character);
        } else {
          setInput((prevInput) => prevInput.slice(0, -1) + character);
        }
      }
      //Setting Input to Output Field
      else {
        setInput((prevInput) => prevInput + character);
      }
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="head">
          <div className="name">CALCI 7372</div>
        </div>
        <div className="output">
          <Output input={input} />
        </div>
        <div className="numberPad">
          <NumberGrid selectNum={selectNum} />
        </div>
      </div>
    </div>
  );
}
