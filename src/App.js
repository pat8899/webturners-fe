import React from "react";

//import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./SharedComponents/Navbar/Navbar";
import Footer from "./SharedComponents/Footer/Footer";
import Insure from "./Pages/Insure/Insure";
//import Ben from "./Pages/Ben/Ben";
//import Home from "./Pages/Home/Home";


import "./App.css";

function App() {
  return (
     <>
     <Navbar />
     <Insure />
        {/* <switch>
         <Route exact path="/">
         <Redirect to="/home" />
       </Route>
         <Route exact path="/Insure" component={Insure}></Route>
         <Route path="/home" component={Home}></Route>
         <Route exact path="/Ben" component={Ben}></Route>


       </switch> */}
       <Footer />
     </>
  );
}
export default App;