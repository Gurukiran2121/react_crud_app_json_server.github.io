import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Createuser from "./component/Createuser";
import Home from "./component/Home";
import Listing from "./component/Listing";
import Edituser from "./component/Edituser";
function App() {
  return (
   <>
   
   <BrowserRouter>
      <Home/>
   <Routes>
    
    <Route path="/" element = {<Listing/>}/>
    <Route path="/create" element = {<Createuser/>}/>
    <Route path="/edituser/:id" element = {<Edituser/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
