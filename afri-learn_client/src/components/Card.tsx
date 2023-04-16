import React from "react";
import { useNavigate } from "react-router-dom";

export interface ICard {
  subjectTitle: string;
  topicTitle: string;
  topicID: string;
}
const Card: React.FC<ICard> = ({ subjectTitle, topicTitle, topicID }) => {
  const navigate = useNavigate();
  return (
    <article
      className="card"
      onClick={() => navigate(`/${subjectTitle}/${topicTitle}/${topicID}`)}
    >
      <div className="card_header">
        <ul className="card_header_summary">
          <li className="card_header_summary_list">189 views</li>
          <li className="card_header_summary_list">35 watching</li>
          <li className="card_header_summary_list">17 interviews</li>
        </ul>
        <div className="card_header_author">
          by <span className="card_header_author_name"> @maxwell</span>
        </div>
      </div>
      <div className="card_footer">
        <p className="card_footer_title">{topicTitle}</p>
        <div className="card_footer_btn">start</div>
      </div>
    </article>
  );
};

export default Card;
