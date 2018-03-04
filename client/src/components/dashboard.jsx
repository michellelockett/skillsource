import React from "react";
import Snippet from './snippet.jsx';
import ApiService from '../services/ApiService.jsx';

class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state={
      courses: []
    }
  }

  componentDidMount(){
    ApiService.getEnrollments().then(res => {
      this.setState({courses: res});
    })
  }

  render(){
    const snippets = this.state.courses.map((course) => {
      return (
        <Snippet
          key={course.id}
          data={course}
        />
      )
    });
    return (
      <div>
        <div className="tab">
          <button className="tablinks">Enrolled</button>
          <button className="tablinks">Completed</button>
          <button className="tablinks">Created Courses</button>
        </div>
        <div className="dashboard">
          <h3>You are enrolled in:</h3>
          {snippets}
        </div>
        <div className="completed">
          <h3>You have completed:</h3>
        </div>
      </div>
    );
  }
}

export default Dashboard;