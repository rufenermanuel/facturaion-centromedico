import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NewUsersForm from "./components/forms/NewUsersForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NewUsersForm/>
  </React.StrictMode>
);
