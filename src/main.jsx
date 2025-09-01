import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SideAction } from "./contexts/SideOptionAction.jsx";
import { AuthProvider } from "./contexts/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SideAction>
        <AuthProvider>
          <App />
          <Toaster position="top-center" reverseOrder={false} />
        </AuthProvider>
      </SideAction>
    </BrowserRouter>
  </StrictMode>
);
