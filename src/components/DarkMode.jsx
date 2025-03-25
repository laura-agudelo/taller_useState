import { useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{
      backgroundColor: darkMode ? "black" : "white",
      color: darkMode ? "white" : "black",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </div>
  );
};

export default DarkMode;
