const {Movie} = require('./Movie');
let Rental = (movie, daysRented) => {

  function getCharge(aRental) {
    let result =0;
    switch (movie.priceCode) {
      case Movie.REGULAR:
        result += 2;
        if (daysRented > 2) {
          result += (daysRented - 2) * 1.5;
        }
        break;
      case Movie.NEW_RELEASE:
        result += daysRented * 3;
        break;
      case Movie.CHILDRENS:
        result += 1.5;
        if (daysRented > 3) {
          result += (daysRented - 3) * 1.5;
        }
        break;
      default:
    }
    return result;
  }

  function getFrequentRentalPoints() {
   
    let frequentRenterPoints = 1;
  
    if ((movie.priceCode === Movie.NEW_RELEASE)&&
     daysRented  > 1)
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

module.exports = {Rental};
