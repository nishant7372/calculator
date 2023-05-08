import "./App.css";
import Calculator from "./Components/Calculator";

function App() {
  return (
    <div className="App">
      <div className={"github"}>
        <a
          className="fa-brands fa-github"
          href="https://github.com/nishant7372/calculator"
        >
          {""}
        </a>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
