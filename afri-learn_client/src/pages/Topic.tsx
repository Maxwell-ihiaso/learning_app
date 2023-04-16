import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ITopic } from "../interfaces";
import { toast } from "react-toastify";
import ReactPlayer from "react-player/lazy";
import axios from "../api/axios";
import useMediaQuery from "../hooks/useMediaQuery";

const Topic: React.FC = () => {
  const [topics, setTopics] = useState<ITopic>({} as ITopic);
  const { topicID } = useParams<{
    subject: string;
    topic: string;
    topicID: string;
  }>();
  const isTablet = useMediaQuery("(min-width: 768px)")

  const {pathname} = useLocation()

  useEffect(() => {
    axios
      .get(`/api/v1/topics/topic/${topicID}`)
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

  console.log({pathname})
  
  return (
    <section className="topic">
      <h3 className="topic_title">TOPIC - {topics.title}</h3>
      <ReactPlayer
        controls={true}
        url={topics.videoUrl}
        width={isTablet ? `75%` : "98%"}
        height={isTablet ? "500px" : "350px"}
      />
      <hr />
      <u>Description</u>
      <p className="topic_description">{topics.description}</p>
    </section>
  );
};

export default Topic;
