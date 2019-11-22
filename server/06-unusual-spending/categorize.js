let categorize = (payments) => {
    let result = [];
    payments.forEach((monthPayment) => {
        let categorizedPayment = categorizePayments(monthPayment.payments);
        result.push({ month: monthPayment.month, payments: categorizedPayment });
    });
    return result;
}

const categorizePayments = (payments) => {
    let paymentMap = new Map();
    payments.forEach((payment) => {
        let amt = paymentMap.get(payment.category);
        amt = amt ? amt + payment.amount : payment.amount;
        paymentMap.set(payment.category, amt);
    });

    let result = [];
    paymentMap.forEach((val, key) => {
        result.push ({ amount: val, category: key });
    });
    return result;
}

module.exports = {categorize}