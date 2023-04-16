"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// topic.model.ts
const mongoose_1 = require("mongoose");
const topicSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    videoUrl: { type: String },
    description: { type: String },
    subject: { type: mongoose_1.Schema.Types.ObjectId, ref: "Subject", required: true },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Topic", topicSchema);
//# sourceMappingURL=Topic.js.map