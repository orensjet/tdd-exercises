let ChildrensPrice = () => {
    
    const {Movie} = require('./Movie');
    let getPriceCode = () => {
        return Movie.CHILDRENS;
    }

    function getCharge(daysRented) {
        let result = 1.5;    
            if (daysRented > 3) {
              result += (daysRented - 3) * 1.5;
            }
        return result;
      }
    return {
        getPriceCode,
        getCharge
    }
}

module.exports = { ChildrensPrice }