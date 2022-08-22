import "./Output.css";

export default function Output({ input }) {
  const parse = (input) => {
    if (input.length > 40)
      return "..." + input.substring(input.length - 40, input.length);
    else return input;
  };
  return (
    <div className="output-field">
      <div className="light"></div>
      <div className="inner-field">
        <p className="wrap">{parse(input)}</p>
      </div>
    </div>
  );
}
