const {fetch} = require('./fetch')
const {categorize} = require('./categorize')
const {email} = require('./email')


let unusualSpending = (userId) => {
    email(userId, categorize(fetch(userId)));

}

module.exports = {unusualSpending}