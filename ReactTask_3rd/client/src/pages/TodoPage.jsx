import { useState } from "react"
import {
Box,Typography,Accordion,AccordionSummary,AccordionDetails,
TextField,Button,List,ListItem,IconButton,Tooltip,Chip,Popover,Divider
} from "@mui/material"

import AddIcon from "@mui/icons-material/Add"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import AutorenewIcon from "@mui/icons-material/Autorenew"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"

export default function TodoPage(){

const [taskText,setTaskText]=useState("")
const [tasks,setTasks]=useState([])

const [dueDate,setDueDate]=useState("")
const [important,setImportant]=useState(false)
const [reminder,setReminder]=useState("")
const [repeat,setRepeat]=useState("")

const [calendarAnchor,setCalendarAnchor]=useState(null)
const [reminderAnchor,setReminderAnchor]=useState(null)
const [repeatAnchor,setRepeatAnchor]=useState(null)

  function addTask(){
      if(!taskText.trim()) return
    setTasks(prev=>[...prev,{title:taskText,dueDate,important,reminder,repeat}])
    setTaskText("")
     setDueDate("")
    setImportant(false)
    setReminder("")
    setRepeat("")
    }

   function pickDate(days){
   const d=new Date()
   d.setDate(d.getDate()+days)
    setDueDate(d.toISOString().split("T")[0])
   setCalendarAnchor(null)
  }

return(
 <Box sx={{width:"100%"}}>

           <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                       <Box sx={{display:"flex",alignItems:"center",gap:1}}>
                         <AddIcon color="primary"/>
                           <Typography fontWeight={600}>Add a Task</Typography>
                      </Box>
                   </AccordionSummary>

              <AccordionDetails>

                    <TextField
                        fullWidth
                        size="small"
                        placeholder="What do you need to do?"
                       value={taskText}
                       onChange={e=>setTaskText(e.target.value)}
                     />

                  <Box sx={{display:"flex",gap:1,mt:1}}>

                    <Tooltip title="Add due date">
                          <IconButton onClick={e=>setCalendarAnchor(e.currentTarget)}>
                            <CalendarTodayIcon/>
                          </IconButton>
                     </Tooltip>

                     <Tooltip title="Set reminder">
                           <IconButton onClick={e=>setReminderAnchor(e.currentTarget)}>
                             <NotificationsNoneIcon/>
                            </IconButton>
                     </Tooltip>

                     <Tooltip title="Repeat">
                        <IconButton onClick={e=>setRepeatAnchor(e.currentTarget)}>
                           <AutorenewIcon/>
                        </IconButton>
                     </Tooltip>

                     <Tooltip title="Mark important">
                       <IconButton onClick={()=>setImportant(p=>!p)}>
                           {important?<StarIcon color="warning"/>:<StarBorderIcon/>}
                          </IconButton>
                     </Tooltip>

                  </Box>

                 <Box sx={{mt:2,textAlign:"right"}}>
                    <Button variant="contained" onClick={addTask}>Add</Button>
                 </Box>

              </AccordionDetails>
           </Accordion>
 
          <Popover open={!!calendarAnchor} anchorEl={calendarAnchor} onClose={()=>setCalendarAnchor(null)}>
               <Box sx={{p:2,display:"flex",flexDirection:"column",gap:1}}>
                    <Typography fontWeight={600}>Due Date</Typography>
                       <Chip label="Today" onClick={()=>pickDate(0)}/>
                       <Chip label="Tomorrow" onClick={()=>pickDate(1)}/>
                       <Chip label="Next Week" onClick={()=>pickDate(7)}/>
                     <TextField type="date" size="small" value={dueDate} onChange={e=>setDueDate(e.target.value)}/>
                 </Box>
             </Popover>

          <Popover open={!!reminderAnchor} anchorEl={reminderAnchor} onClose={()=>setReminderAnchor(null)}>
               <Box sx={{p:2,display:"flex",flexDirection:"column",gap:1}}>
                   <Typography fontWeight={600}>Reminder</Typography>
                       <Chip label="Later Today" onClick={()=>setReminder("Later Today")}/>
                       <Chip label="Tomorrow" onClick={()=>setReminder("Tomorrow")}/>
                       <Chip label="Next Week" onClick={()=>setReminder("Next Week")}/>
                </Box>
           </Popover>

            <Popover open={!!repeatAnchor} anchorEl={repeatAnchor} onClose={()=>setRepeatAnchor(null)}>
               <Box sx={{p:2,display:"flex",flexDirection:"column",gap:1}}>
                   <Typography fontWeight={600}>Repeat</Typography>
                   <Chip label="Daily" onClick={()=>setRepeat("Daily")}/>
                   <Chip label="Weekly" onClick={()=>setRepeat("Weekly")}/>
                   <Chip label="Monthly" onClick={()=>setRepeat("Monthly")}/>
               </Box>
             </Popover>

         {tasks.length>0 && (
            <Box sx={{display:"flex",px:2,py:1}}>
                 <Typography sx={{flex:2,fontWeight:600}}>Title</Typography>
                 <Typography sx={{flex:1,fontWeight:600}}>Due Date</Typography>
                  <Typography sx={{width:80,fontWeight:600}}>Important</Typography>
            </Box>
         )}

      <Divider/>

      <List>
           {tasks.map((task,i)=>(
           <ListItem key={i} divider sx={{display:"flex"}}>
              <Typography sx={{flex:2}}>{task.title}</Typography>
              <Typography sx={{flex:1}}>{task.dueDate||"—"}</Typography>
                 <Box sx={{width:80}}>
                    {task.important && <StarIcon color="warning"/>}
                  </Box>
          </ListItem>
        ))}
      </List>

   </Box>
  )
}
