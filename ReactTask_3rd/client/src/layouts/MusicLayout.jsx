import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import MusicHeader from "../components/Music/MusicHeader";
import MusicSidebar from "../components/Music/MusicSidebar";
import MusicFooterPlayer from "../components/Music/MusicFooterPlayer";
import { MusicPlayerProvider } from "../context/MusicPlayerContext";

export default function MusicLayout() {
  return (
    <MusicPlayerProvider>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/*  HEADER */}
        <Box sx={{ position: "sticky", top: 0, zIndex: 20 }}>
          <MusicHeader />
        </Box>

        {/* BODY  */}
        <Box sx={{ flex: 1, display: "flex", overflow: "hidden" }}>
          <MusicSidebar />

          <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
            <Outlet />
          </Box>
        </Box>

        {/*  FOOTER */}
        <Box
          sx={{
            height: 120,
            bgcolor: "background.paper",
            borderTop: "1px solid",
            borderColor: "divider",
            position: "sticky",
            bottom: 0,
            zIndex: 15,
          }}
        >
          <MusicFooterPlayer />
        </Box>
      </Box>
    </MusicPlayerProvider>
  );
}
