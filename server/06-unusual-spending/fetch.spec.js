const {fetch} = require('./fetch')
const months = require('./months');
const {api} = require('./api');

jest.mock('./months');
jest.mock('./api');

describe('fetch spec', () => {
    it('canary shows the infrastructure works', () => {
        expect(true).toBe(true);
    });

    let userId = {
        userId: 'dummyUser'
    }

    let priorMonth = {
        year: 2019, month: 10
    }

    let currentMonth = {
        year: 2019, month: 11
    }

    let currentMonthPayments = [
        {amount: 100, category: "golf"},
        {amount: 50, category: "tennis"},
        {amount: 150, category: "golf"},
        {amount: 200, category: "tennis"}
    ]

    let priorMonthPayments = [
        {amount: 75, category: "golf"},
        {amount: 25, category: "tennis"},
        {amount: 100, category: "golf"},
        {amount: 150, category: "tennis"}
    ]

    let expectedPayments = [
        {
            month: {year:2019, month:11},
            payments: [
                {amount: 100, category: "golf"},
                {amount: 50, category: "tennis"},
                {amount: 150, category: "golf"},
                {amount: 200, category: "tennis"}
            ]
        },
        {
            month: {year:2019, month:10},
            payments: [
                {amount: 75, category: "golf"},
                {amount: 25, category: "tennis"},
                {amount: 100, category: "golf"},
                {amount: 150, category: "tennis"}
            ]
        }
    ]


    it('orchestrates the calls between months and api', () => {
        months.prior.mockReturnValue(priorMonth);
        months.current.mockReturnValue(currentMonth);
        api.mockImplementation((userId, month) => {
            if (month === currentMonth) return currentMonthPayments;
            else if (month === priorMonth) return priorMonthPayments;
        })

        let payments = fetch(userId);
        expect(months.prior).toHaveBeenCalled();
        expect(months.current).toHaveBeenCalled();
        expect(api).toHaveBeenCalledWith(userId, priorMonth);
        expect(api).toHaveBeenCalledWith(userId, currentMonth);
        expect(payments).toEqual(expectedPayments);
    });
   
});