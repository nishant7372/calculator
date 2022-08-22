import CalcButton from "./CalcButton";
import "./NumberGrid.css";

export default function NumberGrid({ selectNum }) {
  return (
    <div className="number-grid">
      <CalcButton num="7" clr="black-btn" selectNum={selectNum} />
      <CalcButton num="8" clr="black-btn" selectNum={selectNum} />
      <CalcButton num="9" clr="black-btn" selectNum={selectNum} />
      <CalcButton num="/" clr="blue-btn" selectNum={selectNum} />
      <CalcButton num="4" clr="black-btn" selectNum={selectNum} />
      <CalcButton num="5" clr="black-btn" selectNum={selectNum} />
      <CalcButton num="6" clr="black-btn" selectNum={selectNum} />
      <CalcButton num="x" clr="blue-btn" selectNum={selectNum} />
      <CalcButton num="1" clr="black-btn" selectNum={selectNum} />
      <CalcButton num="2" clr="black-btn" selectNum={selectNum} />
      <CalcButton num="3" clr="black-btn" selectNum={selectNum} />
      <CalcButton num="-" clr="blue-btn" selectNum={selectNum} />
      <CalcButton num="0" clr="black-btn" selectNum={selectNum} />
      <CalcButton num="ce" clr="orange-btn" selectNum={selectNum} />
      <CalcButton num="=" clr="blue-btn" selectNum={selectNum} />
      <CalcButton num="+" clr="blue-btn" selectNum={selectNum} />
    </div>
  );
}
