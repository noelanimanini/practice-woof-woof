import React, {Component } from 'react';
import './App.css';
import DogBar from './DogBar';
import DogContainer from './DogContainer';

class App extends Component {

  state = {
    dogs: [],
    clicked: {}, 
    filter: false
  }

  componentDidMount () {
    fetch('http://localhost:3000/pups').then(response => response.json()).then(dogs => this.setState({
      dogs: dogs
    }))
  }

  changeTheName = (dog) => {
    this.setState({
      clicked: dog
    })
    
  }

  handleChange = () => {
      this.setState({
        filter: !this.state.filter
      })
  }

  filterDogs = () => {
    if (this.state.filter === false) {
      return this.state.dogs
    } else {
      return this.state.dogs.filter( dog => dog.isGoodDog === true)
    }
  }

  postDogs = (clickedDog) => {
    fetch(`http://localhost:3000/pups/${clickedDog.id}`, {
      method: "PATCH", 
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        isGoodDog: !clickedDog.isGoodDog
      })
    }).then(response => response.json())
    .then((potato) => {
      this.setState( (prevState) => {
        const newCopy = [...prevState.dogs]
        newCopy.filter(dog => dog.id == potato.id)[0].isGoodDog = potato.isGoodDog
        return {dogs: newCopy}
      })
    })
  }

  render () {
      return (
          <div className="App">
            <div id="filter-div">
              <button id="good-dog-filter" onClick={this.handleChange}>Filter good dogs: {this.state.filter ? 'ON' : 'OFF'}</button>
            </div>
            <div id="dog-bar">
              <DogBar dogs={this.filterDogs()} changeTheName={this.changeTheName}/>
            </div>
            <div id="dog-summary-container">
              <h1>DOGGO:</h1>
              <div id="dog-info">
                  <DogContainer clickedDog={this.state.clicked} postDogs={this.postDogs}/> 
              </div>
            </div>
          </div>
      )
  }
}

export default App;
