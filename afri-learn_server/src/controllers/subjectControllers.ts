import { NextFunction, Request, Response } from "express";
import Subject from "../model/Subject";
import { ISubject } from "../interfaces";
import createError from "http-errors";

export const getSubjets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (error) {
    next(error);
  }
};

export const addSubject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title }: ISubject = req.body;
    if (!title) throw createError.BadRequest("Subject requires a title");
    const newSubject = new Subject({
      title,
    });
    await newSubject.save();
    res.status(200).json(newSubject);
  } catch (error) {
    next(error);
  }
};

export const deleteSubject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id }: {[key: string]: string} = req.params;
    if (!id) throw createError.BadRequest("subject ID is required in params");
    
    const subject = await Subject.findByIdAndDelete({_id: id})
    res.status(200).json(subject);
  } catch (error) {
    next(error);
  }
};
