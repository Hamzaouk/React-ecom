const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: {type: Number, required: true},
        img: {type: String, required: false}
    }
);

module.exports = mongoose.model("Products", productSchema);