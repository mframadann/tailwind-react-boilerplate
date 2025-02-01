import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { HelloWorld } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>
);
