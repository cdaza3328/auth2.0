import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

const Home = () => <h1>Ruta Protegida</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;