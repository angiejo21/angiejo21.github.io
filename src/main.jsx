import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Hello from "./pages/Hello.jsx";
import Welcome from "./pages/Welcome.jsx";
import Contact from "./pages/Contact.jsx";
import Bio from "./pages/Bio.jsx";
import Coding from "./pages/Coding.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Hello />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/about-me" element={<Bio />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/coding" element={<Coding />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
