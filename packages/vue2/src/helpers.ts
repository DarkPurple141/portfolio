export const kebabify = (words: string) => words.toLowerCase().replace(' ', '-')

export const prettyDate = (date: string) =>
  new Date(date)
    .toString()
    .split(' ')
    .slice(0, 4)
    .join(' ')
    .replace(/( \d+)$/, ',$1')

export const isTopLevelRoute = (name: string) => {
  let val = true
  switch (name) {
    case 'Home':
    case 'BlogSubject':
    case 'Article':
      val = false
      break
    default:
      val = true
  }
  return val
}
