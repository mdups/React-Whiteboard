import React from "react";
import {findCourseById} from "../services/CourseService";

export class CourseEditor extends React.Component{

  state = {
    course: {
      title: "",
      _id: ""
    }
  }

  componentDidMount() {
    const courseId = this.props.match.params.courseId
    console.log(courseId)
    findCourseById(courseId)
      .then(actualCourse => this.setState({
        course: actualCourse
      }))
  }

  render() {
    return(
      <div class="container">
        <h1>
          <i class="fa fa-times"></i>
          Course Editor
        </h1>

        <div class="row">
          <div class="col-4">

            <ul class="list-group">
              <li class="list-group-item">Module 1 <i class="fa fa-times float-right"></i> </li>
              <li class="list-group-item">Module 2 <i class="fa fa-times float-right"></i></li>
              <li class="list-group-item active">Module 3 <i class="fa fa-times float-right"></i></li>
              <li class="list-group-item">Module 4 <i class="fa fa-times float-right"></i></li>
              <li class="list-group-item">Module 5 <i class="fa fa-times float-right"></i></li>
              <li class="list-group-item">Module 6 <i class="fa fa-times float-right"></i></li>
            </ul>
          </div>
          <div class="col-8">


            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a href="#"  class="nav-link">Lesson 1</a>
              </li>
              <li class="nav-item">
                <a href="#"  class="nav-link active">Lesson 2</a>
              </li>
              <li class="nav-item">
                <a href="#"  class="nav-link">Lesson 3</a>
              </li>
              <li class="nav-item">
                <a href="#"  class="nav-link">Lesson 4</a>
              </li>
              <li class="nav-item">
                <a href="#"  class="nav-link">Lesson 5</a>
              </li>
              <li class="nav-item">
                <a href="#"  class="nav-link">Lesson 1</a>
              </li>
            </ul>

            <br/>

            <ul class="nav nav-pills">
              <li class="nav-item">
                <a href="#"  class="nav-link">Topic 1</a>
              </li>
              <li class="nav-item">
                <a href="#"  class="nav-link active">Topic 2</a>
              </li>
              <li class="nav-item">
                <a href="#"  class="nav-link">Topic 3</a>
              </li>
              <li class="nav-item">
                <a href="#"  class="nav-link">Topic 4</a>
              </li>
              <li class="nav-item">
                <a href="#"  class="nav-link">Topic 5</a>
              </li>
              <li class="nav-item">
                <a href="#"  class="nav-link">Topic 1</a>
              </li>
            </ul>

            <br/>

            <div>
              <h3>
                Heading Widget
                <span class="float-right">
                              <a class="btn btn-warning">
                                  <i class="fa fa-arrow-up"></i>
                              </a>
                              <a class="btn btn-warning">
                                  <i class="fa fa-arrow-down"></i>
                              </a>
                              <select>
                                  <option>Heading</option>
                                  <option>YouTube</option>
                                  <option>Image</option>
                                  <option>Document</option>
                                  <option>Slides</option>
                              </select>
                              <a class="btn btn-danger">Delete</a>
                                  </span>
              </h3>

              <input class="form-control"/>
              <select class="form-control">
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
                <option>Heading 4</option>
                <option>Heading 5</option>
              </select>
              <input class="form-control"
                     title="Name your widget" placeholder="Widget Name"/>
            </div>


          </div>
        </div>


      </div>
    )
  }
}
