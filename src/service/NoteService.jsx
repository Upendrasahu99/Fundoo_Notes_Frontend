import axios from "axios";


export const creatNote = async(addNoteObj) => {
        let response = await axios.post('https://localhost:44304/api/Note/Create', addNoteObj,{
        headers:{
         'Content-Type': "application/json",
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
    return response
}

export const IsArchive = () =>