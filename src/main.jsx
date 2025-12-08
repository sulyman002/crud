import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext.jsx";
import TanstackProvider from "./providers/TanstackProvider.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AppProvider>
        <TanstackProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </TanstackProvider>
      </AppProvider>
    </StrictMode>
    ,
  </BrowserRouter>
);
