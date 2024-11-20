// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "~/layouts/Layout";
import HomePage from "~/pages/homepage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage to="/chung-day-lai-xe" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
