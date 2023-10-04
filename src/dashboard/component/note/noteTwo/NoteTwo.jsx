import React from "react";
import { Button, IconButton, Paper, colors } from "@mui/material";
import "./NoteTwo.css"
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'; //pin
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'; //Remind me
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined'; //Collab
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'; //Background Color
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';//AddImage
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';//Archive
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'; //More



function NoteTwo(props){
    return(
        <div>
            <Paper elevation={3} className="PaperTwo-Container" >
                <div className="Upper-Div">
                    {/* <div style={{width:"550px"}}> */}
                    <input style={{width:"550px"}} type="text" placeholder="Title" ></input>
                    {/* </div> */}
                    <IconButton aria-label="Pin note" >
                    <PushPinOutlinedIcon/>
                    </IconButton>
                </div>
                <div className="Middle-Div">
                    <input style={{width:"550px"}} type="text" placeholder="Take a note..." ></input>
                </div>
                <div className="Lower-Div">

                   <div className="Lower-Div-Icon">
                   <IconButton aria-label="Remind me">
                   <AddAlertOutlinedIcon/>
                   </IconButton>

                   <IconButton aria-label="Collaborator">
                   <PersonAddAlt1OutlinedIcon/>
                   </IconButton>
                   
                   <IconButton aria-label="Background options">
                   <ColorLensOutlinedIcon/>
                   </IconButton>

                   <IconButton aria-label="Add image">
                   <ImageOutlinedIcon/>
                   </IconButton>

                   <IconButton aria-label="Archive">
                   <ArchiveOutlinedIcon/>
                   </IconButton>

                   <IconButton aria-label="More">
                   <MoreVertOutlinedIcon/>
                   </IconButton>
                   </div>

                   <div style={{width:"200px"}}> {/* Space between icon and close button*/}

                   </div>
                    <Button onClick={props.HandleToggle} style={{color:"gray"}}>
                        Close
                    </Button>
                </div>
            </Paper>
        </div>
    );
}
export default NoteTwo