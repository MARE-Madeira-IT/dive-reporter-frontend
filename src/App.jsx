import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//views
import Navbar from "src/views/Navbar/Navbar";
import Footer from "src/views/Footer/Footer";
import Homepage from "src/views/Homepage/Homepage";
import Login from "src/views/Login/Login";
import Register from "src/views/Register/Register";
import Dashboard from "src/views/Dashboard/Dashboard";
import PrivateRoute from "src/views/Helpers/PrivateRoute";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <div className="mainContent">
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
