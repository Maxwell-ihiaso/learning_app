"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTopic = exports.addTopic = exports.getTopic = exports.getTopics = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const Topic_1 = __importDefault(require("../model/Topic"));
const getTopics = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { subjectId } = req.params;
        if (!subjectId)
            throw http_errors_1.default.BadRequest("SubjectId is required in params");
        const topics = yield Topic_1.default.find({ subject: subjectId });
        res.status(200).json(topics);
    }
    catch (error) {
        next(error);
    }
});
exports.getTopics = getTopics;
const getTopic = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { topicId } = req.params;
        if (!topicId)
            throw http_errors_1.default.BadRequest("topicId is required in params");
        const topic = yield Topic_1.default.findById({ _id: topicId }).populate("subject");
        res.status(200).json(topic);
    }
    catch (error) {
        next(error);
    }
});
exports.getTopic = getTopic;
const addTopic = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, videoUrl } = req.body;
        const { subjectId } = req.params;
        if (!title || !description || !videoUrl)
            throw http_errors_1.default.BadRequest("Topic requires a title, description, and videoUrl");
        if (!subjectId)
            throw http_errors_1.default.BadRequest("Topic requires a subjectId in it's params");
        const newTopic = new Topic_1.default({
            title,
            description,
            videoUrl,
            subject: subjectId,
        });
        yield newTopic.save();
        res.status(200).json(newTopic);
    }
    catch (error) {
        next(error);
    }
});
exports.addTopic = addTopic;
const deleteTopic = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { topicId } = req.params;
        if (!topicId)
            throw http_errors_1.default.BadRequest("Topic requires a subjectId in it's params");
        const topic = yield Topic_1.default.findByIdAndDelete({ _id: topicId });
        res.status(200).json(topic);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteTopic = deleteTopic;
//# sourceMappingURL=topicControllers.js.map