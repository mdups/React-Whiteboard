import React from "react";
import {updateCourse} from "../services/CourseService";
import "bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/font-awesome/css/font-awesome.min.css"
import { Link } from 'react-router-dom';

class CourseGridComponent extends React.Component {
  state = {
    editing: false,
    courseTitle: this.props.course.title,
    course: this.props.course,
    highlighted: false
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

        <div className={`wbdv-card card p-2 col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2
         ${this.state.highlighted && 'bg-warning'}`}
        onClick={
                () => this.setState({highlighted: !this.state.highlighted})}>
          <div className="card-title">
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
          </div>
          <div>Owner:{this.props.course.owner}</div>
          <div>Last Updated: {this.props.course.lastUpdated}</div>
          <div>
            {this.state.editing === false &&
              <i className="fa fa-trash fa-lg"
                onClick={() =>
                  this.props.deleteCourse(this.props.course)}/>
            }

            {
              this.state.editing &&
              <i className="fa fa-check fa-lg" onClick={this.updateCourse}/>
            }
            {
              !this.state.editing &&
              <i style={{padding: "5px"}}
                className="fa fa-edit fa-lg" onClick={() => this.setState({editing: true})}/>
            }
          </div>
        </div>
      );
    }
  }
export default CourseGridComponent