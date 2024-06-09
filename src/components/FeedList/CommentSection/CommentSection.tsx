import React from "react";
import css from "../FeedList.module.scss";

const CommentSection: React.FC = () => {
  return (
    <div className={css.commentSection}>
      <input
        type="text"
        placeholder="Add a comment..."
        className={css.commentInput}
      />
      <div className={css.commentsList}>
        {/* Nested comments can be added */}
      </div>
    </div>
  );
};

export default CommentSection;
