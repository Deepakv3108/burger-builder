import { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      {name: "Deepak", age:28},
      {name: "Malatidevi", age:52},
      {name: "Deepa", age:27}
    ]
  }

  switchNamehandler = (newName) => {
    this.setState({
      person: [
        {name: newName, age:28},
        {name: "Malatidevi", age:50},
        {name: "Deepa1", age:27}
      ]
    });
  }

  render() {
    return(
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>It is working</p>
        <button onClick={() => this.switchNamehandler("Vishwakarma")}>Switch Name</button>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}
          />
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          click={this.switchNamehandler.bind(this, "Bhoju")}
          >Hobby: Watch Over Family</Person>
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age}
          />
      </div>
    );
  }
}

export default App;
