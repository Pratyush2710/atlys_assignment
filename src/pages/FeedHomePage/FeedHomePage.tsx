import { useMemo } from "react";
import css from "./Feed.module.scss";
import FeedList from "../../components/FeedList/FeedList";
import PostBox from "../../components/FeedList/PostBox/PostBox";

function getUserToken() {
  return !!(localStorage.getItem("token") || "");
}

export default function FeedHomePage() {
  const isLoggedIn = useMemo(() => getUserToken(), []);

  console.log(isLoggedIn);
  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1>
          Hello {`${isLoggedIn ? localStorage.getItem("username") : "User"}`}
        </h1>
        <p>
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
      </header>
      <PostBox />
      <FeedList />
    </div>
  );
}
