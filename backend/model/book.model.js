import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
       id:Number,      
       name:String,
       title:String,
       price:Float64Array,    
    category:String,
       image:String
    } 
)
const book  = mongoose.model("Book",bookSchema);

export default book;