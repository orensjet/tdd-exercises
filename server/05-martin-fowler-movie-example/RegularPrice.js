let RegularPrice = () => {

    const { Movie } = require('./Movie');
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
    function getFrequentRentalPoints(daysRented) {
        return 1;
      }
    return {
        getPriceCode,
        getCharge,
        getFrequentRentalPoints
    }
}

module.exports = { RegularPrice }