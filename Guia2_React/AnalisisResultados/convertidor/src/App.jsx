import { useState } from "react";

function Convertidor() {
  const [temperatura, setTemperatura] = useState("");
  const [tipo, setTipo] = useState("CtoF");
  const [resultado, setResultado] = useState("");

  const convertir = () => {
    let res;

    if (tipo === "CtoF") {
      res = (temperatura * 9) / 5 + 32;
    } else {
      res = ((temperatura - 32) * 5) / 9;
    }

    setResultado(res.toFixed(2));
  };

  return (
    <div className="contenedor">
      <div className="card">
        <h2>Convertidor de Temperatura</h2>

        <input
          type="number"
          placeholder="Ingrese la temperatura"
          value={temperatura}
          onChange={(e) => setTemperatura(e.target.value)}
        />

        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="CtoF">Celsius → Fahrenheit</option>
          <option value="FtoC">Fahrenheit → Celsius</option>
        </select>

        <button onClick={convertir}>Convertir</button>

        {resultado !== "" && (
          <p className="resultado">Resultado: {resultado}</p>
        )}
      </div>
    </div>
  );
}

export default Convertidor;
