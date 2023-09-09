import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/connectDB.js";
import userRoute from "./routes/userRoute.js";
const app = express();
const port = process.env.ENV || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);

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
