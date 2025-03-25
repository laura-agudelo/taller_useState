import { useState, useEffect } from "react";
export default function TimerCounter() {
  const [contador, setContador] = useState(0);
  const [activo, setActivo] = useState(false);
  useEffect(() => {
    let intervalo;
    if (activo) {
      intervalo = setInterval(() => {
        setContador((prev) => prev + 1);
      }, 1000);
    } else {
      setContador(0);
    }
    return () => clearInterval(intervalo);
  }, [activo]);
  return (
    <div className="mb-4 text-xl font-bold">
      Tiempo: {contador}s
      <button className="p-2 m-2 border rounded bg-blue-500" onClick={() => setActivo(true)}>Iniciar</button>
      <button className="p-2 m-2 border rounded bg-red-500" onClick={() => setActivo(false)}>Parar</button>
    </div>
  );
}