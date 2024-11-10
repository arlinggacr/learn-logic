function hero(bullets, dragons) {
  return bullets / 2 >= dragons ? true : false;
}

function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(100, 40));
console.log(hero(1500, 751));
