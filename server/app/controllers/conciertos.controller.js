const mongoose = require('mongoose');
const Concierto = mongoose.model('Concierto');
const slugify = require('slugify');
const AppError = require('../utils/appError');



async function getall_conciertos(req, res, next) {
    try {
        const conciertos = await Concierto.find();
        res.json(conciertos);
    } catch (error) {
        // res.status(500).json("Ha ocurrido un error", res.statusCode);
        return next(new AppError('Ha ocurrido un error', 500));
    }
}

async function getone_concierto(req, res, next) {
    try {
        const slug = req.params.slug;
        const concierto = await Concierto.findOne({ slug });
        if (!concierto) {
            // res.status(404).json("Concierto no encontrado", res.statusCode);
            return next(new AppError('Concierto no encontrado', 404));
        } else {
            res.json(concierto);
        }
    } catch (error) {
        if (error.kind === 'ObjectId') { 
            // res.status(404).json("Concierto no encontrado", res.statusCode); 
            return next(new AppError('Concierto no encontrado', 404));
        } else {
            // res.status(500).json("Ha ocurrido un error", res.statusCode);
            return next(new AppError('Ha ocurrido un error', 500));
        }

    }
}

async function create_concierto(req, res, next) {
    try {
        const concierto_data = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            place: req.body.place,
            slug: Math.random().toString(36).substring(2, 15) 
        }
        const concierto = new Concierto(concierto_data);
        const new_concierto = await concierto.save();
        res.json(new_concierto)
    } catch (error) {
        // res.status(500).json("Ha ocurrido un error", res.statusCode);
        return next(new AppError('Ha ocurrido un error', 500));
    }
}

async function delete_concierto(req, res, next) {
    try {
        // const id = req.params.id;
        const slug = req.params.slug;
        const concierto = await Concierto.findOne({ slug });
        if (concierto) {
            res.json(concierto);
        }
    } catch (error) {
        if (error.kind === 'ObjectId') { 
            // res.status(404).json("Product not found", res.statusCode); 
            return next(new AppError('Concierto no encontrado', 404));
        }
        else { 
            // res.status(500).json("An error has ocurred", res.statusCode); 
            return next(new AppError('Ha ocurrido un error', 500));
        }
    }
}

async function update_concierto(req, res, next) {
    try {
        const slug = req.params.slug;
        const old_concierto = await Concierto.findOne({ slug });

        if (!old_concierto) {
            return next(new AppError('Concierto no encontrado', 404));
        }

        old_concierto.name = req.body.name || old_concierto.name;
        old_concierto.description = req.body.description || old_concierto.description;
        old_concierto.price = req.body.price || old_concierto.price;
        old_concierto.place = req.body.place || old_concierto.place;
        const updated_concierto = await old_concierto.save();

        res.json({ msg: "Concierto actualizado", concierto: updated_concierto });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            // res.status(404).json("Concierto no encontrado");
            return next(new AppError('Concierto no encontrado', 404));
        } else {
            return next(new AppError('Ha ocurrido un error', 500));
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