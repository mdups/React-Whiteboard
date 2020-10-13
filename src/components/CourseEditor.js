import React from "react";
import {findCourseById} from "../services/CourseService";
import {WidgetList} from "./WidgetList.js";
import {TopicPills} from "./TopicPills.js";
import {LessonTabs} from "./LessonTabs.js";
import {ModuleList} from "./ModuleList.js";

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
          <ModuleList/>
          <div class="col-8">
            <LessonTabs/>
            <br/>
            <TopicPills/>
            <br/>
            <WidgetList/>
          </div>
        </div>
      </div>
    )
  }
}
