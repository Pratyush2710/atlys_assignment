import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FeedHomePage from "./pages/FeedHomePage/FeedHomePage";
import RegisterPage from "./pages/LoginAndRegisterPage/RegisterPage";
import LoginPage from "./pages/LoginAndRegisterPage/LoginPage";
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
            element={
              <LoginAndRegisterPage>
                <LoginPage />
              </LoginAndRegisterPage>
            }
          />
          <Route
            path="/auth/register"
            element={
              <LoginAndRegisterPage>
                <RegisterPage />
              </LoginAndRegisterPage>
            }
          />
          <Route path="/posts" element={<FeedHomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
