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

  const backSpace = (character) => {
    if (input.length <= 1) setInput("0");
    else
      setInput((prevcharacter) =>
        String(prevcharacter).substring(0, prevcharacter.length - 1)
      );
  };

  const selectNum = (character) => {
    character = parse(character); // Parsing the character for Actual Meaning
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
      backSpace(character);
    }
    //else case
    else {
      // Sign Handling when zero comes after a sign
      if (
        input.length > 1 &&
        (input.substring(input.length - 2, input.length) == "+0" ||
          input.substring(input.length - 2, input.length) == "-0" ||
          input.substring(input.length - 2, input.length) == "*0" ||
          input.substring(input.length - 2, input.length) == "/0")
      ) {
        setInput(
          (prevcharacter) =>
            prevcharacter.substring(0, prevcharacter.length - 1) + character
        );
      }
      // Sign Handling when zero comes before a sign
      else if (
        input == "0" &&
        character.charCodeAt(0) < 58 &&
        character.charCodeAt(0) > 47
      ) {
        setInput(character);
      }
      //Mutiple Sign Handling --> last pressed sign replaces the previous(if there is any)
      else if (
        (character == "/" || character == "*") &&
        (input.substring(input.length - 1, input.length) == "/" ||
          input.substring(input.length - 1, input.length) == "*")
      ) {
        setInput(
          (prevcharacter) =>
            prevcharacter.substring(0, prevcharacter.length - 1) + character
        );
      }
      //Mutiple Sign Handling --> last pressed sign replaces the previous(if there is any)
      else if (
        (character == "+" ||
          character == "-" ||
          character == "/" ||
          character == "*") &&
        (input.substring(input.length - 1, input.length) == "+" ||
          input.substring(input.length - 1, input.length) == "-")
      ) {
        if (
          (input.substring(input.length - 2, input.length - 1) == "*" ||
            input.substring(input.length - 2, input.length - 1) == "/") &&
          (character == "/" || character == "*")
        ) {
          setInput(
            (prevcharacter) =>
              prevcharacter.substring(0, prevcharacter.length - 2) + character
          );
        } else {
          setInput(
            (prevcharacter) =>
              prevcharacter.substring(0, prevcharacter.length - 1) + character
          );
        }
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
