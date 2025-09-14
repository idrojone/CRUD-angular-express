module.exports = app => {
    const conciertos =  require("../controllers/conciertos.controller.js");

    var router = require("express").Router();

    // Crear un nuevo Concirto
    router.post("/", conciertos.create);

    // Leer todos los conciertos
    router.get("/", conciertos.findAll);

    // Leer solo un concierto
    router.get("/:id", conciertos.findOne);

    // Actualizar concierto con ID
    router.put("/:id", conciertos.update);

    // Eliminar concierto con id
    router.delete("/:id", conciertos.delete);

    // // Eliminar todos
    router.delete("/", conciertos.deleteAll);

    app.use("/api/conciertos", router);
}