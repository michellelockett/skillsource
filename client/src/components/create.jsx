import React, { Component } from "react";
import ApiService from '../services/ApiService.jsx';
import CreateStep from './createStep.jsx';

class Create extends Component {
  constructor(props) {
    super(props);
    // this.steps = props.stepDetails;
    this.state = {
      steps: [
          {
            name: '',
            ordinalNumber: 0,
            text: ''
          },
          {
            name: '',
            ordinalNumber: 1,
            text: ''
          },
          {
            name: '',
            ordinalNumber: 2,
            text: ''
          }
        ]
    };
  }

  render() {

    const Steps = this.state.steps.map((step) => {
      return (
        <CreateStep key={step.ordinalNumber} data={step}/>
    )});

    return (
      <div className="create">
        <h3>Create a course:</h3>
        <form>
          <div className="input">
            <label>Course Name: </label>
            <input name="name" id="name" type="text"/>
          </div>
          {Steps}
          <button onClick={this.addStep} className="addStep" type="submit">Add a step</button>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }



  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        console.log("res:", res)
        this.props.history.replace('/');
      })
      .catch(err =>
        console.error('err in handleFormSubmit', err)
      );
  }

  addStep = () => {
    let stepsArray = this.state.steps.slice();
    let nextOrdinal = stepsArray.length;
    stepsArray.push(
      {
        name: '',
        ordinalNumber: nextOrdinal,
        text: ''
      }
    )
    this.setState({
      steps: stepsArray
    })
    console.log('New state.steps', this.state.steps, this.state.nextOrdinal)
  }


}

export default Create;