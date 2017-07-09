import queryString from 'query-string';

const saveExpense = (expense) => {
    fetch('http://localhost:3000/expenses', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: queryString.stringify(expense)
    }).catch(error => console.log(error));
}

export default saveExpense;