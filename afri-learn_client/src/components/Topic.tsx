import React from "react";
import { ITopic } from "../interfaces";


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
      <u>Description</u>
      <p>{description}</p>
    </section>
  );
};
