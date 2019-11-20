let fahrenheit2Celsius = fahrenheit => (fahrenheit - 32) * 5/9;

describe('the fahrenheit-2-celcius canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });

   it ('fahrenheit2Celsius of 32 is 0',() => {
     expect(fahrenheit2Celsius(32)).toBe(0);
   });

   it ('fahrenheit2Celsius of 212 is 100', () => {
    expect(fahrenheit2Celsius(212)).toBe(100);
   });

   it ('fahrenheit2Celsius of 50 is 10', () => {
    expect(fahrenheit2Celsius(50)).toBe(10);
   });
   it ('fahrenheit2Celsius of -40 is -40', () => {
    expect(fahrenheit2Celsius(-40)).toBe(-40);
   });
});