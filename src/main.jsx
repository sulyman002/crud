import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext.jsx";
import TanstackProvider from "./providers/TanstackProvider.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import { Suspense } from "react";

import "./config/lang.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AppProvider>
        <TanstackProvider>
          <AuthProvider>
            <Suspense
              fallback={
                <div className="w-full h-screen flex items-center justify-center">
                  <div className="h-6 w-6 border-4 border-t-transparent animate-spin border-white rounded-full"></div>{" "}
                </div>
              }
            >
              <App />
            </Suspense>
          </AuthProvider>
        </TanstackProvider>
      </AppProvider>
    </StrictMode>
  </BrowserRouter>
);
