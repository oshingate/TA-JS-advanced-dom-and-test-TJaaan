function checkFive(num) {
  let result = '';
  if (num < 5) {
    result = num + ' is less than 5.';
  } else if (num === 5) {
    result = num + ' is equal to 5.';
  } else {
    result = num + ' is greater than 5.';
  }

  return result;
}

function getWinner(a, b) {
  if (a.length == 0 || b.length == 0) {
    return `Try again`;
  } else {
    let result = '';
    if (a === b) {
      result = `TIE`;
    } else if (
      (a == 'paper' && b == 'rock') ||
      (a == 'scissor' && b == 'paper') ||
      (a == 'rock' && b == 'scissors')
    ) {
      result = `Player 1 wins!`;
    } else {
      result = `Player 2 wins!`;
    }
    return result;
  }
}

module.exports = { checkFive, getWinner };
