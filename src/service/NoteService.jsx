import axios from "axios";

//Define an asynchronous function named 'createNote' that takes on argument 'addObj'
export const creatNote = async(addNoteObj) => {
    //result store in response varaible
        let response = await axios.post('https://localhost:44304/api/Note/Create', addNoteObj,{
        //Set the request headers:
        headers:{
          //Content type of request data is JSON
         'Content-Type': "application/json",
         //Authorization token in the request headers.
         //Token retrive from browse local storage.
         'Authorization': `Bearer ${localStorage.getItem("Token")}`   
        }
    });
        return response;
    }
 

export const GetAllNote = () =>{
    let response = axios.get('https://localhost:44304/api/Note/Get',{
        headers:{
            'Content-Type': "application/json",
            'Authorization': `Bearer ${localStorage.getItem("Token")}`   
           }
    });
    return response;
}

export const IsArchive = async(obj) => {                                     // passing note It which we are passing in backend
    let response = await axios.put(`https://localhost:44304/api/Note/Archive/${obj.noteId}`, obj,{
        headers:{
         'Content-Type': "application/json",
         'Authorization': `Bearer ${localStorage.getItem("Token")}` 
        }
    });
    return response;
}

export const IsTrash = async(obj) => {
    let response = await axios.put(`https://localhost:44304/api/Note/Trash/${obj.noteId}`, obj,{
        headers:{
         'Content-Type': "application/json",
         'Authorization': `Bearer ${localStorage.getItem("Token")}` 
        }
    });
    return response;
}