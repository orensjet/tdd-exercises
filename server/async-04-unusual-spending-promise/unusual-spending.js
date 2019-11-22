const {fetch} = require('./fetch')
const {categorize} = require('./categorize')
const {email} = require('./email')


let unusualSpending = (userId) => {
    return fetch(userId).then((payments) => {
        email(userId, categorize(payments));
    }).catch ((err) => {
        throw new Error('Unusual Spending Failed!');
    })
   

}

module.exports = {unusualSpending}