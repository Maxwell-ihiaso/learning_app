// subject.model.ts
import { model, Schema } from "mongoose";
import { ISubject } from "../interfaces";

const subjectSchema: Schema = new Schema<ISubject>(
  {
    title: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "title is required"],
    },
  },
  {
    timestamps: true,
    strict: true
  }
);

export default model<ISubject>("Subject", subjectSchema);
