import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ExpenseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            amount: 0
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

    onClickDone() {
        const sum = this.state.list.reduce((prev, next) => {
            return parseInt(prev) + parseInt(next);
        },0);
        this.props.onDone(this.props.id, sum);
    }

    render() {
        const expenseList = this.state.list.map((item, index) => <li key={index}>{item}</li>);
        return(
            <div>
                <ul>
                    {expenseList}
                </ul>
                
                <input 
                    placeholder='Enter Amount'
                    onChange={this.onChange.bind(this)}
                    value={this.state.amount}
                    type="number"/>
                <input
                    value='Add' 
                    onClick={this.onClickAdd.bind(this)}
                    type="button"/>
                <input 
                    value='Done'
                    onClick={this.onClickDone.bind(this)}
                    type="button"/>
            </div>
        );
    }
}

ExpenseList.PropTypes = {
    id: PropTypes.string.isRequired,
    onDone: PropTypes.func.isRequired
}