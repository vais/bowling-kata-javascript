module.exports = function score(rolls) {
  if (rolls.length === 0) {
    return 0;
  }

  return rolls[0] + score(rolls.slice(1));
};
