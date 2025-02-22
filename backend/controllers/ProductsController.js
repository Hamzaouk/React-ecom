const Product = require("../models/ProductsSchema");

exports.createProduct = async (req, res) => {
    try {
        const { title, description, price, quantity } = req.body;
        if (!title || !description || !price || !quantity) {
            return res.status(400).json({ error: "Title, description, price, and quantity are required" });
        }

        const newProduct = new Product({ title, description, price, quantity, img: req.body.img });
        console.log('Attempting to save:', newProduct); 
        await newProduct.save();
        res.status(201).json({ message: "Product created successfully!" });
    } catch (error) {
        console.error('Detailed error:', error); 
        res.status(500).json({ error: error.message }); 
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, price, quantity, img } = req.body;

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        if (!title && !description && !price && !quantity) {
            return res.status(400).json({ error: "At least one field to update is required" });
        }

        const updateData = {};
        if (title) updateData.title = title;
        if (description) updateData.description = description;
        if (price) updateData.price = price;
        if (quantity) updateData.quantity = quantity;
        if (img !== undefined) updateData.img = img;  

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            updateData,
            { new: true }  
        );

        res.status(200).json({
            message: "Product updated successfully",
            product: updatedProduct
        });
    } catch (error) {
        console.error('Update error:', error);
        res.status(500).json({ error: error.message });
    }
};