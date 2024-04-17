import { Admin } from "./models/Admin.js";
import bcrypt from "bcrypt";
import "./db.js";


async function AdminAccount() {
    try {
        const adminCount = await Admin.countDocuments();
        if(adminCount === 0) {
            const hashPassword = await bcrypt.hash("admin123", 10);
            const newAdmin = new Admin({
                username: "admin",
                password: hashPassword
            });
            await newAdmin.save();
            console.log("Acc Created");
        }
        else {
            console.log("Acc Already Created");
        }
    } catch (error) {
        console.log(error);
    }
}

AdminAccount();