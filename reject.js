function reject(array, iteratorFunction) {
  var a = array.filter(function(arr) {
    return !iteratorFunction(arr);
  });
  return a;
}
