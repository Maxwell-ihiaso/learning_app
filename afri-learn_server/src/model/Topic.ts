// topic.model.ts
import { model, Schema } from "mongoose";
import { ITopic } from "../interfaces";

const topicSchema: Schema = new Schema<ITopic>(
  {
    title: { type: String, required: true },
    videoUrl: { type: String },
    description: { type: String },
    subject: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
  },
  {
    timestamps: true,
  }
);

export default model<ITopic>("Topic", topicSchema);
