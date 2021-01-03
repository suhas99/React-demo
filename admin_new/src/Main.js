import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
// import Home from "./Home";
import Stuff from "./Stuff";
import userdataform from "./UserData";
import "./Main.css";
import getpuserform from "./Getpuser";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {/* <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul> */}
          <div class="sidenav"style={{color: "yellow"}}>

            <h3 style={{color: "yellow",textAlign:"center"}}>Synctactic Admin</h3>
            {/* <NavLink to="/">User</NavLink>
            <NavLink to="/stuff">Auth</NavLink>
            <NavLink to="/contact">Pipelines</NavLink> */}
            <button class="dropdown-btn" onClick={dropdownHandle}>User
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-container">
            <NavLink to="/create">Add User</NavLink>
            <NavLink to="/stuff">Get users</NavLink>
            <NavLink to="/getuser">Get particular user</NavLink>
            <NavLink to="/modify">Modify user</NavLink>
            </div>

            <button class="dropdown-btn" onClick={dropdownHandle}>Auth
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-container">
            <NavLink to="/#">SignIn</NavLink>
            <NavLink to="/#">Google auth</NavLink>
            <NavLink to="/#">Get auth details</NavLink>
            <NavLink to="/#">Modify auth details</NavLink> 
            </div>

            </div>
          <div className="content" id="contentdiv">
            <Route path="/getuser" component={getpuserform} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/modify" component={userdataform} />
            <Route path="/create" component={userdataform} />
          </div>

        </div>
      </HashRouter>
    );
  }
}
function dropdownHandle() {
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}

export default Main;