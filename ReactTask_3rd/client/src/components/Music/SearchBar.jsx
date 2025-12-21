import { TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({
  placeholder = "Search...",
  maxWidth = 520,
}) {
  return (
    <Box sx={{ width: "100%", maxWidth }}>
      <TextField
        size="small"
        fullWidth
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
          sx: {
            height: 38,
            fontSize: "0.9rem",
          },
        }}
      />
    </Box>
  );
}
