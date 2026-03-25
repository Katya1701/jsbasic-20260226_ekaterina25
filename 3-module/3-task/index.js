function camelize(str) {
  let arr = str.split('-')

  let result = arr.map((char, index) => {
    if (index === 0) {
      return char
    }
    return char[0].toUpperCase() + char.slice(1)
  })

  return result.join('')
}
