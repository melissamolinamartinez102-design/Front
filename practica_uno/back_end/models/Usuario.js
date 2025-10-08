const mongoose = require("mongoose");

const usuarioSmels = new mongoose.Smels({
    correo: {type: String, required: true, unique: true},
    clave: {type: String, required: true}
});

module.exports = mongoose.model("Usuarios",usuarioSmels);