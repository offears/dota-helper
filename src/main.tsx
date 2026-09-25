import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Heroes from "./pages/Heroes";
import HeroDetail from "./pages/HeroDetail";
import Items from "./pages/Items";
import ItemDetail from "./pages/ItemDetail";
import Counterpick from "./pages/Counterpick";
import Lanes from "./pages/Lanes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="counterpick" element={<Counterpick />} />
          <Route path="lanes" element={<Lanes />} />
          <Route path="items" element={<Items />} />
          <Route path="items/:id" element={<ItemDetail />} />
          <Route path="heroes" element={<Heroes />} />
          <Route path="heroes/:id" element={<HeroDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
