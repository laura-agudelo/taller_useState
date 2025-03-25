import DarkModeToggle from "./components/DarkMode";
import LikeDislike from "./components/LikeDislike";
import ColorGenerator from "./components/ColorGenerator";
import Contador from "./components/Counter";

function App() {
  return (
    <div>
      <h1>React con useState</h1>
      <DarkModeToggle />
      <LikeDislike />
      <ColorGenerator />
      <Contador />
    </div>
  );
}

export default App;
