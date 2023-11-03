//import axios from "axios"
const axios = require("axios");

export const signup = async (obj) => {
  const response = await axios.post(
    "https://fundoobackend.azurewebsites.net/api/User/Register",
    obj
  );

  return response.data;
};
export const login = async(obj) => {
    let response = await axios.post('https://localhost:44304/api/User/Login', obj);
    return response
}    