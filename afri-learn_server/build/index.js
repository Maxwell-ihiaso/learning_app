"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
const cors_1 = __importDefault(require("cors"));
const corsOptions_1 = __importDefault(require("./config/corsOptions"));
const logEvents_1 = require("./middleware/logEvents");
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const credentials_1 = __importDefault(require("./middleware/credentials"));
const dbConn_1 = __importDefault(require("./config/dbConn"));
const http_errors_1 = __importDefault(require("http-errors"));
const topic_1 = __importDefault(require("./routes/topic"));
const subject_1 = __importDefault(require("./routes/subject"));
const PORT = process.env.PORT || 3500;
const app = (0, express_1.default)();
// Connect to MongoDB
(0, dbConn_1.default)();
// custom middleware logger
app.use(logEvents_1.logger);
// Handle options credentials check - before CORS!
app.use(credentials_1.default);
// Cross Origin Resource Sharing
app.use((0, cors_1.default)(corsOptions_1.default));
// built-in middleware to handle urlencoded form data
app.use(express_1.default.urlencoded({ extended: false }));
// built-in middleware for json
app.use(express_1.default.json());
//serve static files
app.use("/", express_1.default.static(path_1.default.join(__dirname, "/public")));
// routes
app.use("/api/v1/topics", topic_1.default);
app.use("/api/v1/subjects", subject_1.default);
app.all("*", (req, res, next) => {
    try {
        res.status(404);
        if (req.accepts("json")) {
            throw http_errors_1.default.NotFound("404 Not Found");
        }
        else {
            res.type("txt").send("404 Not Found");
        }
    }
    catch (error) {
        next(error);
    }
});
app.use(errorHandler_1.default);
mongoose_1.default.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}: http://localhost:${PORT}`));
});
//# sourceMappingURL=index.js.map