import React, { useState } from "react";
import { MdOutlineModeComment } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";
import css from "../FeedList.module.scss";
import { Feed } from "../type";
import CommentSection from "../CommentSection/CommentSection";

interface FeedItemProps {
  feed?: Feed;
  onSubmitPost?: () => void;
}

const FeedItem: React.FC<FeedItemProps> = ({ feed, onSubmitPost }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className={css.feedItem}>
      <div className={css.feedHeader}>
        {!feed ? (
          <>Create post</>
        ) : (
          <>
            <div className={css.feedHeader}>
              <img
                src={feed.imageUrl}
                alt={`${feed.name}'s profile`}
                className={css.feedImage}
              />
              <div className={css.vertical}>
                <div className={css.feedUser}>{feed.name}</div>
                <div className={css.feedTime}>{feed.time}</div>
              </div>
            </div>
            <div className={css.moreOptions}>
              ...
              <div className={css.options}>
                <button>Edit</button>
                <button>Delete</button>
                <button>Report</button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={css.feedContent}>
        <span className={css.sentimentIcon}>
          {feed?.sentimentIcon || <FaCommentDots color="white" />}
        </span>
        {feed ? (
          feed.content
        ) : (
          <textarea
            placeholder="How are you feeling today?"
            className={css.postInput}
          />
        )}
      </div>
      <div className={css.feedActions}>
        {feed ? (
          <button
            className={css.commentSection}
            onClick={() => setShowComments(!showComments)}
          >
            <MdOutlineModeComment className={css.feedIcon} />
            {feed.comments} comments
          </button>
        ) : (
          <button className={css.postButton} onClick={onSubmitPost}>
            Post
          </button>
        )}
      </div>
      {showComments && <CommentSection />}
    </div>
  );
};

export default FeedItem;
