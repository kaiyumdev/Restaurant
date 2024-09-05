// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <div className="max-w-screen-xl mx-auto">
    <HelmetProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </HelmetProvider>
  </div>
  // </StrictMode>,
);
