function getMinMax(str) {

  const nums = str.split(' ')
      .map(Number)
      .filter(n => !isNaN(n))

      return {
        min: Math.min(...nums),
        max: Math.max(...nums),
      }
}
