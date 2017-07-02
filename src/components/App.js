import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseList from './ExpenseList';

const Person = (props) => {
    return(
        <div className='person'>
            <PersonImage 
                id={props.id}/>
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

const PersonImage = (props) => <div className='person-image'><p>{props.id}</p></div>
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
            personTwo: '',
            personOneUpdated: false,
            personTwoUpdated: false,
            personOneAmount: 0,
            personTwoAmount: 0,
            totalAmount: 0,
            perHeadAmount: 0,
            personOneFinalAmount: 0,
            personTwoFinalAmount: 0
        }
    }

    onClickAdd(id) {
        this.setState(() => {
            let newObject = {};
            newObject[id] = id;
            return newObject;
        });
    }

    onDone(id, sum) {
        this.setState(() => {
            let newObject = {};
            newObject[id + 'Amount'] = sum;
            newObject[id + 'Updated'] = true;
            return newObject;
        });
    }

    onCalculate() {
        const personOneAmount = this.state.personOneAmount;
        const personTwoAmount = this.state.personTwoAmount;

        const total = personOneAmount + personTwoAmount;
        const perHead = total / 3;
        
        let personOneFinalAmount;
        let personTwoFinalAmount;

        if(personOneAmount > perHead) {
            personOneFinalAmount = personOneAmount - perHead;    
        } else {
            personOneFinalAmount = (perHead - personOneAmount) * -1;    
        }

        if(personTwoAmount > perHead) {
            personTwoFinalAmount = personTwoAmount - perHead;    
        } else {
            personTwoFinalAmount = (perHead - personTwoAmount) * -1;    
        }

        this.setState({
            totalAmount: total,
            perHeadAmount: perHead,
            personOneFinalAmount: personOneFinalAmount,
            personTwoFinalAmount: personTwoFinalAmount
        });
    }

    render() {
        
        const personOne = this.state.personOne;
        const personTwo = this.state.personTwo;
        const personOneUpdated = this.state.personOneUpdated;
        const personTwoUpdated = this.state.personTwoUpdated;
        const personOneAmount = this.state.personOneAmount;
        const personTwoAmount = this.state.personTwoAmount;
        const personOneFinalAmount = this.state.personOneFinalAmount;
        const personTwoFinalAmount = this.state.personTwoFinalAmount;

        return(
            <div className='container'>
                <div className='header'>
                    <h1>Expense</h1>
                </div>
                <div className='person-container'>

                    {!personOne &&
                        <Person
                            id='personOne'
                            onClickAdd={this.onClickAdd.bind(this)}/>
                    }

                    {personOne && !personOneUpdated &&
                        <ExpenseList 
                            id='personOne'
                            onDone={this.onDone.bind(this)}
                        />
                    }

                    {personOneUpdated && !personOneFinalAmount && 
                       <div className='person'>
                           <p>Person One Total</p>
                           <p>{personOneAmount}</p>
                       </div>
                    }
                    

                    {!personTwo &&
                        <Person
                            id='personTwo' 
                            onClickAdd={this.onClickAdd.bind(this)}/>
                    }

                    {personTwo && !personTwoUpdated &&
                        <ExpenseList 
                            id='personTwo'
                            onDone={this.onDone.bind(this)}
                        />
                    }

                    {personTwoUpdated && !personTwoFinalAmount &&
                      <div className='person'>
                        <p>Person Two Total</p>
                        <p>{personTwoAmount}</p>
                      </div>
                    }

                    {personOneUpdated && personTwoUpdated && !personOneFinalAmount &&
                     !personTwoFinalAmount &&
                        <div>
                            <input
                                value='calculate' 
                                type="button"
                                onClick={this.onCalculate.bind(this)}/>
                        </div>
                    }

                    {personOneFinalAmount && personTwoFinalAmount &&
                        <div className='person'>
                            <p>Total:{this.state.totalAmount}</p>
                            <p>PerHead:{this.state.perHeadAmount}</p>
                            <p>Person1 Amount: {this.state.personOneFinalAmount}</p>
                            <p>Person2 Amount: {this.state.personTwoFinalAmount}</p>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default App;