// components/Music/MusicFooterPlayer.jsx

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material";
import { useMusicPlayer } from "../../context/MusicPlayerContext";

import {
  Box,
  Typography,
  IconButton,
  Slider,
  PlayArrowIcon,
  PauseIcon,
  SkipNextIcon,
  SkipPreviousIcon,
  VolumeUpIcon,
  footerRoot,
  emptyState,
  leftSection,
  centerSection,
  progressRow,
  controlRow,
  playButton,
  rightSection,
} from "./Styles/musicFooterPlayer.styles";

/* convert seconds to mm:ss */
function getTimeLabel(seconds = 0) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

export default function MusicFooterPlayer() {
  const theme = useTheme();
  const audioRef = useRef(null);

  const {
    songs,
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
  } = useMusicPlayer();

  const [playedTime, setPlayedTime] = useState(0);
  const [songDuration, setSongDuration] = useState(0);
  const [volume, setVolume] = useState(80);

  /* play / pause audio */
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  /* audio events */
  function updateTime() {
    setPlayedTime(audioRef.current.currentTime);
  }

  function setSongDurationTime() {
    setSongDuration(audioRef.current.duration || 0);
  }

  function seekSong(_, value) {
    audioRef.current.currentTime = value;
    setPlayedTime(value);
  }

  function changeVolume(_, value) {
    setVolume(value);
    audioRef.current.volume = value / 100;
  }

  /* next / previous */
  function goNext() {
    const index = songs.findIndex(s => s.id === currentSong.id);
    if (index < songs.length - 1) {
      setCurrentSong(songs[index + 1]);
      setIsPlaying(true);
    }
  }

  function goPrev() {
    const index = songs.findIndex(s => s.id === currentSong.id);
    if (index > 0) {
      setCurrentSong(songs[index - 1]);
      setIsPlaying(true);
    }
  }

  /* empty state */
  if (!currentSong) {
    return (
      <Box sx={emptyState}>
        Select a song to play 🎧
      </Box>
    );
  }

  return (
    <Box sx={footerRoot(theme)}>
      {/* LEFT */}
      <Box sx={leftSection}>
        <Typography fontWeight={600} noWrap>
          {currentSong.name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Local File
        </Typography>
      </Box>

      {/* CENTER */}
      <Box sx={centerSection}>
        <Box sx={progressRow}>
          <Typography variant="caption">
            {getTimeLabel(playedTime)}
          </Typography>

          <Slider
            size="small"
            min={0}
            max={songDuration}
            value={playedTime}
            onChange={seekSong}
            sx={{ flex: 1 }}
          />

          <Typography variant="caption">
            {getTimeLabel(songDuration)}
          </Typography>
        </Box>

        <Box sx={controlRow}>
          <IconButton onClick={goPrev}>
            <SkipPreviousIcon />
          </IconButton>

          <IconButton
            onClick={() => setIsPlaying(!isPlaying)}
            sx={playButton(theme)}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>

          <IconButton onClick={goNext}>
            <SkipNextIcon />
          </IconButton>
        </Box>
      </Box>

    
      <Box sx={rightSection}>
        <VolumeUpIcon fontSize="small" />
        <Slider
          size="small"
          value={volume}
          onChange={changeVolume}
        />
      </Box>

      /
      <audio
        ref={audioRef}
        src={currentSong.url}
        onTimeUpdate={updateTime}
        onLoadedMetadata={setSongDurationTime}
      />
    </Box>
  );
}
