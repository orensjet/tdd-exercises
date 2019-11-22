const { NewReleasePrice } = require('./NewReleasePrice');
const { RegularPrice } = require('./RegularPrice');
const { ChildrensPrice } = require('./ChildrensPrice');
const REGULAR = 0;
const NEW_RELEASE = 1;
const CHILDRENS = 2;

let Movie = (title, somePriceCode) => {
  let priceCode;

  let setPriceCode = (aPriceCode) => {
    switch (aPriceCode) {
      case REGULAR:
        priceCode = RegularPrice();
        break;
      case NEW_RELEASE:
        priceCode = NewReleasePrice();
        break;
      case CHILDRENS:
        priceCode = ChildrensPrice();
        break;
      default:
    }
  }

  setPriceCode(somePriceCode);

  let getPriceCode = () => {
    return priceCode.getPriceCode();
  }

  function getCharge(daysRented) {
    let result = 0;
    switch (getPriceCode()) {
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

    if ((getPriceCode() === NEW_RELEASE) &&
      daysRented > 1)
      frequentRenterPoints++;
    return frequentRenterPoints;
  }



  return {
    get title() { return title; },
    getPriceCode,
    setPriceCode,
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
