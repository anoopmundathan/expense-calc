import queryString from 'query-string';

const apiUrl = 'https://aqueous-atoll-82890.herokuapp.com/expenses';

const saveExpense = (expense) => {
    fetch(apiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: queryString.stringify(expense)
    }).catch(error => console.log(error));
}

export default saveExpense;