import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route element={<App />}>
               {" "}
               <Route element={<Home />} path="/" />
            </Route>
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
