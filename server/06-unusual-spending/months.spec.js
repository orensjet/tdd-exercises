const months = require('./months')

describe('months spec', () => {
    it('canary shows the infrastructure works', () => {
        expect(true).toBe(true);
    });

    it('expects prior month', () => {
        let date = new Date();
        expect(months.prior()).toEqual({year: date.getFullYear(), month: date.getMonth()});
    });

    it('expects current month', () => {
        let date = new Date();
        expect(months.current()).toEqual({year: date.getFullYear(), month: date.getMonth() + 1});
    });

    it('What about January 1, 2020', () => {
        let date = new Date('January 1, 2020');
        expect(months.prior(date)).toEqual({year: 2019, month:12})
    })
});
