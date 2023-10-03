import { Navigate } from "react-router-dom";
import React from "react";

export const ProtectedRoute=({children})=>{
    if(localStorage.getItem("Token")){
        return children;
    }
    return <Navigate to="/"/>;
}