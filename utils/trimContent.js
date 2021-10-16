const trimContent = (content) => {
  const firstLine = content.split('\n')[0]
  let textCount = 0
  let result = ''
  let endOfLine = true
  const array = firstLine.split(' ')
  for (let i = 0; i < array.length; i++) {
    const word = array[i]
    if (textCount >= 100) {
      endOfLine = false
      break
    }
    textCount += word.length
    result += ` ${word}`
  }

  if (!endOfLine) {
    result += '...'
  }

  return result
}

export default trimContent
