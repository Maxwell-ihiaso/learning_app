import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ITopic } from "../interfaces";
import { toast } from "react-toastify";

const data: ITopic[] = [
  {
    _id: "1",
    title: "Algebra",
    videoUrl: "#",
    description: "description",
  },
  {
    _id: "2",
    title: "Polynomia",
    videoUrl: "#",
    description: "description",
  },
  {
    _id: "3",
    title: "Quadratic",
    videoUrl: "#",
    description: "description",
  },
];

export const Topic: React.FC<ITopic> = ({  title, videoUrl, description }) => {
//   const { subject, topic, topicID } = useParams<{
//     subject: string;
//     topic: string;
//     topicID: string;
//   }>();

  return (
    <section>
      <h3> {title}</h3>
      <p>{videoUrl}</p>
      <p>{description}</p>
    </section>
  );
};
