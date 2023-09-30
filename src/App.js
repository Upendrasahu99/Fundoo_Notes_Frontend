import './App.css';
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login';
import {Routes, Route} from "react-router-dom"

function App(){
  return (
    <div className='App'>
      <Routes>
        <Route path = "" element = {<Login/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
      </Routes>
    </div>
  )
}


export default App;
