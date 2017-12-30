function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1);
}

//----------

function join(array1, array2) {
  return [...array1, ...array2];
}

//----------

function unshift(array, ...args) {
  return [...args, ...array];
}
