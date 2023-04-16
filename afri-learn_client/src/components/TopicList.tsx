import React, { useEffect, useState } from "react";
import { ITopic } from "../interfaces";
import { toast } from "react-toastify";
import axios from "../api/axios";
import Card from "./Card";
import { useParams } from "react-router-dom";

export const TopicList: React.FC = () => {
  const { subject, subjectID } = useParams<{
    subject: string;
    subjectID: string;
  }>();
  const [topics, setTopics] = useState<ITopic[]>([]);

  useEffect(() => {
    axios
      .get(`/api/v1/topics/${subjectID}`)
      .then((res) => setTopics(res.data))
      .catch((err) => {
        if (!err.response)
          toast.error("⚡ No response from server", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        else
          toast.error("⚡ Server error", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
      });
  }, [subjectID]);

  return (
    <>
      {React.Children.toArray(
        topics.map((topic) => (
          <Card
            subjectTitle={subject as string}
            topicTitle={topic.title}
            topicID={topic._id}
          />
        ))
      )}
    </>
  );
};
