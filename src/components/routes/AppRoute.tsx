import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages";
import Todo from "../Todo";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default AppRoute;
