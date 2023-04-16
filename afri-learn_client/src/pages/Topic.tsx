import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITopic } from "../interfaces";
import { toast } from "react-toastify";
import axios from "../api/axios";

const Topic: React.FC = () => {
  const { topicID } = useParams<{
    subject: string;
    topic: string;
    topicID: string;
  }>();
  const [topics, setTopics] = useState<ITopic>({} as ITopic);

  useEffect(() => {
    axios
      .get(`/api/v1/topics/${topicID}`)
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
  }, [topicID]);

  return (
    <section>
      <h3> {topics.title}</h3>
      <p>{topics.videoUrl}</p>
      <p>{topics.description}</p>
    </section>
  );
};

export default Topic;