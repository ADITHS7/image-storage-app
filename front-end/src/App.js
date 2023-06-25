import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import AddImg from "./Pages/AddImg";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PrivateComponent from "./Pages/PrivateComponent";
import Images from "./Pages/Images";
import Image from "./Pages/Image";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/signin" element={<Signin/>}/>
     <Route path="/signup" element={<Signup/>}/>
      <Route element={<PrivateComponent/>}>
        <Route path="/" element={<Images/>}/>
        <Route path="/add" element={<AddImg/>}/>
        <Route path="/view/:id" element={<Image/>}/>
        
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
