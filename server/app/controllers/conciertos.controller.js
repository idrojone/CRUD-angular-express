const mongoose = require('mongoose');
const Concierto = mongoose.model('Concierto');



async function getall_conciertos(req, res) {
    try {
        const conciertos = await Concierto.find();
        res.json(conciertos);
    } catch (error) {
        res.status(500).json("Ha ocurrido un error", res.statusCode);
    }
}

async function getone_concierto(req, res) {
    try {
        const id = req.params.id;
        const concierto = await Concierto.findById(id);
        if (!concierto) {
            res.status(404).json("Concierto no encontrado", res.statusCode);
        } else {
            res.json(concierto);
        }
    } catch (error) {
        if (error.kind === 'ObjectId') { 
            res.status(404).json("Concierto no encontrado", res.statusCode); 
        } else {
            res.status(500).json("Ha ocurrido un error", res.statusCode);
        }

    }
}

async function create_concierto(req, res) {
    try {
        const concierto_data = {
            name: req.body.name,
            description: req.body.description ,
            price: req.body.price,
            place: req.body.price
        }
        const concierto = new Concierto(concierto_data);
        const new_concierto = await concierto.save();
        res.json(new_concierto)
    } catch (error) {
        res.status(500).json("Ha ocurrido un error", res.statusCode);
    }
}

async function delete_concierto(req, res) {
    try {
        const id = req.params.id;
        const concierto = await Concierto.findByIdAndDelete(id);
        if (concierto) {
            res.json(concierto);
        }
    } catch (error) {
        if (error.kind === 'ObjectId') { 
            res.status(404).json("Product not found", res.statusCode); 
        }
        else { 
            res.status(500).json("An error has ocurred", res.statusCode); 
        }
    }
}

async function update_concierto(req, res) {
    try {
        const id = req.params.id;
        const old_concierto = await Concierto.findById(id);

        if (!old_concierto) {
            return res.status(404).json("Concierto no encontrado");
        }

        old_concierto.name = req.body.name || old_concierto.name;
        old_concierto.description = req.body.description || old_concierto.description;
        old_concierto.price = req.body.price || old_concierto.price;
        old_concierto.place = req.body.place || old_concierto.place;
        const updated_concierto = await old_concierto.save();

        res.json({ msg: "Concierto actualizado", concierto: updated_concierto });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            res.status(404).json("Concierto no encontrado");
        } else {
            res.status(500).json("Ha ocurrido un error");
        }
    }
}

const concierto_controller = {
    getall_conciertos: getall_conciertos,
    getone_concierto: getone_concierto,
    create_concierto: create_concierto,
    delete_concierto: delete_concierto,
    update_concierto: update_concierto,
}

module.exports = concierto_controller;