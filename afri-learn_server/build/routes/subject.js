"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// subjects.router.ts
const express_1 = require("express");
const subjectControllers_1 = require("../controllers/subjectControllers");
const router = (0, express_1.Router)();
router.get("/", subjectControllers_1.getSubjets);
router.post("/", subjectControllers_1.addSubject);
router.delete("/:id", subjectControllers_1.deleteSubject);
exports.default = router;
//# sourceMappingURL=subject.js.map