module.exports = function toReadable (num) {
  if (num === 0) return 'zero';

  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        str = num.toString();

  if (num < 20) {
    return ones[num];
  }

  if (str.length === 2) {
    const num__ = ( str[1] != '0' ) ? ` ${ ones[str[1]] }` : '';
    return tens[str[0]] + num__;
  }

  // 100 and more

  if (str.length === 3) {
    if (str[1] === '0' && str[2] === '0') {
      return ones[str[0]] + ' hundred';
    }
    else {
      const num___ = +str.replace(str[0], '');
      return ones[str[0]] + ' hundred ' + toReadable(num___);
    }
  }
}
