import React, { useState } from "react";
// import Appbar from "./component/appBar/Appbar";
import SideBar from "./component/navBar/NavBar";
import "./DashBoard.css";
import NoteOne from "./component/note/noteOne/NoteOne";
import NoteTwo from "./component/note/noteTwo/NoteTwo";

const DashBoard = () => {

const[showNoteTwo, setShowNoteTwo] = useState(true);

const HandleToggle = () =>{
  setShowNoteTwo(!showNoteTwo)
}

  return (
    <div className="Dashbord-Container">
        <div className="AppBar-Container">
        
        </div>
        <div className="SideBar-Container">
            <SideBar/>
        </div>
        <div className="Note_Container">
        {
          showNoteTwo ? <NoteOne HandleToggle={HandleToggle}/> : <NoteTwo HandleToggle={HandleToggle}/>
        }
        </div>
    </div>
  );
};

export default DashBoard;
