import DarkMode from "./components/DarkMode";
import LikeDislike from "./components/LikeDislike";
import ColorGenerator from "./components/ColorGenerator";
import Counter from "./components/Counter";
export const App = () =>  {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <DarkMode />
      <LikeDislike />
      <ColorGenerator />
      <Counter />
    </div>
  );
}