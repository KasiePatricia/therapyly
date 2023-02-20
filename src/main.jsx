import React from "react";
import ReactDOM from "react-dom/client";
import UserOboardingContext from "./context/UserOboardingContext";
import App from "./App";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}
    >
      <UserOboardingContext>
        <App />
      </UserOboardingContext>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
