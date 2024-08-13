import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import React from 'react'
import styles from "./App.module.css";
//views
import Navbar from "src/views/Navbar/Navbar";
import Footer from "src/views/Footer/Footer";
import Homepage from "src/views/Homepage/Homepage";
import Login from "src/views/Login/Login";
import Register from "src/views/Register/Register";
import Dashboard from "src/views/Dashboard/Dashboard";
import PrivateRoute from "src/views/Helpers/PrivateRoute";
import About from "src/views/About/About";

export const history = createBrowserHistory();

function App() {
    return (
        <div className={styles.app}>
            <BrowserRouter history={history}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
                <div className={styles.mainContent}>
                    <Routes>
                        <Route path="/about" element={<About />} />
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
