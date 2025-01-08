import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Hello from "./pages/Hello.jsx";
import Welcome from "./pages/Welcome.jsx";
import Contact from "./pages/Contact.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Coding from "./pages/Coding.jsx";
import { startEmailJs } from "./services/emailjs.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Hello />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/coding" element={<Coding />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

startEmailJs();
