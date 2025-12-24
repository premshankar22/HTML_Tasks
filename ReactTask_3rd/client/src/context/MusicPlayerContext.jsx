import { createContext, useContext, useState, useEffect } from "react";
import { loadSongsFromDB } from "../utils/musicDB";

const MusicPlayerContext = createContext(null);

export function MusicPlayerProvider({ children }) {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

 
    async function loadSongs() {
      const storedSongs = await loadSongsFromDB();

      const withUrls = storedSongs.map(song => ({
        ...song,
        url: URL.createObjectURL(song.blob),
      }));

      setSongs(withUrls);
    }

    loadSongs();
  }, []);

  return (
    <MusicPlayerContext.Provider
      value={{
        songs,
        setSongs,
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  return useContext(MusicPlayerContext);
}
