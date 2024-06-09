import React, { useEffect, useState } from "react";
import css from "./FeedList.module.scss";
import data from "./data.json";
import FeedItem from "./FeedItem/FeedItem";
import { Feed } from "./type";

const FeedList: React.FC = () => {
  const [feeds, setFeeds] = useState<Feed[]>([]);

  useEffect(() => {
    // Handle async fetch
    setFeeds(data);
  }, []);

  return (
    <div className={css.feedList}>
      {feeds.map((feed) => (
        <FeedItem key={feed.id} feed={feed} />
      ))}
    </div>
  );
};

export default FeedList;
