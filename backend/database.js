const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    console.log("🧪 URI en database.js:", uri); // Puedes quitarlo después
    await mongoose.connect(uri);
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error al conectar con MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
