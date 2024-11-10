function smash(words) {
  let sentence = "";
  for (let i = 0; i < words.length; i++) {
    sentence += words[i];
    if (i != words.length - 1) sentence += " ";
  }
  return sentence;
}
console.log(smash(["a", "b", "c", "d"]));

function smashNew(words) {
  return words.join(" ");
}
console.log(smashNew(["a", "b", "c", "d"]));
