const {Movie} = require('./Movie');
//const {REGULAR, NEW_RELEASE, CHILDRENS} = require('./movie-codes');

let Customer = (name) => {
  let rentals = [];

  let getTotalCharge = () => {
    let total = 0
    for (let i = 0; i < rentals.length; i++) {
      total += rentals[i].getCharge();;
    }
    return total;
  }

  let getTotalFrequentRenterPoints = () => {
    let totalFrequentRenterPoints = 0;
    for (let i = 0; i < rentals.length; i++) {
       
      // add frequent renter points
      totalFrequentRenterPoints += rentals[i].getFrequentRentalPoints();
    }
    return totalFrequentRenterPoints;
  }

  return {
    get name() { return name; },
    addRental(rental) { rentals.push(rental); },

    statement() {
      //let total = 0;
      let frequentRenterPoints = 0;
      let statement = 'Rental Record for ' + name + '\n';

      for (let i = 0; i < rentals.length; i++) {
       
        // add frequent renter points
        frequentRenterPoints += rentals[i].getFrequentRentalPoints();

        //show figures for this rental
        statement += '\t' + rentals[i].movie.title + '\t' + rentals[i].getCharge().toString(10) + '\n';
      }

      //add footer lines
      statement += 'Amount owed is ' + getTotalCharge() + '\n';
      statement += 'You earned ' + getTotalFrequentRenterPoints() +
          ' frequent renter points';

      return statement;
    }
  };
};

module.exports = {Customer};


