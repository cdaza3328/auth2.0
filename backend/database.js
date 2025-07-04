const mongoose = require("mongoose");
require("dotenv").config(); //  sin ruta específica

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    console.log("URI en database.js:", uri); // solo para depuración
    await mongoose.connect(uri);
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error al conectar con MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
