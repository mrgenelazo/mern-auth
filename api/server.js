import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/connectDB.js";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
const app = express();
const port = process.env.ENV || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode: statusCode,
  });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
