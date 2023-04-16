import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ITopic } from "../interfaces";
import { toast } from "react-toastify";
import { Topic } from "./Topic";
import axios from "../api/axios";


export const TopicList: React.FC = () => {
  const { subject, subjectID } = useParams<{ subject: string; subjectID: string }>();
  const [topics, setTopics] = useState<ITopic[]>([]);
  const navigate = useNavigate()

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

  console.log(subjectID)
  console.log(typeof subjectID)
  return (
    <section>
        {React.Children.toArray(
          topics.map((topic) => (
            <div
              onClick={() =>
                navigate(`/${subject}/${topic.title}/${topic._id}`)
              }
            >
              <Topic {...topic} />
            </div>
          ))
        )}
    </section>
  );
};
