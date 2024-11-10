const reverseSeq = (n) => {
  let result = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

const reverseSeqNew = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};

console.log(reverseSeq(5));
console.log(reverseSeqNew(5));
