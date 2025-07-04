import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login";

test("renderiza el botón de login", () => {
  render(<Login />);
  const button = screen.getByText(/Iniciar sesión/i);
  expect(button).toBeInTheDocument();
});