module.exports = function toReadable (number) {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90];
    const strNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
     'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 
     'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let hundred = Math.floor(number / 100);
    let decimal = Math.floor(number % 100 / 10);
    let digit = Math.floor(number % 10);

    let result = '';
    if (hundred != 0) {
        result += strNumbers[numbers.indexOf(hundred)] + ' hundred';
    } 

    if (decimal != 0) {
        if (hundred != 0) {
            result += ' ';
        }
        if (decimal == 1) {
            result += strNumbers[numbers.indexOf(digit + 10)];
        } else {
            result += strNumbers[numbers.indexOf(decimal * 10)];
            if (digit != 0) {
                result += ' ' + strNumbers[numbers.indexOf(digit)];
            }
        }
    } else {
        if (hundred != 0 && digit != 0) {
            result += ' ';
        }
        if (digit != 0 || (digit == 0 && hundred == 0)) {
            result += strNumbers[numbers.indexOf(digit)];
        } 
    }
    return result;
}
