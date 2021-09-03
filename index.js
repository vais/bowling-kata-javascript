const score = ([first, second, third, ...rest]) => {
  if (first === 10 && second !== undefined && third !== undefined) {
    return first + second + third + score([second, third, ...rest]);
  }

  if (first + second === 10) {
    return first + second + third + score([third, ...rest]);
  }

  if (first + second < 10) {
    return first + second + score([third, ...rest]);
  }

  return 0;
};

module.exports = {
  score,
};
