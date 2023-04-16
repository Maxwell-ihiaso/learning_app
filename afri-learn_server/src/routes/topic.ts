// topics.router.ts
import { Router } from "express";
import {
  addTopic,
  deleteTopic,
  getTopic,
  getTopics,
} from "../controllers/topicControllers";

const router: Router = Router();

router.get("/:subjectId", getTopics);
router.get("/topic/:topicId", getTopic);

router.post("/:subjectId", addTopic);
router.delete("/:topicId", deleteTopic);

export default router;
