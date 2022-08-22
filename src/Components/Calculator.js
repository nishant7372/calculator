import { useState } from "react";
import "./Calculator.css";
import NumberGrid from "./NumberGrid";
import Output from "./Output";

export default function Calculator() {
  const [input, setInput] = useState("0");

  const evaluate = (character) => {
    try {
      const res = eval(character);
      const rStr = String(res);
      if (rStr.indexOf(".") >= 0) {
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

  const parse = (character) => {
    if (character == "x") {
      return "*";
    } else {
      return character;
    }
  };

  const selectNum = (character) => {
    character = parse(character); // Parsing the character
    // Handling Errors
    if (input == "Error!" || input == "undefined" || input == "Infinity") {
      setInput("0");
    }
    // String Evaluation when "=" is pressed
    else if (character == "=") {
      setInput((prevcharacter) => String(evaluate(prevcharacter)));
    }
    // BackSpace Handling
    else if (character == "ce") {
      if (input.length <= 1) setInput("0");
      else
        setInput((prevcharacter) =>
          String(prevcharacter).substring(0, prevcharacter.length - 1)
        );
    }
    //else case
    else {
      // Sign Handling when zero comes before a sign
      if (
        input == "0" &&
        character.charCodeAt(0) < 58 &&
        character.charCodeAt(0) > 48
      ) {
        setInput(character);
      }
      //Mutiple Sign Handling --> last pressed sign replaces the previous(if there is any)
      else if (
        (character == "+" ||
          character == "-" ||
          character == "/" ||
          character == "*") &&
        (input.charCodeAt(input.length - 1) > 57 ||
          input.charCodeAt(input.length - 1) < 48)
      ) {
        setInput(
          (prevcharacter) =>
            prevcharacter.substring(0, prevcharacter.length - 1) + character
        );
      }
      //Setting Input to Output Field
      else {
        setInput((prevcharacter) => prevcharacter + character);
      }
    }
  };

  return (
    <div className="container">
      <div className="head">
        <div className="on-off-btn"></div>
        <div className="name">CALCI 7372</div>
      </div>
      <div className="output">
        <Output input={input} />
      </div>
      <div className="numberPad">
        <NumberGrid selectNum={selectNum} />
      </div>
    </div>
  );
}
