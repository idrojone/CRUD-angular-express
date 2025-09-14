const { mongoose } = require(".");

module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            titulo: String,
            description: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ... object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Conciertos = mongoose.model("Concierto", schema);
    return Conciertos;
}