"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// subject.model.ts
const mongoose_1 = require("mongoose");
const subjectSchema = new mongoose_1.Schema({
    title: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "title is required"],
    },
}, {
    timestamps: true,
    strict: true
});
exports.default = (0, mongoose_1.model)("Subject", subjectSchema);
//# sourceMappingURL=Subject.js.map