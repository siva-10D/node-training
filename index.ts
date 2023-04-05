import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/routes";
import { dbConnect } from "./utils/db";

dotenv.config();
 class App {
    public app: express.Application;
    constructor() {
       this.app=express();
       this.config();
       this.routes();
       this.connectToDatabase();
    }

    private config(): void {
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cors());
      }
    

  private routes(): void {
    this.app.use(routes);
  }

  private connectToDatabase(): void {
    dbConnect.connectDB();

    const port = process.env.PORT_NO || 5000;
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}

// app.get("/test/:id",(req,res)=>{
//     res.send("Hello world" +req.params.id)

// }
// )

// app.get("/testqe",(req,res)=>{
//     res.send("Hello world" +req.query.resend)

// }
// )


// app.listen(9000,()=>{
//     console.log("running on port 9000")
// })