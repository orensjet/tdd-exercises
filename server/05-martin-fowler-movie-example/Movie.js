const REGULAR = 0;
const NEW_RELEASE = 1;
const CHILDRENS = 2;

let Movie = (title, somePriceCode) => {
  let priceCode = somePriceCode;

  function getCharge(daysRented) {
    let result = 0;
    switch (priceCode) {
      case REGULAR:
        result += 2;
        if (daysRented > 2) {
          result += (daysRented - 2) * 1.5;
        }
        break;
      case NEW_RELEASE:
        result += daysRented * 3;
        break;
      case CHILDRENS:
        result += 1.5;
        if (daysRented > 3) {
          result += (daysRented - 3) * 1.5;
        }
        break;
      default:
    }
    return result;
  }

  function getFrequentRentalPoints(daysRented) {

    let frequentRenterPoints = 1;

    if ((priceCode === NEW_RELEASE)&&
     daysRented  > 1)
     frequentRenterPoints++;
    return frequentRenterPoints;
  }



  return {
    get title() { return title; },
    get priceCode() { return priceCode; },
    set priceCode(code) { priceCode = code; },

    REGULAR,
    NEW_RELEASE,
    CHILDRENS,
    getCharge,
    getFrequentRentalPoints
  };
};

Movie.REGULAR = REGULAR;
Movie.NEW_RELEASE = NEW_RELEASE;
Movie.CHILDRENS = CHILDRENS;

module.exports = { Movie };
