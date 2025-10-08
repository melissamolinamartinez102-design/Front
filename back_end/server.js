const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/bdsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Conectado a MongoDB"))
.catch(err => console.error("❌ Error al conectar a MongoDB:", err));

// Rutas
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Iniciar servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(Servidor corriendo en http://localhost:${PORT});
});
