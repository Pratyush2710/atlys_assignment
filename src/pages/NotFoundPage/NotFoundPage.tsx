import css from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className={css.container}>
      <h1>404</h1>
      <span>Oops, we could not find this page.</span>
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
}

export default NotFoundPage;
