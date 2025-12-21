import { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { IoMenu } from "react-icons/io5";
import TodayIcon from "@mui/icons-material/Today";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function TodoSidebar() {
  const [open, setOpen] = useState(true); // 👈 sidebar state

  function toggleSidebar() {
    setOpen(prev => !prev);
  }

  return (
    <Box
      sx={{
        width: open ? "15%" : "64px",
        height: "100%",
        borderRight: "1px solid #e5e7eb",
        padding: 1,
        flexShrink: 0,
        backgroundColor: "#ffffff",
        transition: "width 0.25s ease",
      }}
    >
      <List disablePadding>
        <SidebarItem
          icon={<IoMenu size={22} />}
          onClick={toggleSidebar}
          hideText
        />

        <SidebarItem icon={<TodayIcon />} label="My Day" open={open} />
        <SidebarItem icon={<StarOutlineIcon />} label="Important" open={open} />
        <SidebarItem icon={<EventNoteIcon />} label="Planned" open={open} />
        <SidebarItem icon={<PersonOutlineIcon />} label="Assigned to Me" open={open} />
        <SidebarItem icon={<FlagOutlinedIcon />} label="Flagged Mail" open={open} />
        <SidebarItem icon={<TaskAltIcon />} label="Tasks" open={open} />
      </List>
    </Box>
  );
}

/* ---------- Reusable Item ---------- */

function SidebarItem({ icon, label, open, onClick, hideText }) {
  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        borderRadius: 1,
        mb: 0.5,
       justifyContent: "flex-start", // 👈 ALWAYS LEFT
        "&:hover": {
          backgroundColor: "#f1f5f9",
        },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: open ? 36 : "auto",
          color: "#2563eb",
          justifyContent: "center",
        }}
      >
        {icon}
      </ListItemIcon>

      {!hideText && open && (
        <ListItemText
          primary={label}
          primaryTypographyProps={{
            fontSize: "0.9rem",
            color: "#1e293b",
          }}
        />
      )}
    </ListItemButton>
  );
}
