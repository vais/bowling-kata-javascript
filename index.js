module.exports = function score(rolls) {
  if (rolls.length === 0) {
    return 0;
  }

  if (rolls[0] + rolls[1] === 10) {
    return rolls[0] + rolls[1] + rolls[2] + score(rolls.slice(2));
  }

  return rolls[0] + score(rolls.slice(1));
};
