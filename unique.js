function unique(array) {
  return array.reduce(function(acc, arr) {
    if (
      arr ===
      acc.find(function(ac) {
        return ac === arr;
      })
    );
    else {
      acc.push(arr);
    }
    return acc;
  }, []);
}
