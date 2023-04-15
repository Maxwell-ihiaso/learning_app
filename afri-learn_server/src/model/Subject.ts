// subject.model.ts
import { model, Schema } from "mongoose";
import { ISubject } from "../interfaces";

const subjectSchema: Schema = new Schema<ISubject>({
  title: { type: String, required: true },
});

export default model<ISubject>(
  "Subject",
  subjectSchema
);
