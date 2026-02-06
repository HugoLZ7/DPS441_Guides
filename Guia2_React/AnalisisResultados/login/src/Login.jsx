import { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const iniciarSesion = () => {
    if (usuario === "admin" && password === "1234") {
      setMensaje("¡Bienvenido!");
    } else {
      setMensaje("Credenciales incorrectas");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={iniciarSesion}>Iniciar sesión</button>

      {mensaje && <p className="resultado">{mensaje}</p>}
    </div>
  );
}

export default Login;
