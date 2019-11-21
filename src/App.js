import React from 'react';
import Ninjas from './ninjas';
import AddNinja from './AddNinja';
import Clock from './clock';
import Greeting from './conditional-render';

let {Component} = React;

class App extends Component {
  state = {
    ninjas : [
      {name : "Ryu", age: 30, belt: 'black', id: 1},
      {name : "Yoshi", age: 20, belt: 'green', id: 2},
      {name: 'Crystal', age: 25, belt: 'pink', id: 3}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];

    this.setState({//adding new ninja to the array
      ninjas : ninjas
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          My first react app
        </h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja}/>
        <Clock date={new Date()}/>
        <Greeting isLoggedIn={false}/>
      </div>
    )
  }
}

export default App;
