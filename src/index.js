module.exports = function toReadable (number) {
  const numbers = new Map([
    [0, 'zero'],
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety'],
    [100, 'one hundred'],
    [200, 'two hundred'],
    [300, 'three hundred'],
    [400, 'four hundred'],
    [500, 'five hundred'],
    [600, 'six hundred'],
    [700, 'seven hundred'],
    [800, 'eight hundred'],
    [900, 'nine hundred'],
  ]); 

  if (number.toString().length === 3) {
    if (number % 100 == 0) {
      return `${numbers.get(number)}`;
    }
    if (number % 10 == 0) {
      return `${numbers.get(Math.floor(number / 100) * 100)} ${numbers.get(+number.toString().slice(1))}`;
    } else {
      if (number.toString()[1] == 0) {
        return `${numbers.get(Math.floor(number / 100) * 100)} ${numbers.get(+number.toString().slice(2))}`
      }
      if (number.toString().slice(1) >= 10 && number.toString().slice(1) <= 19) {
        return `${numbers.get(Math.floor(number / 100) * 100)} ${numbers.get(+number.toString().slice(1))}`
      }
      return `${numbers.get(Math.floor(number / 100) * 100)} ${numbers.get(Math.floor((+number.toString().slice(1)) / 10) * 10)} ${numbers.get(+number.toString().slice(2))}`;
      }
    }
  
  if (number.toString().length === 2) {
    if (number >= 10 && number <= 19) {
      return `${numbers.get(number)}`;
    }
    if (number % 10 == 0) {
      return `${numbers.get(number)}`;
    } else {
      return `${numbers.get(Math.floor(number / 10) * 10)} ${numbers.get(Math.floor(+number.toString().slice(1)))}`;
    }
  }
  if (number.toString().length === 1) {
      return `${numbers.get(number)}`;
  }
}
