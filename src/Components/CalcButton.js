import "./CalcButton.css";

export default function CalcButton({ num, clr, selectNum }) {
  return (
    <div>
      <button onClick={() => selectNum(num)} className={`${clr} CalcButton`}>
        {num}
      </button>
    </div>
  );
}
