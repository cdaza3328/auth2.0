import React from "react";

function Login() {
  const handleLogin = () => {
    window.location.href = "http://localhost:8000/auth/google";
  };

  return (
    <div>
      <h2>Login con Google</h2>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

export default Login;