import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Login} from "./Login";
import {Register} from "./Register";
import {Profile} from "./Profile";
import CourseListComponent from "./CourseListComponent";
import CourseGridComponent from "./CourseGridComponent";
import {CourseEditor} from "./CourseEditor";

export class CourseManager extends React.Component {
  render() {
    return(
      <Router>
        <div>

          <Link to="/login" style={{padding: "5px"}}>Login</Link>
          <Link to="/register" style={{padding: "5px"}}>Register</Link>
          <Link to="/profile" style={{padding: "5px"}}>Profile</Link>
          <Link to="/courses" style={{padding: "5px"}}>Course List</Link>
          <Link to="/grid" style={{padding: "5px"}}> GridView </Link>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/courses" exact component={CourseListComponent}/>
          <Route path="/grid" exact component={CourseGridComponent}/>

          <Route path="/edit/:courseId" exact component={CourseEditor}/>
        </div>
      </Router>
    )
  }
}