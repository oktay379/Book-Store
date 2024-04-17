import express from "express";
import { Book } from "../models/Book.js";
import { verifyAdmin } from "./auth.js";
const router = express.Router();


router.post("/add", verifyAdmin, async (req, res) => {
    try {
        const {name, author, imageUrl} = req.body;
        const newBook = new Book({
            name: name,
            author: author,
            imageUrl: imageUrl
        })
        await newBook.save();
        return res.json({added: true});
    } catch(err) {
        return res.json({message: "Book adding Error"});
    }
})


router.get("/books", async (req, res) => {
    try {
        const books = await Book.find();
        return res.json(books);
    } catch (error) {
        return res.json(error);
    }
})


router.get("/book/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById({_id: id});
        return res.json(book);
    } catch (error) {
        return res.json(error);
    }
})


router.put("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndUpdate({_id: id}, req.body);
        return res.json({updated: true, book});
    } catch (error) {
        return res.json(error);
    }
})


router.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndDelete({_id: id});
        return res.json({deleted: true, book});
    } catch (error) {
        return res.json(error);
    }
})



export {router as BookRouter}