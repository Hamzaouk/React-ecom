const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { createProduct, getAllProducts, deleteProduct, updateProduct } = require("./controllers/ProductsController");
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/product", createProduct);
app.get("/api/getproduct", getAllProducts);
app.delete("/api/delproduct/:id", deleteProduct)
app.put("/api/updproduct/:id", updateProduct);

mongoose.connect("mongodb://127.0.0.1:27017/Products", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })  
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));
    
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
