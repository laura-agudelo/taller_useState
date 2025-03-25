import { useState } from "react";

const coloresAbsolutos = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
  "#000000", "#FFFFFF", "#808080", "#800000", "#808000", "#800080",
  "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
];

const ColorGenerator = () => {
  const [color, setColor] = useState("#FFFFFF");

  return (
    <div style={{ backgroundColor: color, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button onClick={() => setColor(coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)])}>
        Generar Color
      </button>
      <p>Color elegido: {color}</p>
    </div>
  );
};

export default ColorGenerator;
