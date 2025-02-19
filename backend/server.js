import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
// import path from "path";

// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middlewares
// not used in production, helps to inform us about the request by users really helpful during the development stage
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname, "./client/build")));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest api
// --------------88888888---------------------
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to ecommerce app ",
  });
});

// app.use("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// PORT
// PORTY is in .env it is imported
const PORT = process.env.PORTY;

// run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
