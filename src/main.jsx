import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Импортируем BrowserRouter
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./store";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/test_task_react">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
