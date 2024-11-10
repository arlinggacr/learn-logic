var number = function (array) {
  if (array.length === 0) return [];
  let result = [];
  for (let index = 0; index < array.length; index++) {
    let res = `${index + 1}: ${array[index]}`;
    result.push(res);
  }
  return result;
};

console.log(number(["a", "b", "c", "d"]));
