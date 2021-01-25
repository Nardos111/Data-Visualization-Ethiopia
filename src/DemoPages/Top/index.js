import React from "react";
import "./index.css";
import {
 
  Button
} from 'reactstrap';


function Navbar() {
  return (
   
      <nav className="navbar">
        <div className="navbar-container">
          <img src="../../images/bar.png" alt="icon"/>
          <ul>
           
            <li className="nav-item">            
                Data Visualization
        </li>
          
          <li> <Button color="warning" outline className="button">አማርኛ</Button> </li>
          <li> <Button color="warning" outline className="button2">Dark Mode</Button> </li>
          </ul>
        </div>
       
      </nav>
    
  );
}

export default Navbar;