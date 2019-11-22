const { Movie } = require('./Movie');
let Rental = (movie, daysRented) => {

  function getCharge() {
    return movie.getCharge(daysRented);
  }

  function getFrequentRentalPoints() {
    return movie.getFrequentRentalPoints(daysRented)
    let frequentRenterPoints = 1;

    if ((movie.priceCode === Movie.NEW_RELEASE) &&
      daysRented > 1)
      frequentRenterPoints++;
    return frequentRenterPoints;
  }
  return {
    get movie() { return movie; },
    get daysRented() { return daysRented; },
    getCharge,
    getFrequentRentalPoints

  };
};

module.exports = { Rental };
