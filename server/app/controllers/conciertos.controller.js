const db = require("../models");
const Concierto = db.conciertos;


//  CREATE 
// {
//     "titulo": "title_1",
//     "description": "description_1"
// }

exports.create = (req, res) => {
    if (!req.body.titulo) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const concierto = new Concierto({
        titulo: req.body.titulo,
        description: req.body.description,
    });

    concierto
        .save(concierto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Concierto."
            });
        });
};

exports.findAll = (req, res) => {
    const titulo = req.query.titulo;
    var condition = titulo ? { titulo: { $regex: new RegExp(titulo), $options: "i" } } : {};

    Concierto.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Conciertos."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Concierto.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Concierto with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Concierto with id=" + id });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Concierto.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Concierto with id=${id}. Maybe Concierto was not found!`
                });
            } else res.send({ message: "Concierto was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Concierto with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Concierto.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Concierto.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Tutorials were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
};