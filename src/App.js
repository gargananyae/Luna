import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Faq from "./pages/Faq";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { useAuthContext } from "./hooks/useAuthContext";
import Dashboard from "./pages/Dashboard";
import Practice from "./pages/Practice";
import MathPrac from "./pages/MathPrac";
import RandomOperation from "./pages/RandomOperation";
import FormMyine from "./pages/FormMyine";
import PeriodProducts from "./pages/PeriodProducts";
import PainRelief from "./pages/PainRelief";
import IntimateHygiene from "./pages/IntimateHygiene";
import CustomizableKits from "./pages/CustomizableKits";

function App() {
  const { user } = useAuthContext();
  console.log(user); //custom hook
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/login"
            element={user ? <Dashboard /> : <Login />}
          ></Route>
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Login />}
          ></Route>
          <Route path="/practice" element={<Practice />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/math" element={<MathPrac />}></Route>
          <Route path="/randomgenerator" element={<RandomOperation />}></Route>
          <Route path="/form" element={<FormMyine />}></Route>
          <Route path="/periodproducts" element={<PeriodProducts />}></Route>
          <Route path="/painrelief" element={<PainRelief />}></Route>
          <Route path="/intimatehygiene" element={<IntimateHygiene />}></Route>
          <Route
            path="/customizablekits"
            element={<CustomizableKits />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
