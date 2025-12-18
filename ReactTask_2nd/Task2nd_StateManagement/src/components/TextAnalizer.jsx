import { Box, Typography } from "@mui/material";

export const TextAnalizer = ({ text }) => {
  const charWithSpaces = text.length;
  const charWithoutSpaces = text.replace(/\s/g, "").length;

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const sentenceCount =
    text.match(/[^.!?]+[.!?]+/g)?.length || 0;

  const getMostFrequentWord = () => {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    if (!words) return "N/A";

    const freq = {};
    words.forEach(w => (freq[w] = (freq[w] || 0) + 1));

    return Object.keys(freq).reduce((a, b) =>
      freq[a] > freq[b] ? a : b
    );
  };

  return (
    <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography>🔤 Characters (with spaces): <b>{charWithSpaces}</b></Typography>
      <Typography>🔡 Characters (without spaces): <b>{charWithoutSpaces}</b></Typography>
      <Typography>📖 Words: <b>{wordCount}</b></Typography>
      <Typography>🧾 Sentences: <b>{sentenceCount}</b></Typography>
      <Typography>🔥 Most Frequent Word: <b>{getMostFrequentWord()}</b></Typography>
    </Box>
  );
};
