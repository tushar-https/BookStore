import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";

const app = express();


dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoURI;

// app.get('/', (req, res) => {
//   res.send('MERN StacK!!!')
// })
try {
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("error: ",error);
  
}
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})