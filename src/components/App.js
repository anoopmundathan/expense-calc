import React, { Component } from 'react';

const Person = () => {
    return(
        <div className='person'>
            <PersonImage />
            <AddButton />
        </div>
    );
}

const PersonImage = () => <div className='person-image'></div>
const AddButton = () => {
    return(
        <div className='person-add-button'>
            <input 
                value='Add'
                type="button"/>
            </div>
    );
}

class App extends Component {
    render() {
        return(
            <div className='container'>
                <div><h1>Expense</h1></div>
                <div className='person-container'>
                    <Person />
                    <Person />
                </div>
            </div>
        );
    }
}

export default App;