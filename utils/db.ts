import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();

class DbConnect {
    private dbUrl: string

    constructor(){
        this.dbUrl = process.env.MONGODB_URL || "";
    }

    public connectDB(): void {
        mongoose.connect(this.dbUrl).then(() => console.log("MongoDB connected")).catch((err) => console.error(err))
    }
}

export const dbConnect = new DbConnect();