import express from 'express';
import productRoutes from "./routes/products.routes.js";
import categoryRoutes from "./routes/categories.routes.js";

const app = express();

app.use(express.json());
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

app.listen(3333, () => {
    console.log('🚀 Server started on port 3333!');
    }   
);