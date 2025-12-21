// components/Music/MusicSidebar.jsx

import { useTheme } from "@mui/material";

import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,

  ExpandMoreIcon,
  HomeIcon,
  ExploreIcon,
  LibraryMusicIcon,
  FavoriteIcon,
  DownloadIcon,
  HistoryIcon,
  QueueMusicIcon,

  sidebarRoot,
  sectionLabel,
  sidebarItem,
  sidebarIcon,
  accordionRoot,
  accordionTitle,
} from "./styles/musicSidebar.styles";

export default function MusicSidebar() {
  const theme = useTheme();

  return (
    <Box sx={sidebarRoot(theme)}>

     
      <Typography variant="caption" sx={sectionLabel}>
        Menu
      </Typography>

      <List dense sx={{ mt: 1 }}>
        <SidebarItem icon={<HomeIcon />} label="Home" />
        <SidebarItem icon={<ExploreIcon />} label="Browse" />
        <SidebarItem icon={<LibraryMusicIcon />} label="Library" />
      </List>

     
      <SidebarAccordion title="Your Music">
        <SidebarItem icon={<FavoriteIcon />} label="Liked Songs" />
        <SidebarItem icon={<DownloadIcon />} label="Downloads" />
        <SidebarItem icon={<HistoryIcon />} label="Recently Played" />
      </SidebarAccordion>

  
      <SidebarAccordion title="Playlists">
        <SidebarItem icon={<QueueMusicIcon />} label="Chill Mix" />
        <SidebarItem icon={<QueueMusicIcon />} label="Workout" />
        <SidebarItem icon={<QueueMusicIcon />} label="Focus" />
      </SidebarAccordion>

    </Box>
  );
}



function SidebarItem({ icon, label }) {
  return (
    <ListItemButton sx={sidebarItem}>
      <ListItemIcon sx={sidebarIcon}>
        {icon}
      </ListItemIcon>

      <ListItemText primary={label} />
    </ListItemButton>
  );
}

function SidebarAccordion({ title, children }) {
  return (
    <Accordion
      disableGutters
      elevation={0}
      defaultExpanded
      sx={accordionRoot}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ px: 0 }}
      >
        <Typography variant="caption" sx={accordionTitle}>
          {title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ p: 0 }}>
        <List dense>
          {children}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
