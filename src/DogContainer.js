import React from 'react'; 

export default class DogContainer extends React.Component {
    render () {
        console.log(this.props.clickedDog)
        return (
            <div>
                <div>{this.props.clickedDog.name}</div>
                <img src={this.props.clickedDog.image} alt="dog pixs" />  
                <div>{this.props.clickedDog.isGoodDog === true ? 'Such a good pup!' : 'A very bad dog :('}</div>
                <button onClick={() => this.props.postDogs(this.props.clickedDog)}> Is a good dog?</button>
            </div>
            // 
        )
    }
}