import { useState } from "react";
const coloresAbsolutos = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#000000", "#FFFFFF", "#808080", "#800000", "#808000", "#800080", "#008080", "#C0C0C0", "#FFA500", "#A52A2A"];
export default function ColorGenerator() {
  const [color, setColor] = useState("#FFFFFF");
  return (
    <button className="p-2 mb-4 border rounded bg-gray-300" onClick={() => {
      const nuevoColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
      setColor(nuevoColor);
      alert(`Color seleccionado: ${nuevoColor}`);
    }}>
      Generar Color
    </button>
  );
}