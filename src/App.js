import logo from "./elestio-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>Elestio React Example AMIT</p>
        <a
          className="App-link"
          href="https://elest.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to App{" "}
        </a>
      </header>
    </div>
  );
}

export default App;
