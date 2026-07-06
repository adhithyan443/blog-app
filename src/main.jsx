import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";
import AuthProvider from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>

        <App />

        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={10}
          toastOptions={{
            duration: 3000,

            style: {
              background: "#fff",
              color: "#1f2937",
              borderRadius: "12px",
              padding: "16px",
              fontSize: "14px",
              boxShadow:
                "0 8px 20px rgba(0,0,0,0.08)",
            },

            success: {
              iconTheme: {
                primary: "#7c3aed",
                secondary: "#fff",
              },
            },

            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />

      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);