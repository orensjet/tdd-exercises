const { unusualSpending } = require('./unusual-spending');
const { fetch } = require('./fetch');
const { categorize } = require('./categorize');
const { email } = require('./email');

jest.mock('./fetch')
jest.mock('./categorize')
jest.mock('./email')

describe('unusual spending module test case', () => {

    it('canary shows the infrastructure works', () => {
        expect(true).toBe(true);
    })

    let userId = {
        userId: "dummyUser"
    }
    let payments = [
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

    let categorizedPayments = [
        {
            month: {year:2019, month:11},
            payments: [
                {amount: 250, category: "golf"},
                {amount: 250, category: "tennis"}
                
            ]
        },
        {
            month: {year:2019, month:10},
            payments: [
                {amount: 175, category: "golf"},
                {amount: 175, category: "tennis"}
            ]
        }
    ]
    it('orchestrates the call between fetch, categorize, and email', () => {

        fetch.mockReturnValue(payments);
        categorize.mockReturnValue(categorizedPayments);

        unusualSpending(userId);
        expect(fetch).toHaveBeenCalledWith(userId);
        expect(categorize).toHaveBeenCalledWith(payments);
        expect(email).toHaveBeenCalledWith(userId, categorizedPayments);
    })

});