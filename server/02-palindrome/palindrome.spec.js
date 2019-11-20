let isPalindrome = (phrase) => {
    if(!phrase || phrase.trim().length === 0) return false;
    return phrase.replace(/\W+/g,'').toLowerCase() === phrase.split('').reverse().join('').replace(/\W+/g, '').toLowerCase();
}

describe('a palindrome function', () => {
    it('canary shows the infrastructure works',() => {
        expect(true).toBe(true);
    });

    it('radar is a palindrome', () => {
        expect(isPalindrome('radar')).toBe(true);
    });
    it('dog is not a palindrome', () => {
        expect(isPalindrome('dog')).toBe(false);
    });
    it('Race, car is a palindrome', () => {
        expect(isPalindrome('Race, car')).toBe(true);
    });
    it('mom dad mom is a palindrome', () => {
        expect(isPalindrome('mom dad mom')).toBe(true);
    });
    it('"" is not a palindrome', () => {
        expect(isPalindrome('')).toBe(false);
    });
    it('"   " is not a palindrome', () => {
        expect(isPalindrome('   ')).toBe(false);
    });
    it('undefined is not a palindrome', () => {
        expect(isPalindrome()).toBe(false);
    });
});