import React, { Component } from 'react';
import CheckBox from './Checkbox';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      technologies: [
        { id: 2, value: "React", isChecked: false },
        { id: 3, value: "React.Native", isChecked: false },
        { id: 4, value: "Redux", isChecked: false },
        { id: 5, value: "Node.Js", isChecked: false }
      ]
    }
  }

  handleAllChecked = (event) => {
    let technologies = this.state.technologies
    technologies.forEach(technology => technology.isChecked = event.target.checked)
    this.setState({ technologies: technologies })
  }

  handleCheckChildElement = (event) => {
    let technologies = this.state.technologies
    let stackOfCheckbox = 0;
    let selectAll = document.getElementById(1)
    technologies.forEach(technology => {
      if (technology.value === event.target.value) {
        technology.isChecked = event.target.checked
      }
      if(technology.isChecked === true){
        stackOfCheckbox ++ ;
      } else {
        stackOfCheckbox -- ;
      }
      if(stackOfCheckbox === 4){
        selectAll.checked = true;
      } else {
        selectAll.checked = false;
      }
    })
    this.setState({ technologies: technologies })
  }



  render() {
    return (
      <div className="App">
        <h1> IN EXTENSO DIGITAL TEST </h1>
        <input id={1} type="checkbox" onClick={this.handleAllChecked} value="checkedall" /> Check / Uncheck All
        <ul>
          {
            this.state.technologies.map((technology) => {
              return (<CheckBox key={`key-${technology.id}`} handleCheckChildElement={this.handleCheckChildElement} {...technology} />)
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;