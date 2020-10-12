import React from "react";
import {updateCourse} from "../services/CourseService";
import "bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/font-awesome/css/font-awesome.min.css"
import { Link } from 'react-router-dom';

class CourseRowComponent extends React.Component {
  state = {
    editing: false,
    courseTitle: this.props.course.title,
    course: this.props.course
  }

  constructor(props) {
    super(props)

  }

  updateTitle = (event) => {
    const newTitle = event.target.value
    const course = { ...this.state.course }
    course.title = newTitle
    this.setState({
      course: course,
      courseTitle: newTitle
    })
  }

  updateCourse = () => {
    this.setState({editing: false})
    updateCourse(this.state.course._id, this.state.course)
  }

  render() {
    return (
      <tr>
        <td>
          {
            this.state.editing === true &&
            <input
              onChange={this.updateTitle}
              value={this.state.courseTitle}/>
          }
          {
            this.state.editing === false &&
            <Link to={`/edit/${this.state.course._id}`}>
              {this.state.courseTitle}
            </Link>
          }
        </td>
        <td>{this.props.course.owner}</td>
        <td>{this.props.course.lastUpdated}</td>
        <td>
          <i className="fa fa-trash" onClick={() => this.props.deleteCourse(this.props.course)}>
          </i>
          {
            this.state.editing &&
            <button onClick={this.updateCourse}>
              {console.log("yo it got here")}
              Ok
            </button>
          }
          {
            !this.state.editing &&
            <i className="fa fa-edit" onClick={() => this.setState({editing: true})}/>
          }
        </td>
      </tr>
    );
  }
}

export default CourseRowComponent