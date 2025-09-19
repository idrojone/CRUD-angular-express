const mongoose = require('mongoose');

const concierto_shcema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    place: String,
    slug: String
});

mongoose.model('Concierto', concierto_shcema);