import React from 'react';
import SignUp from '../pages/signup/SignUp'
import Login from '../pages/login/Login';
import {Routes, Route} from "react-router-dom"
import DashBoard from '../dashboard/DashBoard'
import { BrowserRouter } from 'react-router-dom';
import { AuthRoute } from './AuthRoute';
import { ProtectedRoute } from './ProtectedRoute';

function Router(){
  return (
    <div className='App'>
    <BrowserRouter>
       <Routes>
        <Route path = "/" element = {<AuthRoute><Login/></AuthRoute>}/>
        <Route path='/signup' element = {<AuthRoute><SignUp/></AuthRoute>}/>
        <Route path='/dashboard' element= {<ProtectedRoute><DashBoard/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>        
    </div>
  )
}

export default Router;