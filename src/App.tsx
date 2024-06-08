import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Posts/Home";
import RegisterPage from "./pages/LoginAndRegisterPage/RegisterPage";
import LoginPage from "./pages/LoginAndRegisterPage/LoginPage";
import LoginAndRegisterPage from "./pages/LoginAndRegisterPage/LoginAndRegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/posts" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
