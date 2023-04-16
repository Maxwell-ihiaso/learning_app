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
Object.defineProperty(exports, "__esModule", { value: true });
exports.logEvents = exports.logger = void 0;
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const logEvents = (message, logName) => __awaiter(void 0, void 0, void 0, function* () {
    const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    try {
        if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
            yield fsPromises.mkdir(path.join(__dirname, "..", "logs"));
        }
        yield fsPromises.appendFile(path.join(__dirname, "..", "logs", logName), logItem);
    }
    catch (err) {
        console.log(err);
    }
});
exports.logEvents = logEvents;
const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "reqLog.txt");
    console.log(`${req.method} ${req.path}`);
    next();
};
exports.logger = logger;
//# sourceMappingURL=logEvents.js.map