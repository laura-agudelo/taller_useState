import { useState, useEffect } from "react";

const Counter = () => {
  const [contador, setContador] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let interval = null;
    if (activo) {
      interval = setInterval(() => {
        setContador(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [activo]);

  return (
    <div>
      <h1>Tiempo: {contador} s</h1>
      <button onClick={() => setActivo(true)}>Iniciar</button>
      <button onClick={() => { setActivo(false); setContador(0); }}>Parar</button>
    </div>
  );
};

export default Counter;
