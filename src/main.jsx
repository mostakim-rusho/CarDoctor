import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {  RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

 

// Define your routes with loaders
 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
