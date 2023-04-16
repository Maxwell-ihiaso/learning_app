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
exports.deleteSubject = exports.addSubject = exports.getSubjets = void 0;
const Subject_1 = __importDefault(require("../model/Subject"));
const http_errors_1 = __importDefault(require("http-errors"));
const getSubjets = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subjects = yield Subject_1.default.find();
        res.status(200).json(subjects);
    }
    catch (error) {
        next(error);
    }
});
exports.getSubjets = getSubjets;
const addSubject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.body;
        if (!title)
            throw http_errors_1.default.BadRequest("Subject requires a title");
        const newSubject = new Subject_1.default({
            title,
        });
        yield newSubject.save();
        res.status(200).json(newSubject);
    }
    catch (error) {
        next(error);
    }
});
exports.addSubject = addSubject;
const deleteSubject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id)
            throw http_errors_1.default.BadRequest("subject ID is required in params");
        const subject = yield Subject_1.default.findByIdAndDelete({ _id: id });
        res.status(200).json(subject);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteSubject = deleteSubject;
//# sourceMappingURL=subjectControllers.js.map