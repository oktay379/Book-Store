import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./db.js";
import { AdminRouter } from "./routes/auth.js"
import { StudentRouter } from "./routes/student.js";
import { BookRouter } from "./routes/book.js";
import { Book } from "./models/Book.js";
import { Admin } from "./models/Admin.js";
import { Student } from "./models/Student.js";


// express libs.
const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true 
}));
app.use(cookieParser());

// for env
dotenv.config();

// routes
app.use("/auth", AdminRouter);
app.use("/student", StudentRouter);
app.use("/book", BookRouter);


app.get("/dashboard", async (req, res) => {
    try {
        const student = await Student.countDocuments();
        const admin = await Admin.countDocuments();
        const book = await Book.countDocuments();
        return res.json({ok: true, student, admin, book});
    } catch (error) {
        return res.json(error);
    }
});


// server
app.listen(process.env.PORT, () => {
    console.log("Server is Running");
})