function findWhere(array, criteria) {
  return array.find(function(arr){
      return criteria['height'] === arr.height;
  })
}
