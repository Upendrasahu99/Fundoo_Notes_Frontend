import axios from "axios"

export const signup = async(obj) => {
        let response = await axios.post('https://localhost:44304/api/User/Register', obj);
        return response;
    }

export const login = async(obj) => {
    let response = await axios.post('https://localhost:44304/api/User/Login', obj);
    return response
}    