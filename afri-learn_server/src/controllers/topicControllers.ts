import { NextFunction, Request, Response } from "express";
import Subject from "../model/Subject";
import { ITopic } from "../interfaces";
import createError from "http-errors";
import Topic from "../model/Topic";

export const getTopics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { subjectId } = req.params;
    if (!subjectId)
      throw createError.BadRequest("SubjectId is required in params");

    const topics = await Topic.find({ subject: subjectId });
    res.status(200).json(topics);
  } catch (error) {
    next(error);
  }
};

export const getTopic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { topicId } = req.params;
    if (!topicId) throw createError.BadRequest("topicId is required in params");

    const topic = await Topic.findById({ _id: topicId }).populate("subject");
    res.status(200).json(topic);
  } catch (error) {
    next(error);
  }
};

export const addTopic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, videoUrl }: ITopic = req.body;
    const { subjectId } = req.params;

    if (!title || !description || !videoUrl)
      throw createError.BadRequest(
        "Topic requires a title, description, and videoUrl"
      );
    if (!subjectId)
      throw createError.BadRequest("Topic requires a subjectId in it's params");

    const newTopic = new Topic({
      title,
      description,
      videoUrl,
      subject: subjectId,
    });

    await newTopic.save();
    res.status(200).json(newTopic);
  } catch (error) {
    next(error);
  }
};

export const deleteTopic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { topicId } = req.params;

    if (!topicId)
      throw createError.BadRequest("Topic requires a subjectId in it's params");

    const topic = await Topic.findByIdAndDelete({ _id: topicId });

    res.status(200).json(topic);
  } catch (error) {
    next(error);
  }
};
