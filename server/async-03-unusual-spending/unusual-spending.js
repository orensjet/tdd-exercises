const{fetch} = require('./fetch');
const{categorize} = require('./categorize');
const{email} = require('./email');

let unusualSpending = async (userId) => {
    try {
        email(userId, categorize(await fetch(userId)));
    }catch (err) {
        throw new Error('Unusual Spending Failed!');
    }
   

}

module.exports = {unusualSpending}