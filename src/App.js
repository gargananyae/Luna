import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Faq from "./pages/Faq";
import {BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Landing/>} ></Route>
          <Route path = "/login" element={<Login/>} ></Route>
          <Route path = "/faq"  element={<Faq/>}></Route>

          
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}


export default App;
