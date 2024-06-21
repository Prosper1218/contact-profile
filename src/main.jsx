import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Addcontact from "./Pages/Addcontact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route element={<App />}>
               {/* {" "} */}
               <Route element={<Home />} path="/" />
               <Route element={<Addcontact />} path="/Add" />
            </Route>
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
