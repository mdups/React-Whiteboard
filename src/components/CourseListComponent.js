import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import courseService from "../services/CourseService";

class CourseListComponent extends React.Component {
  state = {
    courses: []
  }

  componentDidMount() {
    courseService.findAllCourses()
      .then(courses => this.setState({
        courses: courses
      }))
  }

  createCourse = () => {
    const newCourse = {
      title: 'New Course',
      owner: 'me',
      lastUpdated: 'yesterday'
    }

    courseService.createCourse(newCourse)
      .then(actualCourse => this.setState(function (prevState) {
          return {
            courses: [
              ...prevState.courses, actualCourse
            ]
          }
        })
      )
      .catch(error => {})
  }

  deleteCourse = (course) => {
    courseService.deleteCourse(course._id)
      .then(status => this.setState(prevState => ({
          courses: prevState.courses.filter(c => c._id !== course._id)
        })))
  }


  render() {
    return(
      <div className="container">
        <div className="container">
          <button
            onClick={this.createCourse}
            className="btn btn-success float-right">
            Create Course
          </button>
          <h1 className="d-flex justify-content-center">Course List</h1>
        </div>
        <table className="table table-hover" id="MyTable">
          <thead>
          <tr>
            <th>Title</th>
            <th className="d-none d-md-table-cell"> Owner </th>
            <th className="d-none d-lg-table-cell"> Last Edited </th>
            <th>
              <i className="fa fa-th fa-lg"/>
              <i style={{padding: "5px"}} className="fa fa-bars fa-lg"/>

            </th>
          </tr>

          </thead>
          <tbody>
          {
            this.state.courses.map(course =>
              <CourseRowComponent
                key={course._id}
                deleteCourse={this.deleteCourse}
                course={course}/>
            )
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default CourseListComponent