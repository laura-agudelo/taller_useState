import { useState } from "react";
export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <button className="p-2 mb-4 border rounded" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Modo Light" : "Modo Dark"}
    </button>
  );
}