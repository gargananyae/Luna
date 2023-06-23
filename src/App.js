import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Faq from "./pages/Faq";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from "./context/AuthContext";
import { useAuthContext } from "./hooks/useAuthContext";
import Dashboard from "./pages/Dashboard";
import Practice from "./pages/Practice";
import Math from "./pages/Math";


function App() {
  const {user} = useAuthContext()
  console.log(user) //custom hook
  return (
    
      <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Landing/>} ></Route>
        <Route path = "/login" element={user?<Dashboard/>:<Login/>} ></Route>
        <Route path = "/dashboard" element={user?<Dashboard/>:<Login/>} ></Route>
        <Route path = "/practice" element ={<Practice/>}></Route>
        <Route path = "/faq"  element={<Faq/>}></Route>
        <Route path = "/math" element={<Math/>}></Route>
        
      </Routes>
      
    </BrowserRouter>
  </div>
 
   
  );
}


export default App;
