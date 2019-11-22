let prior = (date = new Date()) => {
    if(date.getMonth() === 0) return {
        year: date.getFullYear()-1, month: 12
    };
    //let date = new Date();
    return {year: date.getFullYear(), month: date.getMonth()};
}

let current = () => {
    let date = new Date();
    return {year: date.getFullYear(), month: date.getMonth() + 1};
}

module.exports = {prior, current}