const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

// Login
router.post("/login", async (req, res) => {
  const { correo, clave } = req.body;

  try {
    const user = await Usuario.findOne({ correo, clave });
    if (!user) {
      return res.status(401).json({ msg: "Credenciales incorrectas" });
    }
    res.json({ msg: "✅ Login exitoso", user });
  } catch (err) {
    res.status(500).json({ msg: "Error en el servidor", error: err.message });
  }
});

// Registro opcional
router.post("/register", async (req, res) => {
  const { correo, clave } = req.body;

  try {
    const newUser = new Usuario({ correo, clave });
    await newUser.save();
    res.json({ msg: "Usuario registrado con éxito", newUser });
  } catch (err) {
    res.status(500).json({ msg: "Error en el servidor", error: err.message });
  }
});

module.exports = router;
