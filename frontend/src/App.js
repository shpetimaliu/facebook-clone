import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import LoggedinRoutes from "./routes/LoggedinRoutes";
import NotLogginRoutes from "./routes/NotLogginRoutes";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<LoggedinRoutes />}>
          <Route path="/" element={<Home />} exact />
          <Route path="/profile" element={<Profile />} exact />
        </Route>
        <Route element={<NotLogginRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
