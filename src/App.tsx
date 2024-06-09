import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FeedHomePage from "./pages/FeedHomePage/FeedHomePage";
import LoginAndRegisterPage from "./pages/LoginAndRegisterPage/LoginAndRegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeedHomePage />} />
          <Route
            path="/auth/login"
            element={<LoginAndRegisterPage showLoginPage />}
          />
          <Route path="/posts" element={<FeedHomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
