import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseList from './ExpenseList';

const Person = (props) => {
    return(
        <div className='person'>
            <PersonImage />
            <AddButton 
                id={props.id}
                onClickAdd={props.onClickAdd}/>
        </div>
    );
}

Person.PropTypes = {
    id: PropTypes.string.isRequired,
    onClickAdd: PropTypes.func.isRequired
}

const PersonImage = () => <div className='person-image'></div>

const AddButton = (props) => {
    return(
        <div className='person-add-button'>
            <input 
                value='Add'
                type="button"
                onClick={props.onClickAdd.bind(null, props.id)}/>
            </div>
    );
}

AddButton.PropTypes = {
    id: PropTypes.string.isRequired,
    onClickAdd: PropTypes.func.isRequired
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personOne: '',
            personTwo: ''
        }
    }

    onClickAdd(id) {
        this.setState(() => {
            let newObject = {};
            newObject[id] = id;
            return newObject;
        });
    }

    render() {
        
        const personOne = this.state.personOne;
        const personTwo = this.state.personTwo;

        return(
            <div className='container'>
                <div><h1>Expense</h1></div>
                <div className='person-container'>

                    {!personOne &&
                        <Person
                            id='personOne'
                            onClickAdd={this.onClickAdd.bind(this)}/>
                    }

                    {personOne &&
                        <ExpenseList />
                    }

                    {!personTwo &&
                        <Person
                            id='personTwo' 
                            onClickAdd={this.onClickAdd.bind(this)}/>
                    }

                    {personTwo &&
                        <ExpenseList />
                    }

                </div>
            </div>
        );
    }
}

export default App;