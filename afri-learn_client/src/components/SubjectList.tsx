import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ISubject } from "../interfaces";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import axios from "../api/axios";
import useMediaQuery from "../hooks/useMediaQuery";

const SubjectsList: React.FC = () => {
  const [subjects, setSubjects] = useState<ISubject[]>([]);
  const isTablet = useMediaQuery("(min-width: 728px)");

  // Get all subject from API: "/api/v1/subjects"
  useEffect(() => {
    axios
      .get("/api/v1/subjects")
      .then((res) => setSubjects(res.data))
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
  }, []);

  if (isTablet) {
    return (
      <ul>
        {React.Children.toArray(
          subjects.map((subject) => (
            <li>
              <NavLink
                to={`/${subject.title}/${subject._id}`}
                className={({ isActive }) =>
                  isActive ? "active" : "undefined"
                }
              >
                {subject.title}
              </NavLink>
            </li>
          ))
        )}
      </ul>
    );
  }

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
          enabled: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {React.Children.toArray(
          subjects.map((subject) => (
            <SwiperSlide className="mySwiper_list">
              <NavLink
                to={`/${subject.title}/${subject._id}`}
                className={({ isActive }) =>
                  isActive ? "active" : "undefined"
                }
              >
                {subject.title}
              </NavLink>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default React.memo(SubjectsList)
