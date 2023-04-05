export const formatTextReviews = (number: number): string => {
  let str =''
  const chars = number.toString().split('')
  switch (chars.at(-1)) {
    case '1':
      str = 'отзыв'
      break
    case '2':
    case '3':
    case '4':
      str='отзыва'
      break
    case '0':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      str='отзывов'
      break
    default:
      str = 'отзывов'
      break
  }
  if(chars.at(-2) === '1') str = 'отзывов'
  return str
}
