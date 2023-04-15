// subjects.router.ts
import { NextFunction, Request, Response, Router } from "express";
import Subject from "../model/Subject";

const router: Router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json(subjects);
    } catch (error) {
        next(error)
    }
});

export default router;
