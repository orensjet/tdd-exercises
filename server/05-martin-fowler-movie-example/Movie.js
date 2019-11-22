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
    return priceCode.getCharge(daysRented);    
  }

  function getFrequentRentalPoints(daysRented) {
    return priceCode.getFrequentRentalPoints(daysRented);
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
