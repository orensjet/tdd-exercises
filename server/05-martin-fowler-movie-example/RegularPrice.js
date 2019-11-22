let RegularPrice = () => {
    
    const {Movie} = require('./Movie');
    let getPriceCode = () => {
        return Movie.REGULAR;
    }

    function getCharge(daysRented) {
        let result = 2
            
            if (daysRented > 2) {
              result += (daysRented - 2) * 1.5;
            }
        return result;
      }

    return {
        getPriceCode
    }
}

module.exports = { RegularPrice }