function isArmstrongNumber(num) {
    const strNum = num.toString();
    const digits = strNum.length;
    let sum = 0;
  
    for (let i = 0; i < digits; i++) {
      const digit = parseInt(strNum[i], 10);
      sum += Math.pow(digit, digits);
    }
  
    return sum === num;
  }
  
  function checkArmstrongNumber() {
    const inputNumber = prompt("Enter a number to check if it's an Armstrong number:");
  
    if (inputNumber === null) {
      return;
    }
  
    const num = parseInt(inputNumber, 10);
  
    if (isNaN(num)) {
      alert("Invalid input. Please enter a valid number.");
    } else {
      if (isArmstrongNumber(num)) {
        confirm(`${num} is an Armstrong number!`);
      } else {
        confirm(`${num} is not an Armstrong number.`);
      }
    }
  }
  