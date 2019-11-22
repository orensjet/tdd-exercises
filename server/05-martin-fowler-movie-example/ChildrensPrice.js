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
      function getFrequentRentalPoints(daysRented) {
        return 1;
      }
    return {
        getPriceCode,
        getCharge,
        getFrequentRentalPoints
    }
}

module.exports = { ChildrensPrice }