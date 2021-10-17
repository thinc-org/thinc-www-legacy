/**
 *
 * @param {string} content : content from RSS content:encodedSnippet;
 * @returns trimmed content to first line and not more than 100 characters
 */
const trimContent = (content: string) => {
  const firstLine = content.split('\n')[0]
  const CHARECTER_LIMIT = 100
  let charCount = 0
  let result = ''
  let endOfLine = true
  const array = firstLine.split(' ')
  for (let i = 0; i < array.length; i++) {
    const word = array[i]
    if (charCount >= CHARECTER_LIMIT) {
      endOfLine = false
      break
    }
    charCount += word.length
    result += ` ${word}`
  }

  if (!endOfLine) {
    result += '...'
  }

  return result
}

export default trimContent
