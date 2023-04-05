import express, { Router, Request, Resoponse } from 'express'
// import {controller} from  '../controllers/controllers'

class Route {
    private router: Router;
    // private conttrolller: controller;

    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get('/get-users', this.getAllUsers.bind(this));
      }
    
    public async getAllUsers(req: Request, res: Response): Promise<void> {
        const users = "sivaram"
        res
    }

    public getRouter(): Router {
    return this.router;
    }
}

export default Route;