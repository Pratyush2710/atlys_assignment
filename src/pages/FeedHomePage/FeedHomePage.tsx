import { useMemo } from "react";
import css from "./Feed.module.scss";
import FeedList from "../../components/FeedList/FeedList";
import PostBox from "../../components/FeedList/PostBox/PostBox";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import { useToggleOpen } from "../../hooks/useToggleOpen";
import LoginAndRegisterPage from "../LoginAndRegisterPage/LoginAndRegisterPage";

function getUserToken() {
  return !!(localStorage.getItem("token") || "");
}

export default function FeedHomePage() {
  const isLoggedIn = useMemo(
    () => getUserToken(),
    [localStorage.getItem("token")]
  );
  const { isOpen, open, close } = useToggleOpen();
  const onSubmitPost = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      open();
    } else {
      window.alert("Saved successfully");
    }
  };
  console.log(isLoggedIn);
  return (
    <>
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
        <PostBox onSubmitPost={onSubmitPost} />
        <FeedList />
      </div>
      <ModalComponent show={isOpen} onClose={close}>
        <LoginAndRegisterPage onAuthentication={close} showLoginPage />
      </ModalComponent>
    </>
  );
}
