import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './firebase/firebase'

import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyA6XjqQLcfUXEsgvRrk2PD9-n3zBP1JQ0U",
  authDomain: "facturacioncerin.firebaseapp.com",
  projectId: "facturacioncerin",
  storageBucket: "facturacioncerin.appspot.com",
  messagingSenderId: "339063363583",
  appId: "1:339063363583:web:4026be69654ef4c377f9ca",
  measurementId: "G-51LCTM6RJL"
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>
);
