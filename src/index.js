module.exports = function toReadable(number) {
    const arrOnes = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arrTens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arrDozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    
    if (Math.floor(number / 100) !== 0) {
        result += `${arrOnes[Math.floor(number / 100)]} hundred `;
        if (number % 100 === 0) {
            return result.trim();
        } else {
            number = number % 100;
        }
    }

    if (Math.floor(number / 10) !== 0) {
        if (Math.floor(number / 10) === 1) {
            result += `${arrTens[Math.floor(number % 10)]} `;
            return result.trim();
        } else {
            result += `${arrDozens[Math.floor(number / 10)]} `;
        }
        if (number % 10 === 0) {
            return result.trim();
        } else {
            number = number % 10;
        }
    }
    
    number === 0 ? result = arrOnes[0] : result += arrOnes[number];
    return result.trim();   
}