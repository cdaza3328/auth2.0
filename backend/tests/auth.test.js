const request = require("supertest");
const app = require("../app");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose"); // ← importar mongoose

describe("Ruta protegida", () => {
  it("debería denegar acceso sin token", async () => {
    const res = await request(app).get("/protected");
    expect(res.statusCode).toBe(401);
  });

  it("debería permitir acceso con token válido", async () => {
    const token = jwt.sign({ id: "fakeid" }, process.env.JWT_SECRET);
    const res = await request(app)
      .get("/protected")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });

  afterAll(async () => {
    // Cierra la conexión a MongoDB para evitar warnings de Jest
    await mongoose.connection.close();
  });
});
