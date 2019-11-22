let NewReleasePrice = () => {

    const { Movie } = require('./Movie');
    let getPriceCode = () => {
        return Movie.NEW_RELEASE;
    }

    function getCharge(daysRented) {
        let result = 3;
        return daysRented * 3;
    }
    function getFrequentRentalPoints(daysRented) {
        return (daysRented > 1?2:1);
      }
    return {
        getPriceCode,
        getCharge,
        getFrequentRentalPoints
    }
}

module.exports = { NewReleasePrice }