// subjects.router.ts
import { Router } from "express";
import { addSubject, deleteSubject, getSubjets } from "../controllers/subjectControllers";

const router: Router = Router();

router.get("/", getSubjets);
router.post("/", addSubject);
router.delete("/:id", deleteSubject);

export default router;
