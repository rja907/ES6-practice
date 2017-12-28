function pluck(array, property) {
  var values = array.map(function(val) {
    return val[property];
  });
  return values;
}
