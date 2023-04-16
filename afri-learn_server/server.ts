import { NextFunction, Request, Response } from "express";
import express from "express";
import path from "path";
import mongoose from "mongoose";
require("dotenv").config();
import cors from "cors";
import corsOptions from "./src/config/corsOptions";
import { logger } from "./src/middleware/logEvents";
import errorHandler from "./src/middleware/errorHandler";
import credentials from "./src/middleware/credentials";
import connectDB from "./src/config/dbConn";
import createHttpError from "http-errors";
import topics from "./src/routes/topic";
import subjects from "./src/routes/subject";
const PORT = process.env.PORT || 3500;

const app = express();
// Connect to MongoDB
connectDB();

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

// routes
app.use("/api/v1/topics", topics);
app.use("/api/v1/subjects", subjects);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(404);
    if (req.accepts("json")) {
      throw createHttpError.NotFound("404 Not Found");
    } else {
      res.type("txt").send("404 Not Found");
    }
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}: http://localhost:${PORT}`)
  );
});
