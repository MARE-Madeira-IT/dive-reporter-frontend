import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/dashboard/Dashboard";
import ForgotPassword from "./components/ForgotPassword";

const MainContentContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  margin: auto;
`;

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <MainContentContainer>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </MainContentContainer>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
