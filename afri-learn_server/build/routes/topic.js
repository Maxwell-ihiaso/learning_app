"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// topics.router.ts
const express_1 = require("express");
const topicControllers_1 = require("../controllers/topicControllers");
const router = (0, express_1.Router)();
router.get("/:subjectId", topicControllers_1.getTopics);
router.get("/topic/:topicId", topicControllers_1.getTopic);
router.post("/:subjectId", topicControllers_1.addTopic);
router.delete("/:topicId", topicControllers_1.deleteTopic);
exports.default = router;
//# sourceMappingURL=topic.js.map