import React, { useEffect, useState } from "react";
import Appbar from "./component/appBar/Appbar";
import SideBar from "./component/navBar/NavBar";
import "./DashBoard.css";
import NoteOne from "./component/note/noteOne/NoteOne";
import NoteTwo from "./component/note/noteTwo/NoteTwo";
import NoteThree from "./component/note/noteThree/NoteThree";
import { GetAllNote } from "../service/NoteService";

const DashBoard = () => {

const[isDrawerOpen, setIsDrawerOpen] = useState(false); // For Opening and closing drawer
const[showNoteTwo, setShowNoteTwo] = useState(true);// For Note1 to Note2 or Note1 to Note2
const[getAll, setGetAll] = useState([]); // Set Array for get All Note (Get All/Archive notes/Trash notes)
const[section, setSection] = useState("notes") // Set Option for what notes we want to see (Get All/Archive notes/Trash notes)



const allNote = async() =>{
  let response = await GetAllNote();
  console.log(response.data.result)
  let newArray = [];

  if(section === "notes"){
    newArray = response.data.result.filter(filterData => filterData.archive === false && filterData.trash === false);   
  }

  else if(section === "archive"){
    newArray = response.data.result.filter(filterData => filterData.archive === true && filterData.trash === false);
  }

  else if(section === "trash"){
    newArray = response.data.result.filter(filterData => filterData.archive === false && filterData.trash === true);
  }
  // SetGetAll(response.data.result) //'result' is data comming from Http response and we storing result data in "data"
  console.log(newArray);
  setGetAll(newArray);
};

useEffect(  // If "Array" change it will change the virtual dom (side show) 
  () =>{ 
    allNote() //Show All notes
  },[getAll] //Dependency "Array"
);

const handleToggle = () =>{
  setShowNoteTwo(!showNoteTwo)
}

  return (
    <div className="Dashbord-Container">
        <div className="AppBar-Container">
        <Appbar/>
        </div>
        <div className="SideBar-Container">
            <SideBar setSection={setSection}/>
        </div>
        <div className="Note_Container">
        {
          showNoteTwo ? <NoteOne HandleToggle={handleToggle}/> : <NoteTwo HandleToggle={handleToggle} allNote={allNote}/>
        }
        </div> 
        <div className="Display-Note">
          {
            getAll.map((data) =>(
              <NoteThree key={data.id} data ={data} allNote={allNote} TrashSection = {data.trash} />
              ))
          }
        </div>
    </div>
  );
}

export default DashBoard;
