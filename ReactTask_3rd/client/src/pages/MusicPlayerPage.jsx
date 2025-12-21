// components/Music/MusicPlayerPage.jsx

import { useEffect,useState } from "react"
import { useMusicPlayer } from "../context/MusicPlayerContext"
import { saveSongsToDB,deleteSongFromDB } from "../utils/musicDB"
import { getStorageInfo } from "../utils/storageInfo"

import {
Box,
Button,
List,
ListItemButton,
ListItemIcon,
ListItemText,
Typography,
Divider,
IconButton,
MusicNoteIcon,
PlayArrowIcon,
DeleteIcon,
pageRoot,
addButton,
storageText,
emptyState,
songItem,
songIcon,
} from "../components/Music/Styles/musicPlayerPage.styles"

const MAX_STORAGE_MB=500

export default function MusicPlayerPage(){

const {songs,setSongs,currentSong,setCurrentSong,setIsPlaying}=useMusicPlayer()

const [storage,setStorage]=useState(null)

useEffect(()=>{
 getStorage()
},[])

async function getStorage(){
 const info=await getStorageInfo()
 setStorage(info)
}

async function addSongs(e){
 const files=Array.from(e.target.files)
 if(files.length===0) return

 let newSongsSize=0
 files.forEach(file=>{
  newSongsSize+=file.size/1024/1024
 })

 const info=await getStorageInfo()

 if(!info || info.usedMB+newSongsSize>MAX_STORAGE_MB){
  alert("Storage limit reached")
  return
 }

 const addedSongs=files.map(file=>{
  return {
   id:crypto.randomUUID(),
   name:file.name.replace(/\.[^/.]+$/,""),
   size:(file.size/1024/1024).toFixed(1),
   blob:file,
   url:URL.createObjectURL(file),
  }
 })

 const updatedList=[...songs,...addedSongs]
 setSongs(updatedList)
 await saveSongsToDB(updatedList)
 getStorage()
}

function startSong(song){
 setCurrentSong(song)
 setIsPlaying(true)
}

async function removeSong(song){
 setSongs(prev=>prev.filter(s=>s.id!==song.id))

 if(currentSong && currentSong.id===song.id){
  setCurrentSong(null)
  setIsPlaying(false)
 }

 await deleteSongFromDB(song.id)
 getStorage()
}

return (
<Box sx={pageRoot}>

<Button variant="contained" component="label" sx={addButton}>
 Add Music
 <input
  type="file"
  hidden
  accept="audio/*"
  multiple
  onChange={addSongs}
 />
</Button>

{storage && (
 <Typography variant="caption" color="text.secondary" sx={storageText}>
  Storage: {storage.usedMB} MB / {MAX_STORAGE_MB} MB
 </Typography>
)}

<Divider/>

{songs.length===0 && (
 <Typography sx={emptyState}>
  No music added yet. Add songs to start listening 🎧
 </Typography>
)}

<List sx={{mt:1}}>
 {songs.map(song=>{
  const isActive=currentSong && currentSong.id===song.id

  return(
   <ListItemButton
    key={song.id}
    onClick={()=>startSong(song)}
    sx={songItem(isActive)}
   >

    <ListItemIcon sx={songIcon}>
     {isActive ? <PlayArrowIcon color="primary"/> : <MusicNoteIcon/>}
    </ListItemIcon>

    <ListItemText
     primary={song.name}
     secondary={`${song.size} MB`}
     primaryTypographyProps={{
      noWrap:true,
      fontWeight:isActive?600:400,
     }}
    />

    <IconButton
     edge="end"
     onClick={(e)=>{
      e.stopPropagation()
      removeSong(song)
     }}
    >
     <DeleteIcon fontSize="small"/>
    </IconButton>

   </ListItemButton>
  )
 })}
</List>

</Box>
)
}

