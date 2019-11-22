const {categorize} = require('./categorize')
describe('categorize spec', () => {
    it('canary shows the infrastructure works', () => {
        expect(true).toBe(true);
    });

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

    it('combines and summarizes month and category', () => {
        expect(categorize(payments)).toEqual(categorizedPayments);
    })

});