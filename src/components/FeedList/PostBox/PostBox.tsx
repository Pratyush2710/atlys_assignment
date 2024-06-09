import React from "react";
import css from "../FeedList.module.scss";
import FeedItem from "../FeedItem/FeedItem";

const PostBox: React.FC = () => {
  return (
    <div className={css.feedList}>
      <FeedItem />
    </div>
  );
};

export default PostBox;
