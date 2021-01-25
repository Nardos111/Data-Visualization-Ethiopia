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
          </ul>
          <Button color="warning" outline className="button">Go somewhere</Button>
        </div>
       
      </nav>
    
  );
}

export default Navbar;