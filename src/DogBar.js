import React from 'react'
import './DogBar.css'; 

// function dogExample (dog, changeTheName) {
//     return <span onClick={changeTheName}>{dog.name}</span>
// }

// ^ this is another way we can factor out 
function DogBar (props) {
    return (
        <div className="dog-bar">
            {/* { props.dogs.map( (dog) => dogExample(dog, props.changeTheName) ) } */}
            {props.dogs.map(dog => <span key={dog.id} onClick={() => props.changeTheName(dog)}>{dog.name}</span>)}
        </div>
    )
}

export default DogBar
