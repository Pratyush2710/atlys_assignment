import React from "react";
import css from "../FeedList.module.scss";
import FeedItem from "../FeedItem/FeedItem";

const PostBox: React.FC<{ onSubmitPost: (post?: string) => void }> = ({
  onSubmitPost,
}) => {
  return (
    <div className={css.feedList}>
      <FeedItem onSubmitPost={onSubmitPost} />
    </div>
  );
};

export default PostBox;
