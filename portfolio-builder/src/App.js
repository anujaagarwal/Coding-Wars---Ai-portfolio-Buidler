import logo from "./logo.svg";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import Download from "./pages/Download";

function App() {
  return (
    <div className="flex flex-row">
      <Portfolio className="grow-1" />;
      <Download />
    </div>
  );
}

export default App;
