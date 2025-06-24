import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import "./styles/Header.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>
);
