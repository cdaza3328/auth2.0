const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();
require("./auth/passport");
const connectDB = require("./database");

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

app.use("/auth", require("./routes/auth"));

app.get("/protected", require("./middleware/auth"), (req, res) => {
  res.json({ message: "Ruta protegida accedida correctamente" });
});

// Solo iniciar el servidor si NO estamos en modo test
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`✅ Backend corriendo en puerto ${PORT}`);
  });
}

module.exports = app;
