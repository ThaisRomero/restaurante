import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import NavBar from "../src/components/NavBar/NavBar.jsx";

const Routes = () => {
   return(
       <BrowserRouter>
       <Routes>
<Route  element={<NavBar/>} path="/" exact />
       </Routes>
           
           
       </BrowserRouter>
   )
}

export default Routes;