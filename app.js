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
  let tempArray = string.split("");
  let resultArray = [];
  tempArray.forEach((char) => {
    let charCode = char.charCodeAt(0);
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
      console.log("it's a letter");
    }
  });
};

module.exports = { sum, capitalize, reverse, calculator, cipher };
