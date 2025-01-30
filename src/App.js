import './App.css';
import Navbar from './components/navbar';
import Home from "./pages/home"
import About from "./pages/about"
import Service from "./pages/services"
import Contact from "./pages/contact"
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
<Router>
<Navbar/>
 <Routes>

          <Route path="/" element={  <Home />}/>
          <Route path='/about' element={<About/>}/>
         <Route path='/services' element={<Service/>} />
         <Route path='/contact' element={<Contact/>} />
        </Routes>
       </Router>

      



    </div>
  );
}

export default App;
