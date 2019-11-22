let NewReleasePrice = () => {

    const { Movie } = require('./Movie');
    let getPriceCode = () => {
        return Movie.NEW_RELEASE;
    }

    function getCharge(daysRented) {
        let result = 3;
        return daysRented * 3;
    }
    return {
        getPriceCode,
        getCharge
    }
}

module.exports = { NewReleasePrice }