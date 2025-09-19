const mongoose = require('mongoose');

const concierto_shcema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    place: String,
    slug: { type: String, lowercase: true, unique: true },
});

concierto_shcema.pre('save', function (next) {
    console.log('cundo mierdas entras aqui');
    if (!this.slug) {
        this.slugify();
    }   
    next();
});

concierto_shcema.methods.slugify = function () {
    this.slug = slug(this.name) + '-' + Math.random().toString(36).substring(2, 15);
}
mongoose.model('Concierto', concierto_shcema);