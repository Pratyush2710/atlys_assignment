import { useMemo } from "react";
import css from "./Feed.module.scss";
import FeedList from "../../components/FeedList/FeedList";
import PostBox from "../../components/FeedList/PostBox/PostBox";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import { useToggleOpen } from "../../hooks/useToggleOpen";
import LoginAndRegisterPage from "../LoginAndRegisterPage/LoginAndRegisterPage";
import { useAuth } from "../../context/AuthContext";

export default function FeedHomePage() {
  const { isAuthenticated } = useAuth();
  const { isOpen, open, close } = useToggleOpen();
  const onSubmitPost = (post?: string) => {
    const token = localStorage.getItem("token");
    if (!token) {
      open();
    } else {
      post && window.alert(`Saved successfully: ${post}`);
    }
  };
  console.log(isAuthenticated);
  return (
    <>
      <div className={css.container}>
        <header className={css.header}>
          <h1>
            Hello{" "}
            {`${isAuthenticated ? localStorage.getItem("username") : "User"}`}
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
