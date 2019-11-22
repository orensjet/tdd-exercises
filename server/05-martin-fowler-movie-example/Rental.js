const { Movie } = require('./Movie');
let Rental = (movie, daysRented) => {

  function getCharge() {
    return movie.getCharge(daysRented);
  }

  function getFrequentRentalPoints() {
    return movie.getFrequentRentalPoints(daysRented)
    
  }
  return {
    get movie() { return movie; },
    get daysRented() { return daysRented; },
    getCharge,
    getFrequentRentalPoints

  };
};

module.exports = { Rental };
