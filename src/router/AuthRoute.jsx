import {Navigate } from "react-router-dom";
import React from "react";

export const AuthRoute=({children})=>{
    if(localStorage.getItem("Token")===undefined || localStorage.getItem("Token")===null){
        console.log("false");
        return children;
    }
    return <Navigate to='/dashboard'/>;

};