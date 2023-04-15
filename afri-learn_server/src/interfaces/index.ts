import { Document, Types } from "mongoose";

export interface ISubject extends Document {
  title: string;
}

export interface ITopic extends Document {
  title: string;
  videoUrl: string;
  description: string;
  subject: Types.ObjectId;
}

export interface HttpError extends Error {
  status: number;
}