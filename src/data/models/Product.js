const { Schema, model } = require('mongoose');


const Product = new Schema({
    name: {
        type: String,
        require: true

    },
    material: {
        type: String,
        require: true

    },
    color: {
        type: String,
        require: true

    },
    talle: {
        type: String,
        require: true

    },
    price: {
        type: Number,
        require: true

    },
    img: {
        type: String,
        require: true

    }
});

module.exports = model('Product', Product)