import React, { useEffect, useState } from "react";
// import Appbar from "./component/appBar/Appbar";
import SideBar from "./component/navBar/NavBar";
import "./DashBoard.css";
import NoteOne from "./component/note/noteOne/NoteOne";
import NoteTwo from "./component/note/noteTwo/NoteTwo";
import NoteThree from "./component/note/noteThree/NoteThree";
import { GetAllNote } from "../service/NoteService";

const DashBoard = () => {

const[showNoteTwo, setShowNoteTwo] = useState(true);
const[getAll, SetGetAll] =useState([]);

const AllNote = async() =>{
  let response = await GetAllNote();
  console.log("message")
  SetGetAll(response.data.result) //'result' is data comming from Http response and we storing result data in "data"
  console.log(response.data.result)
};

useEffect(
  () =>{
    AllNote()
  }, []
);

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
          showNoteTwo ? <NoteOne HandleToggle={HandleToggle}/> : <NoteTwo HandleToggle={HandleToggle} AllNote={AllNote}/>
        }
        </div>
        <div className="Display-Note">
          {
            getAll.map((data) =>(
              <NoteThree key={data.id} data ={data} AllNote={AllNote}/>
              ))
          }
        </div>
    </div>
  );
}

export default DashBoard;
