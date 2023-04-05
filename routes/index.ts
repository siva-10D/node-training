import { Router } from "express";
import routes from "./routes";

const router = Router();

router.use("/users", new routes().getRouter());

export default router;
