import book from "../model/book.model";
import book from "../model/book.model";

export const getBook=async(req,res)=>{
    try {
        const book =await book.find()
        res.status(200).json(book)
    } catch (error) {
        console.log("error: ",error)
        res.status(500).json(error)
    }
}