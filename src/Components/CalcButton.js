import "./CalcButton.css";
import { useEffect, useRef } from "react";

export default function CalcButton({ content, num, clr, selectNum }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === num.toString()) {
        // Check if the pressed key matches the `num` prop
        buttonRef.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [num]); // Include `num` as a dependency to reattach the event listener when `num` changes

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={() => selectNum(num)}
        className={`${clr} CalcButton`}
      >
        {content}
      </button>
    </div>
  );
}
