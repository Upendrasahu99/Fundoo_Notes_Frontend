import React from "react";
import "./NoteThree.css"
import { Paper,IconButton } from "@mui/material";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'; //pin
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'; //Remind me
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined'; //Collab
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'; //Background Color
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';//AddImage
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';//Archive
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'; //More
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'; //Bin
import { IsArchive } from "../../../../service/NoteService";
import { IsTrash } from "../../../../service/NoteService";


function NoteThree(props){

    const ArchiveNote = (Id) => {
        let obj = {noteId : Id}
        IsArchive(obj).then((response) => {
            console.log(response);
        })
    }

    const TrashNote = (Id) => {
        let obj = {noteId : Id}
        IsTrash(obj).then((response) => {
            console.log(response);
        })
    }
    return(
        <div className="Note3-Container">
            <Paper elevation={3} className="PaperThree-Container" >
                <div className="Upper-Div">
                    <div style={{width:"550px"}}>
                    {props.data.title}   
                    </div>
                    <IconButton aria-label="Pin note" >
                    <PushPinOutlinedIcon/>
                    </IconButton>
                </div>

                <div className="Middle-Div">
                {props.data.note}
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

                   <IconButton aria-label="Archive" onClick={() =>{ ArchiveNote(props.data.noteId)}}> 
                   {/* "data" is coming from dashbord(parent component)   */}
                   <ArchiveOutlinedIcon/>
                   </IconButton>

                   <IconButton aria-label="Trash" onClick={() => { TrashNote(props.data.noteId)}}>
                   <DeleteOutlinedIcon/>
                   </IconButton>
                   </div>
                </div>
            </Paper>
        </div>
    );
}

export default NoteThree;