const score = ([first, second, third, ...rest]) => {
  // strike
  if (first === 10 && second !== undefined && third !== undefined) {
    return first + second + third + score([second, third, ...rest]);
  }

  // spare
  if (first + second === 10) {
    return first + second + third + score([third, ...rest]);
  }

  // open frame
  if (first + second < 10) {
    return first + second + score([third, ...rest]);
  }

  return 0;
};

const parse = (string) =>
  [...string].map((character, currentIndex, characters) => {
    switch (character) {
      case 'X':
        return 10;
      case '/':
        return 10 - parseInt(characters[currentIndex - 1]);
      default:
        return parseInt(character);
    }
  });

module.exports = {
  score,
  parse,
};
