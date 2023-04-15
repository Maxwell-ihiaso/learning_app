// topics.router.ts
import { NextFunction, Request, Response, Router } from "express";
import Topic from "../model/Topic";

const router: Router = Router();

router.get(
  "/:subjectId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const topics = await Topic.find({ subject: req.params.subjectId });
      res.status(200).json(topics);
    } catch (error) {
        next(error)
    }
  }
);

router.get(
  "/:topicId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const topic = await Topic.findById(req.params.topicId).populate(
        "subject"
      );
      res.status(200).json(topic);
    } catch (error) {
        next(error)
    }
  }
);

export default router;
