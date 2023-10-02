import React from 'react';
import Appbar from './component/appBar/Appbar'
import SideBar from './component/navBar/NavBar';
import'./DashBoard.css';

const DashBoard = () => {
    return (
        <div className='Dashbord-Container'>
        <div className='AppBar-Contaier'>
        <Appbar/>
        </div>
        <div className='SideBar-Container'>
         <SideBar/>
        </div>
        </div>
    );
}

export default DashBoard;
