import { Paper } from "@mui/material";
import Box from '@mui/material/Box';
import React from "react";
import "./NoteOne.css"
  

function NoteOne(props){
    return(
        <div>        
      <Paper onClick={props.HandleToggle} elevation={3} className="Paper-Container" >
       <div className="Paper-Component">
       Take a note...
       </div>
      </Paper>
        </div>
    );
}

export default NoteOne;