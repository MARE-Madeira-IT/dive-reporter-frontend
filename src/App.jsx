import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import NavbarContent from "./components/NavbarContent";
import FooterContent from "./components/FooterContent";
import HomepageContent from "./components/HomepageContent";
import LoginContent from "./components/LoginContent";
import RegisterContent from "./components/RegisterContent";
import DashboardContent from "./components/dashboard/DashboardContent";
import PrivateRoute from "./components/helpers/PrivateRoute";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavbarContent />
        <Routes>
          <Route path="/" element={<HomepageContent />} />
        </Routes>
        <div className="mainContent">
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardContent />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginContent />} />
            <Route path="/register" element={<RegisterContent />} />
          </Routes>
          <FooterContent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
