import React from "react";
import "./App.css";
import LandingPage from "./pages/Auth/LandingPage";
import LoginPage from "./pages/Auth/LoginPage";
import ErrorPage from "./pages/Auth/ErrorPage.tsx";
import SignUpPage from "./pages/Auth/SignupPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsPage from "./pages/eventbrowse/registeredevents/eventspage.tsx";
import HomePage from "./pages/eventbrowse/HomePage.tsx";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/signup" element={<SignUpPage />} /> {/* Fixed this */}
          <Route path="/home" element={<HomePage />} /> {/* Assuming this is the home page */}
          <Route path="/registered-events" element={<EventsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
