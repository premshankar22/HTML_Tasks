import { Box, Typography, Button, Stack, Paper } from "@mui/material"
import MusicNoteIcon from "@mui/icons-material/MusicNote"
import ChecklistIcon from "@mui/icons-material/Checklist"
import { useNavigate } from "react-router-dom"
import { FaReact } from "react-icons/fa"

export default function Home(){

  const navigate = useNavigate()

  return(
    <Box sx={{
      height:"100%",
      width:"100%",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      background:"#f5f7fb"
    }}>

      <Paper elevation={4} sx={{
        padding:4,
        width:"100%",
        maxWidth:420,
        textAlign:"center",
        borderRadius:3
      }}>

        <Stack
          direction="row"
          spacing={1.5}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" fontWeight={600}>
            React Task3rd
          </Typography>
          <FaReact size={28} style={{ color: "#1c54b2" }}/>
        </Stack>

        <Typography
          color="text.secondary"
          sx={{ marginBottom:3 }}
        >
          Choose an app to continue
        </Typography>

        <Stack spacing={2}>

          <Button
            variant="contained"
            size="large"
            startIcon={<MusicNoteIcon/>}
            onClick={() => navigate("/music")}
            sx={{
              paddingY:1.2,
              borderRadius:2,
              textTransform:"none",
              fontSize:"1rem"
            }}
          >
            Music Player
          </Button>

          <Button
            variant="outlined"
            size="large"
            startIcon={<ChecklistIcon/>}
            onClick={() => navigate("/todo")}
            sx={{
              paddingY:1.2,
              borderRadius:2,
              textTransform:"none",
              fontSize:"1rem"
            }}
          >
            Todo App
          </Button>

        </Stack>

      </Paper>

    </Box>
  )
}
