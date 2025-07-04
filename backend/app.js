const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();
require("./auth/passport"); // asegúrate de que exista este archivo
const connectDB = require("./database"); // asegúrate de que exista este archivo

// Conexión a MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
  secret: "sessionsecret",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Rutas de autenticación
app.use("/auth", require("./routes/auth"));

// Ruta protegida
app.get("/protected", require("./middleware/auth"), (req, res) => {
  res.json({ message: "Ruta protegida accedida correctamente" });
});

// Iniciar servidor
app.listen(8000, () => {
  console.log("✅ Backend corriendo en puerto 8000");
});

module.exports = app;
