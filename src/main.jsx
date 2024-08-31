import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Home, Property } from "./screen/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pay from "./screen/payment/pay.jsx";
import Thank from "./screen/thank/thank.jsx";
import { store } from "./component/redux/store.js";
import { Provider } from "react-redux";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="/payment/:id" element={<Pay />} />
          <Route path="/thank" element={<Thank />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
