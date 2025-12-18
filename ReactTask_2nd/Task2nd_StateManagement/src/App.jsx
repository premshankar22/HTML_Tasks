import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  LinearProgress,
  Switch,
  Stack,
  Divider,
} from "@mui/material";
import { TextAnalizer } from "./components/TextAnalizer";

export default function App() {
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const maxChars = 500;
  const progress = Math.min((text.length / maxChars) * 100, 100);

  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const removeSpaces = () =>
    setText(text.replace(/\s+/g, " ").trim());
  const resetText = () => setText("");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: darkMode ? "#121212" : "#f4f6f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 520,
          p: 3,
          borderRadius: 3,
          boxShadow: 6,
          bgcolor: darkMode ? "#1e1e1e" : "#fff",
        }}
      >
        {/* ================= HEADER ================= */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5" fontWeight="bold">
            📝 Text Analyzer
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="caption">
              {darkMode ? "Dark" : "Light"}
            </Typography>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Stack>
        </Stack>

        {/* ================= TEXT INPUT ================= */}
        <TextField
          multiline
          rows={5}
          fullWidth
          placeholder="Type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* ================= PROGRESS ================= */}
        <Box mt={2}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ height: 8, borderRadius: 5 }}
          />
          <Typography
            variant="caption"
            display="block"
            textAlign="right"
            mt={0.5}
          >
            {text.length}/{maxChars} characters
          </Typography>
        </Box>

        {/* ================= ACTION BUTTONS ================= */}
        <Stack spacing={1.5} mt={3}>
          <Stack direction="row" spacing={1}>
            <Button fullWidth onClick={toUpper} variant="outlined">
              UPPERCASE
            </Button>
            <Button fullWidth onClick={toLower} variant="outlined">
              lowercase
            </Button>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Button fullWidth onClick={removeSpaces} variant="outlined">
              Remove Spaces
            </Button>
            <Button
              fullWidth
              onClick={resetText}
              variant="outlined"
              color="error"
              disabled={!text}
            >
              Reset
            </Button>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3 }} />

        {/* ================= LIVE PREVIEW ================= */}
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            gutterBottom
          >
            📊 Live Preview
          </Typography>

          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: darkMode ? "#121212" : "#f9fafb",
            }}
          >
            <TextAnalizer text={text} />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
