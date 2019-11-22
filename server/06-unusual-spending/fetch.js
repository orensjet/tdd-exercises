const months = require('./months');
const {api} = require('./api');

let fetch = (userId) => {
    let priorMonth = months.prior();
    let currentMonth = months.current();
    let priorMonthPayments = api(userId, priorMonth);
    let currentMonthPayments = api(userId, currentMonth);

    return [
        {month: months.current(), payments: api(userId, months.current())},
        {month: months.prior(), payments: api(userId, months.prior())}
    ];

}

module.exports = {fetch} 