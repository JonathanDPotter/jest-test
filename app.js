function sum(a, b) {
  return a + b;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverse(string) {
  let tempArray = string.split("");
  tempArray.reverse();
  const stringBack = tempArray.join("");
  return stringBack;
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

const cipher = (string) => {
  let tempArray = string.split(""),
    resultArray = [],
    resultString = "";
  tempArray.forEach((char) => {
    let charCode = char.charCodeAt(0);
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
      charCode = charCode + 3;
      if ((charCode > 90 && charCode < 97) || charCode > 122) {
        charCode = charCode - 26;
      }
    }
    resultArray.push(String.fromCharCode(charCode));
  });
  resultString = resultArray.join("");
  return resultString;
};

const arrayAnalysis = (array) => {
  const result = {};

  result.average = array.reduce((a, b) => a + b, 0) / array.length;
  result.min = Math.min(...array);
  result.max = Math.max(...array);
  result.length = array.length;

  return result;
};

module.exports = {
  sum,
  capitalize,
  reverse,
  calculator,
  cipher,
  arrayAnalysis,
};
