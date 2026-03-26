function filterRange(arr, a, b) {
  let result = [];

  for (let x of arr) {
    if (a <= x && x <= b) {
      result.push(x)
    }
  }
  return result
}
