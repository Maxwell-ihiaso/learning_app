import { NextFunction, Request, Response } from "express";
import { HttpError } from "../interfaces";

const { logEvents } = require("./logEvents");

const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  logEvents(`${err.name}: ${err.message}`, "errLog.txt");

  if (status === 404) {
  res.status(status).json({
    status,
    message: `${err.message} - The resource you are trying to access does not exist or has been moved`,
    apis: [
      {
        topics: {
          all: `{BASE_URL}/api/v1/topics/:subjectID`,
          unique: `{BASE_URL}/api/v1/topics/:topicID`,
      }
    },
      {
        subjects: {
          all: `{BASE_URL}/api/v1/subjects`
      }
    },
    ]
   });
  }
  else res.status(status).json({ message: err.message });
};

export default errorHandler;
