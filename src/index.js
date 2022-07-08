import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import ExamList from "./ExamList";
import Quiz from "./quiz/Quiz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="user" element={<Quiz />} />
      <Route path="admin" element={<ExamList />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
