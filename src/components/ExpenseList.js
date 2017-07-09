import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class ExpenseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            amount: ''
        }
    }
    
    componentDidMount() {
        this.refs.txtAmount.focus();
    }

    onChange(e) {
        this.setState({
            amount: e.target.value
        });
    }
    
    onClickAdd() {
        this.refs.txtAmount.focus();
         this.setState({
            list: this.state.list.concat(this.state.amount),
            amount: ''
        });
    }

    onClickDone() {
        this.refs.txtAmount.focus();
        const sum = this.state.list.reduce((prev, next) => {
            return parseFloat(prev) + parseFloat(next);
        },0);
        this.props.onDone(this.props.id, sum);
    }

    render() {
        const expenseList = this.state.list.map((item, index) => <li key={index}>{item}</li>);
        return(
            <div className='list-container'>
                <div className='list'>
                    <ul>
                        {expenseList}
                    </ul>
                </div>

                <div className='form-container'>
                    <div className='form-amount-container'>
                        <input
                            ref='txtAmount'
                            className='form-amount' 
                            placeholder='Enter Amount'
                            onChange={this.onChange.bind(this)}
                            value={this.state.amount}
                            type="number"/>
                    </div>

                    <div className='form-button-container'>
                        <input
                            className='form-add'
                            value='Add' 
                            onClick={this.onClickAdd.bind(this)}
                            disabled={!this.state.amount}
                            type="button"/>
                        <input 
                            className='form-done'
                            value='Done'
                            onClick={this.onClickDone.bind(this)}
                            disabled={!this.state.list.length}
                            type="button"/>
                    </div>
                </div>
            </div>
        );
    }
}

ExpenseList.PropTypes = {
    id: PropTypes.string.isRequired,
    onDone: PropTypes.func.isRequired
}