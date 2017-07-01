import React, { Component } from 'react';

export default class ExpenseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            amount: ''
        }
    }

    onChange(e) {
        this.setState({
            amount: e.target.value
        });
    }
    
    onClickAdd() {
         this.setState({
            list: this.state.list.concat(this.state.amount),
            amount: ''
        });

    }

    render() {
        const expenseList = this.state.list.map(item => <li>{item}</li>);
        console.log(expenseList);
        return(
            <div>
                <ul>
                    {expenseList}
                </ul>
                
                <input 
                    placeholder='Enter Amount'
                    onChange={this.onChange.bind(this)}
                    value={this.state.amount}
                    type="text"/>
                <input
                    value='Add' 
                    onClick={this.onClickAdd.bind(this)}
                    type="button"/>
            </div>
        );
    }
}
