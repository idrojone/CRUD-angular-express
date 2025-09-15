const mongoose = require('mongoose');

const concierto_shcema = new mongoose.Schema({
    name: String,
    description: String
});

mongoose.model('Concierto', concierto_shcema);