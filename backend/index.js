import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 4000;
// const URI = process.env.MongoURI;



mongoose.connect("mongodb://0.0.0.0:27017/bookstore", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});


app.use("/book",bookRoute)


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});