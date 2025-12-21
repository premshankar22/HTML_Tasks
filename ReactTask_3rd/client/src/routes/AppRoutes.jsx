import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import MusicLayout from "../layouts/MusicLayout";
import TodoLayout from "../layouts/TodoLayout";

import MusicPlayerPage from "../pages/MusicPlayerPage";
import TodoPage from "../pages/TodoPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* MUSIC */}
        <Route path="/music" element={<MusicLayout />}>
          <Route index element={<MusicPlayerPage />} />
        </Route>

        {/* TODO */}
        <Route path="/todo" element={<TodoLayout />}>
          <Route index element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
