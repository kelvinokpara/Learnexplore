import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./Contex/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);
