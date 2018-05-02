function longestWord(sentence) {
  var str = sentence.split(' ');
  var longest = 0;
  var word = null;
  for (var i = 0; i <= str.length - 1; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}

longestWord('The quick brown fox jumped over the lazy dog');

//better

function longestWord(sentence) {
  return sentence.split(' ').sort(sortByLength)[0];
}

function sortByLength(a, b) {
  return b.length - a.length;
}
