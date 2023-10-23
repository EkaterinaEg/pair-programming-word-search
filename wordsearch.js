const transpose = function (matrix) {
  let output = [];

  for (let i = 0; i < matrix[0].length; i++) {
    output.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      output[j].push(matrix[i][j]);
    }
  }

  return output;
};

const wordSearch = (letters, word) => {
  if (!letters.length) {
    return false;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const horizontalBackwardsJoin = letters.map((ls) => ls.reverse().join(""));

  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  const verticalJoinBackwards = transpose(letters).map((ls) =>
    ls.reverse().join("")
  );
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (v of verticalJoin) {
    if (v.includes(word)) return true;
  }
  for (h of horizontalBackwardsJoin) {
    if (h.includes(word)) return true;
  }
  for (j of verticalJoinBackwards) {
    if (j.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;

wordSearch(
  [
    ["A", "W", "C", "F", "Q", "U", "A", "L"],
    ["S", "E", "I", "N", "F", "E", "L", "D"],
    ["Y", "F", "C", "F", "Q", "U", "A", "L"],
    ["H", "M", "J", "T", "E", "V", "R", "G"],
    ["W", "H", "C", "S", "Y", "E", "R", "L"],
    ["B", "F", "R", "E", "N", "E", "Y", "B"],
    ["U", "B", "T", "W", "A", "P", "A", "I"],
    ["O", "D", "C", "A", "K", "U", "A", "S"],
    ["E", "Z", "K", "F", "Q", "U", "A", "L"],
  ],
  "FRANK"
);
