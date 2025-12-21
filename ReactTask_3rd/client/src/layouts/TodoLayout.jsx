// layouts/TodoLayout.jsx

import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import TodoHeader from "../components/TodoList/TodoHeader";
import TodoSidebar from "../components/TodoList/TodoSidebar";

export default function TodoLayout() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <TodoHeader />

      {/* BODY */}
      <Box
        sx={{
          flex: 1,
          width: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* SIDEBAR */}
        <TodoSidebar />

        {/* MAIN CONTENT */}
        <Box
          sx={{
            flex: 1,
            height: "100%",
            padding: 2,
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
